//import libreria para cambiar colores en la consola
import 'colors'
import connection from './config/db/connection'
import servidor from './config/server/Servidor'
import cronService from './services/cron.service'
import moment from 'moment'

// import baseDiscador from './services/baseDiscador'

// console.log(baseDiscador.generaBase(41, 1, 221, 1, 999999, 20000, 30000, 44, 44, 0, 0, 0, 0, 21000, 29000, 0, 0, null, null, null, null, null, null, null, null, null, null, null, null, 
//     null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 'Mora1', 'Mora3', 'Mora2', 'Mora2', 'Masculino', 'Masculino', '', ''))

moment.tz.setDefault('UTC');

const server = new servidor()
const app = server.crearServidor()
cronService.generarTareas()

//app.use(express.static(path.join(__dirname, 'public')))

app.listen(app.get('port'), async ()=>{    
    console.log('servidor escuchando en puerto ' + app.get('port'))
    try{
        await connection.authenticate()                
        console.log('Nos hemos conectado a la base de datos exitosamente'.bgGreen.black)               
    }catch(error){        
        console.log('Error al conectar a la base de datos'.bgRed.white)
    }
})

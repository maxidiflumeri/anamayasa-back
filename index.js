//import libreria para cambiar colores en la consola
import 'colors'
// importa servidor express
import express from 'express'
//dependencia que me permite ver el path donde se encuentra el proyecto
import path from 'path'
import connection from './config/db/connection'
import servidor from './config/server/Servidor'
import cronService from './services/cron.service'
import moment from 'moment'
moment.tz.setDefault('UTC');

const server = new servidor()
const app = server.crearServidor()
cronService.generarTareas()



//app.use(express.static(path.join(__dirname, 'public')))

// https.createServer({
//   key: fs.readFileSync('my_cert.key'),
//   cert: fs.readFileSync('my_cert.crt')
// }, app).listen(app.get('port'), async () => {
//   console.log('servidor escuchando en puerto ' + app.get('port'))
//   try {
//     await connection.authenticate()
//     console.log('Nos hemos conectado a la base de datos exitosamente'.bgGreen.black)
//   } catch (error) {
//     console.log('Error al conectar a la base de datos'.bgRed.white)
//   }
// });

app.listen(app.get('port'), async ()=>{    
    console.log('servidor escuchando en puerto ' + app.get('port'))
    try{
        await connection.authenticate()        
        console.log('Nos hemos conectado a la base de datos exitosamente'.bgGreen.black)               
    }catch(error){        
        console.log('Error al conectar a la base de datos'.bgRed.white)
    }
})
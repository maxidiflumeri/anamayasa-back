import express from 'express'
//cors sirve para permitir interacción entre apis de diferente dominio
import cors from 'cors'
//morgan sirve para recibir por consola el detalle de los require que hacen a mis Apis.
import morgan from 'morgan'
//compression sirve para comprimir solicitudes http
import compression from 'compression'
//Helmet ayuda a proteger la aplicación de algunas vulnerabilidades web conocidas mediante el establecimiento correcto de cabeceras HTTP.
//import helmet from 'helmet'
import router from '../../routes/index'
import constantes from '../shared/constantes' 
//import connect from 'connect-history-api-fallback'


class Servidor {
    crearServidor(){
        const app = express()        
        app.use(express.json({limit: '50mb'}));
        app.use(express.urlencoded({limit: '50mb', extended:true}));
//        app.use(connect())    
        app.use(compression())
//      app.use(helmet())        
        app.use(cors())
        app.use(morgan('dev'))
        app.use('/api', router)
        app.set('port', constantes.PORT || 3000)    
        return app
    }
}

export default Servidor
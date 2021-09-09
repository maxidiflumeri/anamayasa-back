import cron from 'node-cron'
import models from '../models/index'
import envioMail from '../services/envioMail.service'
import axios from 'axios'
import moment from 'moment'

async function generarTareas(){            
    try{        
        let tareas = await models.tareas.findAll()        
        cron.schedule('30 06 * * *', () => {   
            let arrayTareas = cron.getTasks()
            arrayTareas.forEach((tarea) => {
                tarea.stop()
            })       
            generoTareas(tareas)        
        });
    }catch(error){
        console.log(error)
    }
}



function generoTareas(tareas){       
    tareas.forEach( async (tarea) => {        
        try{                   
            cron.schedule(tarea.patron, async () => {            
                if(tarea.activa==1){
                    if(tarea.proceso == 'API'){
                        try{
                            let horario = moment.tz(moment(), 'America/Buenos_Aires').format('DD/MM/YYYY HH:mm')
                            await axios.get('https://www.anamayasa.com/neotel/neoapi/webservice.asmx/Login?DEVICE=SIP/MaxiExterno2&USUARIO=1709&CLAVE=33689563')
                            await envioMail.enviarMail('maximd@anamayasa.com.ar', 'Diflu2020', tarea.destinatario1, 'LOGUEO EXITOSO', `Horario de Logueo: ${horario}`, null)
                        }catch(error){
                            await envioMail.enviarMail('maximd@anamayasa.com.ar', 'Diflu2020', tarea.destinatario1, 'LOGUEO ERRONEO', error.message, null)
                        }
                    }else {
                        await envioMail.enviarMail('maximd@anamayasa.com.ar', 'Diflu2020', tarea.destinatario1, tarea.asunto, tarea.cuerpo, null)
                    }                
                }
            })            
        }catch(error){
            console.log("errorrrrrr")
            console.log(error)
        }
    })           
}

export default {
    generarTareas
}
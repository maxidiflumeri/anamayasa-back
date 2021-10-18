import cron from 'node-cron'
import models from '../models/index'
import envioMail from '../services/envioMail.service'
import axios from 'axios'
import moment from 'moment'

async function generarTareas(){            
    try{                    
        cron.schedule('30 23 * * *', () => {   
            let arrayTareas = cron.getTasks()
            arrayTareas.forEach((tarea) => {
                tarea.stop()                
            })                   
            generoTareas()        
        });
    }catch(error){
        console.log(error)
    }
}



async function generoTareas(){       
    let tareas = await models.tareas.findAll()    
    tareas.forEach( async (tarea) => {        
        try{                   
            cron.schedule(tarea.patron, async () => {            
                if(tarea.activa==1){
                    if(tarea.proceso == 'API'){
                        try{
                            let horario = moment.tz(moment(), 'America/Buenos_Aires').format('DD/MM/YYYY HH:mm')
                            await axios.get(tarea.accion)
                            await envioMail.enviarMail('maximd@anamayasa.com.ar', 'Diflu2020', tarea.destinatario1, tarea.asunto, `${tarea.cuerpo}. Horario de la acción: ${horario}`, null)
                        }catch(error){
                            await envioMail.enviarMail('maximd@anamayasa.com.ar', 'Diflu2020', tarea.destinatario1, 'ERROR AL EJECUTAR LA TAREA', error.message, null)
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
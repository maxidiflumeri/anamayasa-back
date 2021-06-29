import cron from 'node-cron'
import models from '../models/index'
import envioMail from '../services/envioMail.service'

async function generarTareas(){
    console.log(cron.getTasks())            
    try{        
        let tareas = await models.tareas.findAll()        
        cron.schedule('45 11 * * *', () => {   
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
    console.log('entro a la funcion generar y recibo las tareas')     
    tareas.forEach( (tarea) => {        
        try{
            console.log('genero tarea ' + tarea.id_tarea)        
            cron.schedule(tarea.patron, async () => {            
                let resultado = await envioMail.enviarMail('maximd@anamayasa.com.ar', 'Diflu2020', tarea.destinatario1, tarea.asunto, tarea.cuerpo, null)                
            })            
        }catch(error){
            console.log("errorrrrrr")
            console.log(error)
        }
    })
    console.log(cron.getTasks())            
}

export default {
    generarTareas
}
import cron from 'node-cron'
import models from '../models/index'
import envioMail from '../services/envioMail.service'

// let tareas = [
//     {
//         id: 1,
//         patron: "39 12 * * *",
//         accion: "voy a mandar un mail",
//         correo: "pepe@gmail.com"
//     },
//     {
//         id: 2,
//         patron: "39 12 * * *",
//         accion: "voy a mandar un mail",
//         correo: "pepe3@gmail.com"
//     }
// ]

async function generarTareas(){
    try{        
        let tareas = await models.tareas.findAll()        
        cron.schedule('23 13 * * *', () => {          
            generoTareas(tareas)        
        });
    }catch(error){
        console.log(error)
    }
}


// const tarea = cron.schedule('05 13 * * *', () => {          
//     generoTareas()

// });

function generoTareas(tareas){   
    console.log('entro a la funcion generar y recibo las tareas')     
    tareas.forEach( (tarea) => {        
        try{
            console.log('genero tarea ' + tarea.id_tarea)        
            cron.schedule(tarea.patron, async () => {            
                let resultado = await envioMail.enviarMail('maximd@anamayasa.com.ar', 'Diflu2020', tarea.destinatario1, tarea.asunto, tarea.cuerpo, null)
                console.log(resultado)
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
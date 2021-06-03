import envioMailService from '../services/envioMail.service'
import models from '../models/index.js'
import fs from 'fs'
import textVersion from 'textversionjs'
import serviceTransaccion from '../services/transaccion.service'

class envioMailController{

    constructor(){        
    }

    async enviarMail(req, res, next){        
        try{            
            let politica = await models.politicas.findAll({where: {id_politica: req.body.id_politica}})
            let remitente = politica[0].correo            
            let password = politica[0].password                          
            let resultado = await envioMailService.enviarMail(remitente, password, req.body.destinatario, req.body.asunto, req.body.texto, req.files ? req.files: null)                                               
            if(resultado.codigo == 200){
                const textoStr = textVersion(req.body.texto)
                const detalle = `Se envía Mail: Para ${req.body.destinatario}\nAsunto: ${req.body.asunto}\nAdjunto: ${req.file ? req.file.originalname : null}\nTexo: ${textoStr}`                
                serviceTransaccion.generaTransaccion(req.headers.token, req.body.id_deudor, 40, detalle, null, null)
                if(req.files){
                    req.files.forEach(archivo => {
                        fs.unlinkSync(archivo.path)
                    });    
                }                
                res.status(200).json(resultado)        
            }else {
                console.log(resultado)
                res.status(500).json(resultado)        
            }            
        }catch(error){
            res.status(500).json({
                mensaje: 'Ocurrio un error'
            })
            next(error)
        }  
    }
}

export default envioMailController
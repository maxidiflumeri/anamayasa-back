import models from '../models/index'
import tokenService from './token.service'
import transaccionDto from '../dtos/transaccion.dto'

export default {
    generaTransaccion: async (token, id_deudor, id_tipo_transaccion, detalle, id_llamada, grabacion) => {
        try{                 
            const usuario = await tokenService.decodificar(token)                                             
            const transaccion = new transaccionDto(id_tipo_transaccion, usuario.id_usuario, id_deudor, detalle, id_llamada, grabacion)            
            await models.transacciones.create(transaccion)            
        }catch(error){
            console.log(error)
        }        
    }
}
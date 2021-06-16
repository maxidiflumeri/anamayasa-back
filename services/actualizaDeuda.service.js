import connection from '../config/db/connection'
import models from '../models/index.js'
import { QueryTypes } from 'sequelize'


// PARAMETROS
// param1: id_tipo_actualizacion
// param2: fecha_mora
// param3: deuda_historica
// param4: valor_tasa_interes
// param5: valor1_alic_iva
// param6: valor2_alic_iva_multa
// param7: valor3_tasa_honorarios
// param8: valor4_monto_fijo_recargo

export default {
    actualizaDeuda: async (deuda_historica, id_tipo_actualizacion, fecha_mora, id_iva, id_empresa) => {       
        
        return new Promise(async (resolve, reject) => {
            try{
                const iva = await models.p_tipos_iva.findAll({where: {id_tipo_iva: id_iva}})            
                const tasa_interes = await models.p_tasas_interes.findAll({where: {id_empresa: id_empresa}})                 
                
                const recargo = await connection.query('DECLARE @RES VARCHAR(MAX) EXEC sp_calcula_actualizado :param1, :param2, :param3, :param4, :param5, :param6, :param7, :param8, @RES output select @RES as interes',
                {
                    replacements: {
                        param1: id_tipo_actualizacion,                        
                        param2: fecha_mora || null,                        
                        param3: deuda_historica,                        
                        param4: tasa_interes[0]? tasa_interes[0].valor : 0,                        
                        param5: iva[0].valor2 || 0,                        
                        param6: iva[0].valor3 || 0,                        
                        param7: iva[0].valor4 || 0,                        
                        param8: iva[0].valor5 || 0                        
                    },
                    type: QueryTypes.SELECT
                })
                
                const deuda_actualizada = deuda_historica + parseFloat(recargo[0].interes)                
                resolve(deuda_actualizada)
            }catch(error){
                console.log(error)
            }
        })
    }    
}

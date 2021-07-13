import models from '../models/index'
import serviceTransaccion from '../services/transaccion.service'

class conveniosController {

    constructor(model) {
        this._model = model;
      }

      async obtenerTodos(req, res, next){
        try{
            const response = await this._model.findAll()
            res.status(200).json(response)
        }catch(error){
            res.status(500).json({
                mensaje: 'Ocurrio un error'
            })
            next(error)
        }  
      }

      async obtenerPorId(req, res, next){
        try{
            const response = await this._model.findAll({where: {id_convenio: req.query.id}})
            res.status(200).json(response)
        }catch(error){              
            res.status(500).json({
                mensaje: 'Ocurrio un error'
            })
            next(error)
        }          
      }

      async obtenerPorIdDeudor(req, res, next){
        try{            
            const response = await this._model.findAll({where: {id_deudor: req.query.id_deudor}})            
            res.status(200).json(response)
        }catch(error){              
            res.status(500).json({
                mensaje: 'Ocurrio un error'
            })
            next(error)
        }          
      }

      async agregar(req, res, next){          
          const convenioNuevo = req.body.convenioNuevo
          const facturas = req.body.facturas 
        try{                
            const response = await this._model.create(convenioNuevo)            
            await this.cargaIdConvenioEnFacturas(facturas, response.id_convenio)
            const detalle = `Se genera convenio por ${convenioNuevo.importe} en ${convenioNuevo.cuotas} cuotas.`
            serviceTransaccion.generaTransaccion(req.headers.token, convenioNuevo.id_deudor, 7, detalle, null, null)
            res.status(200).json(response)
        }catch(error){              
            res.status(500).json({
                mensaje: 'Ocurrio un error'
            })
            next(error)
        }       
      }

      async actualizar(req, res, next){
        try{
            const response = await this._model.update(req.body, {where: {id_convenio: req.params.id}})
            res.status(200).json(response)

        }catch(error){              
            res.status(500).json({
                mensaje: 'Ocurrio un error'
            })
            next(error)
        }       
      }

      async eliminar(req, res, next){
        try{
            const seBorro = await this._model.destroy({where: {id_convenio: req.params.id}})
            if(seBorro){
                res.send({Mensaje: "Se borro exitosamente"})
            }else{
                res.send({Mensaje: "Id no encontrado"})
            }    
        }catch(error){
            res.status(500).json({
                mensaje: 'Ocurrio un error'
            })
            next(error)
        }   
      }


      cargaIdConvenioEnFacturas(facturas, id_convenio){
        return new Promise(async (resolve, reject) => {
            facturas.forEach(async factura => {
                try{
                    await models.facturas.update({id_convenio: id_convenio}, {where: {id_factura: factura.id_factura}})
                }catch(error){
                    console.log(error)
                }
            })
            resolve(true)
        })
      }
}

export default conveniosController
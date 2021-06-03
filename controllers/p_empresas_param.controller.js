class p_empresas_paramController {

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

      async obtenerPorIdEmpresaIdTabla(req, res, next){
        try{
            const response = await this._model.findAll({where: {id_empresa: req.query.id_empresa, id_tabla: req.query.id_tabla}})
            res.status(200).json(response)
        }catch(error){              
            res.status(500).json({
                mensaje: 'Ocurrio un error'
            })
            next(error)
        }          
      }

      async agregar(req, res, next){          
        try{                
            const response = await this._model.create(req.body)
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
            const response = await this._model.update(req.body, {where: {id_empresa: req.params.id_empresa, id_tabla: req.params.id_tabla, id_opcion: req.params.id_opcion}})
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
            const seBorro = await this._model.destroy({where: {id_empresa: req.params.id_empresa, id_tabla: req.params.id_tabla, id_opcion: req.params.id_opcion}})
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
}

export default p_empresas_paramController
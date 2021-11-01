import models from '../models/index.js'
import redDto from '../dtos/red.dto'
import serviceTransaccion from '../services/transaccion.service'

class redes_socialesController {

    constructor(model) {
        this._model = model;
    }

    async obtenerTodos(req, res, next) {
        try {
            const response = await this._model.findAll()
            res.status(200).json(response)
        } catch (error) {
            res.status(500).json({
                mensaje: 'Ocurrio un error'
            })
            next(error)
        }
    }

    async obtenerPorId(req, res, next) {
        try {
            const response = await this._model.findAll({ where: { id_deudor: req.query.id, usuario: req.query.usuario, id_red_social: req.query.id_red_social } })
            res.status(200).json(response)
        } catch (error) {
            res.status(500).json({
                mensaje: 'Ocurrio un error'
            })
            next(error)
        }
    }

    async obtenerPorIdDeudor(req, res, next) {
        try {
            let redesRet = []            
            const redes = await this._model.findAll({ where: { id_deudor: req.query.id_deudor } })
            const tiposRedes = await models.p_redes_sociales.findAll()
            redes.map(red => {
                tiposRedes.map(tipo => {                    
                    if (red.id_red_social == tipo.id_red_social) {                           
                        let redAux = new redDto(red.id_deudor, red.usuario, tipo)
                        redesRet.push(redAux)
                    }
                })
            })
            res.status(200).json(redesRet)            
        } catch (error) {
            res.status(500).json({
                mensaje: 'Ocurrio un error'
            })
            next(error)
        }
    }

    async obtenerPorUsuarioRed(req, res, next){
        try{
            const response = await this._model.findAll({where: {usuario: req.query.usuario}})
            res.status(200).json(response)
        }catch(error){              
            res.status(500).json({
                mensaje: 'Ocurrio un error'
            })
            next(error)
        }          
    }

    async agregar(req, res, next) {
        try {
            const response = await this._model.create(req.body)
            serviceTransaccion.generaTransaccion(req.headers.token, req.body.id_deudor, 31, `Se agrega usuario ${req.body.usuario}`, req.body.id_llamada, req.body.grabacion)
            res.status(200).json(response)
        } catch (error) {
            res.status(500).json({
                mensaje: 'Ocurrio un error'
            })
            next(error)
        }
    }

    async actualizar(req, res, next) {
        try {
            const usuarioRed = await this._model.findAll({ where: { id_deudor: req.params.id, usuario: req.params.usuario, id_red_social: req.params.id_red_social } })  
            const response = await this._model.update(req.body, { where: { id_deudor: req.params.id, usuario: req.params.usuario, id_red_social: req.params.id_red_social } })
            if(usuarioRed[0].usuario != req.body.usuario){
                serviceTransaccion.generaTransaccion(req.headers.token, req.params.id, 33, `Se modifica usuario ${req.params.usuario} por el usuario ${req.body.usuario}`, req.body.id_llamada, req.body.grabacion)
            }
            if(usuarioRed[0].id_red_social != req.body.id_red_social){
                serviceTransaccion.generaTransaccion(req.headers.token, req.params.id, 33, `Se modifica tipo red ${usuarioRed[0].id_red_social} por el tipo red ${req.body.id_red_social}`, req.body.id_llamada, req.body.grabacion)
            }
            res.status(200).json(response)

        } catch (error) {
            res.status(500).json({
                mensaje: 'Ocurrio un error'
            })
            next(error)
        }
    }

    async eliminar(req, res, next) {
        try {
            const seBorro = await this._model.destroy({ where: { id_deudor: req.params.id, usuario: req.params.usuario, id_red_social: req.params.id_red_social } })
            if (seBorro) {
                res.send({ Mensaje: "Se borro exitosamente" })
                serviceTransaccion.generaTransaccion(req.headers.token, req.params.id, 32, `Se elimina usuario ${req.params.usuario}`, req.body.id_llamada, req.body.grabacion)
            } else {
                res.send({ Mensaje: "Id no encontrado" })
            }
        } catch (error) {
            res.status(500).json({
                mensaje: 'Ocurrio un error'
            })
            next(error)
        }
    }
}

export default redes_socialesController
const { Op } = require("sequelize");
import models from '../models/index.js'
import correoDto from '../dtos/correo.dto'
import serviceTransaccion from '../services/transaccion.service'

class correosController {

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
            const response = await this._model.findAll({ where: { id_deudor: req.query.id, correo: req.query.correo } })
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
            let correosRet = []
            const correos = await this._model.findAll({ where: { id_deudor: req.query.id_deudor }, order: [['efectivo', 'DESC']], })
            const tiposCorreo = await models.p_tipos_correo.findAll()
            correos.map(correo => {
                tiposCorreo.map(tipo => {
                    if (correo.id_tipo_correo == tipo.id_tipo_correo) {
                        let correoAux = new correoDto(correo.id_deudor, correo.correo, correo.efectivo, tipo)
                        correosRet.push(correoAux)
                    }
                })
            })
            res.status(200).json(correosRet)
        } catch (error) {
            res.status(500).json({
                mensaje: 'Ocurrio un error'
            })
            next(error)
        }
    }

    async obtenerPorCorreo(req, res, next) {
        try {
            const response = await this._model.findAll({ where: { correo: req.query.correo } })
            res.status(200).json(response)
        } catch (error) {
            res.status(500).json({
                mensaje: 'Ocurrio un error'
            })
            next(error)
        }
    }

    async agregar(req, res, next) {
        try {
            if (req.body.efectivo == 1) {
                await this._model.update({ efectivo: 0 }, { where: { id_deudor: req.body.id_deudor, efectivo: 1 } })
            }
            const response = await this._model.create(req.body)
            serviceTransaccion.generaTransaccion(req.headers.token, req.body.id_deudor, 23, `Se agrega correo ${req.body.correo}`, req.body.id_llamada, req.body.grabacion)
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
            if (req.body.efectivo == 1) {
                await this._model.update({ efectivo: 0 }, { where: { id_deudor: req.params.id, efectivo: 1 } })
            }
            const correo = await this._model.findAll({ where: { id_deudor: req.params.id, correo: req.params.correo } })
            const response = await this._model.update(req.body, { where: { id_deudor: req.params.id, correo: req.params.correo } })
            if (correo[0].correo != req.body.correo) {
                serviceTransaccion.generaTransaccion(req.headers.token, req.params.id, 28, `Se modifica correo ${req.params.correo} por el correo ${req.body.correo}`, req.body.id_llamada, req.body.grabacion)
            }
            if (correo[0].efectivo != req.body.efectivo) {
                if (req.body.efectivo == 1) {
                    serviceTransaccion.generaTransaccion(req.headers.token, req.params.id, 28, `Se marca como principal el correo ${req.body.correo}`, req.body.id_llamada, req.body.grabacion)
                } else {
                    serviceTransaccion.generaTransaccion(req.headers.token, req.params.id, 28, `Se desmarca como principal el correo ${req.body.correo}`, req.body.id_llamada, req.body.grabacion)
                }
            }
            if (correo[0].id_tipo_correo != req.body.id_tipo_correo) {
                serviceTransaccion.generaTransaccion(req.headers.token, req.params.id, 28, `Se modifica tipo correo ${correo[0].id_tipo_correo} por tipo correo ${req.body.id_tipo_correo}`, req.body.idllamada, req.body.grabacion)
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
            const seBorro = await this._model.destroy({ where: { id_deudor: req.params.id, correo: req.params.correo } })
            if (seBorro) {
                res.send({ Mensaje: "Se borro exitosamente" })
                serviceTransaccion.generaTransaccion(req.headers.token, req.params.id, 26, `Se elimina correo ${req.params.correo}`, req.body.id_llamada, req.body.grabacion)
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

export default correosController
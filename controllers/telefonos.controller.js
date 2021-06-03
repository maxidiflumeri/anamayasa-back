const { Op } = require("sequelize");
import models from '../models/index.js'
import telefonoDto from '../dtos/telefono.dto'
import serviceTransaccion from '../services/transaccion.service'
import connection from '../config/db/connection'
import { QueryTypes } from 'sequelize'

class telefonosController {

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
            const response = await this._model.findAll({ where: { id_deudor: req.query.id, telefono: req.query.telefono } })
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
            let telefonosRet = []
            const telefonos = await this._model.findAll({ where: { id_deudor: req.query.id_deudor }, order: [['efectivo', 'DESC']] })
            const tiposTelefonos = await models.p_tipos_telefono.findAll()
            telefonos.map(telefono => {
                tiposTelefonos.map(tipo => {
                    if (telefono.id_tipo_telefono == tipo.id_tipo_telefono) {
                        let tel = new telefonoDto(telefono.id_deudor, telefono.telefono, telefono.efectivo, tipo)
                        telefonosRet.push(tel)
                    }
                })
            })
            res.status(200).json(telefonosRet)
        } catch (error) {
            res.status(500).json({
                mensaje: 'Ocurrio un error'
            })
            next(error)
        }
    }

    async obtenerPorNro(req, res, next) {
        try {
            const response = await this._model.findAll({ where: { telefono: req.query.telefono } })
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
            const telefonoOk = await connection.query('DECLARE @RES VARCHAR(MAX) EXEC sp_arregla_telefono :param, @RES output select @RES as telefono',
                {
                    replacements: {
                        param: req.body.telefono
                    },
                    type: QueryTypes.SELECT
                })
            if (telefonoOk[0].telefono == "") {
                res.status(400).json({mensaje: 'El teléfono ingresado es inválido.'})
            } else {
                req.body.telefono = telefonoOk[0].telefono
                const response = await this._model.create(req.body)
                serviceTransaccion.generaTransaccion(req.headers.token, req.body.id_deudor, 15, `Se agrega telefono ${req.body.telefono}`, null, null)
                res.status(200).json(response)
            }
        } catch (error) {
            res.status(500).json({
                mensaje: 'Error al agregar el teléfono. Vuelva a intentarlo.'
            })
            next(error)
        }
    }

    async actualizar(req, res, next) {
        try {
            if (req.body.efectivo == 1) {
                await this._model.update({ efectivo: 0 }, { where: { id_deudor: req.params.id, efectivo: 1 } })
            }
            const telefonoOk = await connection.query('DECLARE @RES VARCHAR(MAX) EXEC sp_arregla_telefono :param, @RES output select @RES as telefono',
                {
                    replacements: {
                        param: req.body.telefono
                    },
                    type: QueryTypes.SELECT
                })
            if (telefonoOk[0].telefono == "") {
                res.status(400).json({ mensaje: 'El teléfono ingresado es inválido.' })
            } else {
                req.body.telefono = telefonoOk[0].telefono
                const telefono = await this._model.findAll({ where: { id_deudor: req.params.id, telefono: req.params.telefono } })
                const response = await this._model.update(req.body, { where: { id_deudor: req.params.id, telefono: req.params.telefono } })
                //Inicia carga de transaccion
                if (telefono[0].telefono != req.body.telefono) {
                    serviceTransaccion.generaTransaccion(req.headers.token, req.params.id, 4, `Se modifica telefono ${req.params.telefono} por el telefono ${req.body.telefono}`, null, null)
                }
                if (telefono[0].efectivo != req.body.efectivo) {
                    if (req.body.efectivo == 1) {
                        serviceTransaccion.generaTransaccion(req.headers.token, req.params.id, 4, `Se marca como principal el telefono ${req.body.telefono}`, null, null)
                    } else {
                        serviceTransaccion.generaTransaccion(req.headers.token, req.params.id, 4, `Se desmarca como principal el telefono ${req.body.telefono}`, null, null)
                    }
                }
                if (telefono[0].id_tipo_telefono != req.body.id_tipo_telefono) {
                    const detalle = `Se modifica el tipo telefono ${telefono[0].id_tipo_telefono} por el tipo telefono ${req.body.id_tipo_telefono} del telefono ${req.body.telefono}`
                    serviceTransaccion.generaTransaccion(req.headers.token, req.params.id, 4, detalle, null, null)
                }
                res.status(200).json(response)
            }

        } catch (error) {
            res.status(500).json({
                mensaje: 'Error al editar el teléfono. Vuelva a intentarlo.'
            })
            next(error)
        }
    }

    async eliminar(req, res, next) {
        try {
            const seBorro = await this._model.destroy({ where: { id_deudor: req.params.id, telefono: req.params.telefono } })
            if (seBorro) {
                res.send({ Mensaje: "Se borro exitosamente" })
                serviceTransaccion.generaTransaccion(req.headers.token, req.params.id, 17, `Se elimina telefono ${req.params.telefono}`, null, null)
            } else {
                res.send({ Mensaje: "Id no encontrado" })
            }
        } catch (error) {
            res.status(500).json({
                mensaje: 'Error al eliminar el teléfono. Vuelva a intentarlo.'
            })
            next(error)
        }
    }
}

export default telefonosController
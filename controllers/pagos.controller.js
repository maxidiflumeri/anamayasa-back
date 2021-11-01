import serviceTransaccion from '../services/transaccion.service'
import models from '../models/index'
import connection from '../config/db/connection'
import { Op } from 'sequelize'

class pagosController {

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
            const response = await this._model.findAll({ where: { id_deudor: req.query.id, nro_comprobante: req.query.nro_comprobante } })
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
            const response = await this._model.findAll({ where: { id_deudor: req.query.id_deudor, anulado: 0 } })
            res.status(200).json(response)
        } catch (error) {
            res.status(500).json({
                mensaje: 'Ocurrio un error'
            })
            next(error)
        }
    }

    async agregar(req, res, next) {
        const t = await connection.transaction()
        try {
            const promesas = await this._model.findAll({ where: { id_deudor: req.body.id_deudor, id_tipo_pago: 8, anulado: 0, fecha_pago: { [Op.gt]: new Date() } } })
            if (promesas.length > 0) {
                res.status(500).json({
                    mensaje: 'Ya existe promesa de pago'
                })
            } else {
                const response = await this._model.create(req.body, { transaction: t })
                const detalle = `Se carga nuevo pago, tipo pago ${req.body.id_tipo_pago}, fecha de pago ${req.body.fecha_pago}, importe ${req.body.importe_total}`
                serviceTransaccion.generaTransaccion(req.headers.token, req.body.id_deudor, 5, detalle, req.body.id_llamada, req.body.grabacion)
                if (req.body.id_tipo_pago == 8) {
                    await models.deudores.update({ id_situacion: 8 }, { where: { id_deudor: req.body.id_deudor }, transaction: t })
                }
                await t.commit()
                res.status(200).json(response)
            }
        } catch (error) {
            await t.rollback()
            res.status(500).json({
                mensaje: 'Ocurrio un error'
            })
            next(error)
        }
    }

    async actualizar(req, res, next) {
        try {
            const response = await this._model.update(req.body, { where: { id_deudor: req.params.id, nro_comprobante: req.params.nro_comprobante } })
            res.status(200).json(response)

        } catch (error) {
            res.status(500).json({
                mensaje: 'Ocurrio un error'
            })
            next(error)
        }
    }

    async anularPago(req, res, next) {        
        const t = await connection.transaction()
        try {
            const response = await this._model.update({ anulado: 1 }, { where: { id_pago: req.params.id_pago }, transaction: t })
            if (req.params.codigo == 8) {
                await models.deudores.update({ id_situacion: 2 }, { where: { id_deudor: req.params.id_deudor }, transaction: t })
            }
            const detalle = `Se anula pago id ${req.params.id_pago}`
            serviceTransaccion.generaTransaccion(req.headers.token, req.params.id_deudor, 18, detalle, req.body.id_llamada, req.body.grabacion)
            await t.commit()
            res.status(200).json(response)

        } catch (error) {
            await t.rollback()
            res.status(500).json({
                mensaje: 'Ocurrio un error'
            })
            next(error)
        }
    }

    async eliminar(req, res, next) {
        try {
            const seBorro = await this._model.destroy({ where: { id_deudor: req.params.id, nro_comprobante: req.params.nro_comprobante } })
            if (seBorro) {
                res.send({ Mensaje: "Se borro exitosamente" })
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

export default pagosController
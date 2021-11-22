const { Op } = require("sequelize");
import serviceTransaccion from '../services/transaccion.service'
import actualiza from '../services/actualizaDeuda.service'
import deudorDto from '../dtos/deudor.dto'

class deudorController {

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
            const response = await this._model.findAll({ where: { id_deudor: req.query.id } })
            if (response.length > 0) {
                const deuda_actualizada = await actualiza.actualizaDeuda(response[0].deuda_historica, response[0].id_tipo_actualizacion, response[0].fecha_mora, response[0].id_iva, response[0].id_empresa, response[0].id_deudor)
                const deudor = new deudorDto(response[0], deuda_actualizada)
                res.status(200).json(deudor)
            } else {
                res.status(200).json({ mensaje: 'no se encuentra' })
            }
        } catch (error) {
            res.status(500).json({
                mensaje: 'Ocurrio un error'
            })
            next(error)
        }
    }

    async obtenerPorIdyEmpresa(req, res, next) {
        try {
            const response = await this._model.findAll({ where: { id_deudor: req.query.id_deudor, id_empresa: req.query.id_empresa } })
            res.status(200).json(response)
        } catch (error) {
            res.status(500).json({
                mensaje: 'Ocurrio un error'
            })
            next(error)
        }
    }

    async obtenerPorEmpresayDocumento(req, res, next) {
        try {
            const response = await this._model.findAll({ where: { id_empresa: req.query.id_empresa, nro_doc: req.query.nro_documento } })
            res.status(200).json(response)
        } catch (error) {
            res.status(500).json({
                mensaje: 'Ocurrio un error'
            })
            next(error)
        }
    }

    async obtenerPorEmpresayNombre(req, res, next) {
        try {
            const response = await this._model.findAll({ where: { id_empresa: req.query.id_empresa, nombre_apellido: { [Op.like]: `%${req.query.nombre}%` } } })
            res.status(200).json(response)
        } catch (error) {
            res.status(500).json({
                mensaje: 'Ocurrio un error'
            })
            next(error)
        }
    }

    async obtenerPorEmpresayCliente(req, res, next) {
        try {
            const response = await this._model.findAll({ where: { id_empresa: req.query.id_empresa, nro_cliente1: req.query.nro_cliente } })
            res.status(200).json(response)
        } catch (error) {
            res.status(500).json({
                mensaje: 'Ocurrio un error'
            })
            next(error)
        }
    }

    async obtenerPorDocumento(req, res, next) {
        try {
            const response = await this._model.findAll({ where: { nro_doc: req.query.nro_documento } })
            res.status(200).json(response)
        } catch (error) {
            res.status(500).json({
                mensaje: 'Ocurrio un error'
            })
            next(error)
        }
    }

    async obtenerPorNombre(req, res, next) {
        try {
            const response = await this._model.findAll({ where: { nombre_apellido: { [Op.like]: `%${req.query.nombre}%` } } })
            res.status(200).json(response)
        } catch (error) {
            res.status(500).json({
                mensaje: 'Ocurrio un error'
            })
            next(error)
        }
    }

    async obtenerPorCliente(req, res, next) {
        try {
            const response = await this._model.findAll({ where: { nro_cliente1: req.query.nro_cliente } })
            res.status(200).json(response)
        } catch (error) {
            res.status(500).json({
                mensaje: 'Ocurrio un error'
            })
            next(error)
        }
    }

    async obtenerPrimerDeudor(req, res, next) {
        try {
            const response = await this._model.findAll({ where: { id_deudor: { [Op.not]: 1000 } }, limit: 1, order: [['id_deudor', 'ASC']] })
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
            const response = await this._model.create(req.body)
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
            const deudor = await this._model.findAll({ where: { id_deudor: req.params.id } })
            const response = await this._model.update(req.body, { where: { id_deudor: req.params.id } })
            if (deudor[0].id_situacion != req.body.id_situacion) {
                serviceTransaccion.generaTransaccion(req.headers.token, req.params.id, 3, `Se modifica codigo ${deudor[0].id_situacion} por el codigo ${req.body.id_situacion}`, req.body.id_llamada, req.body.grabacion)
            }
            if (deudor[0].id_gestion != req.body.id_gestion) {
                serviceTransaccion.generaTransaccion(req.headers.token, req.params.id, 13, `Se modifica codigo ${deudor[0].id_gestion} por el codigo ${req.body.id_gestion}`, req.body.id_llamada, req.body.grabacion)
            }
            if (deudor[0].id_motivo_no_pago != req.body.id_motivo_no_pago) {
                serviceTransaccion.generaTransaccion(req.headers.token, req.params.id, 21, `Se modifica codigo ${deudor[0].id_motivo_no_pago} por el codigo ${req.body.id_motivo_no_pago}`, req.body.id_llamada, req.body.grabacion)
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
            const seBorro = await this._model.destroy({ where: { id_deudor: req.params.id } })
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

    async actualizaDeuda(req, res, next) {
        try {
            const deuda_actualizada = await actualiza.actualizaDeuda(parseFloat(req.query.monto), parseInt(req.query.id_tipo_actualizacion), req.query.fecha, parseInt(req.query.id_iva), parseInt(req.query.id_empresa), parseInt(req.query.id_deudor))
            const response = {
                monto: deuda_actualizada < parseFloat(req.query.monto) ? deuda_actualizada : parseFloat(req.query.monto),
                interes: deuda_actualizada < parseFloat(req.query.monto) ? 0 : deuda_actualizada - parseFloat(req.query.monto)
            }
            res.status(200).json(response)
        } catch (error) {
            res.status(500).json({
                mensaje: 'Ocurrio un error'
            })
            next(error)
        }
    }
}

export default deudorController
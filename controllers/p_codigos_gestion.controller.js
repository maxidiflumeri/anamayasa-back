import connection from '../config/db/connection'
import { QueryTypes } from 'sequelize'

class p_codigos_gestionController {

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
            const response = await this._model.findAll({ where: { id_gestion: req.query.id } })
            res.status(200).json(response)
        } catch (error) {
            res.status(500).json({
                mensaje: 'Ocurrio un error'
            })
            next(error)
        }
    }

    async obtenerPorIdEmpresa(req, res, next) {
        try {
            const response = await connection.query(
                `select * from v_codigos_gestion where id_empresa =${req.query.id_empresa} order by descripcion ASC`, {type: QueryTypes.SELECT}
            )            
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
            const response = await this._model.update(req.body, { where: { id_gestion: req.params.id } })
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
            const seBorro = await this._model.destroy({ where: { id_gestion: req.params.id } })
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

export default p_codigos_gestionController
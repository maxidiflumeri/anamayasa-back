import bcrypt from 'bcryptjs'
import token from '../services/token.service.js'
import usuarioDto from '../dtos/usuario.dto'

class usuariosController {

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
            const user = await this._model.findAll({ where: { id_usuario: req.query.id } })
            let usuario = new usuarioDto(user[0].id_usuario,  user[0].nombre_completo, user[0].correo, user[0].dni, user[0].cuil, user[0].id_rol, user[0].legajo_neotel)
            res.status(200).json(usuario)
        } catch (error) {
            res.status(500).json({
                mensaje: 'Ocurrio un error'
            })
            next(error)
        }
    }

    async agregar(req, res, next) {
        try {
            req.body.password = await bcrypt.hash(req.body.password, 10)
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
            const response = await this._model.update(req.body, { where: { id_usuario: req.params.id } })
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
            const seBorro = await this._model.destroy({ where: { id_usuario: req.params.id } })
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

    async Login(req, res, next) {
        try {
            let user = await this._model.findAll({ where: { correo: req.body.correo } })
            if (user.length > 0) {
                let match = await bcrypt.compare(req.body.password, user[0].password)
                if (match) {
                    let usuario = new usuarioDto(user[0].id_usuario, user[0].nombre_completo, user[0].correo, user[0].dni, user[0].cuil, user[0].id_rol, user[0].legajo_neotel)
                    let tokenReturn = await token.codificar(usuario.id_usuario, usuario.id_rol, usuario.correo, usuario.legajo_neotel, usuario.nombre)
                    res.status(200).json({ usuario, tokenReturn })
                } else {
                    res.status(404).json({
                        mensaje: 'Password incorrecto.'
                    })
                }
            } else {
                res.status(404).send({
                    mensaje: 'No existe el usuario.'
                })
            }

        } catch (error) {
            res.status(500).json({
                mensaje: 'Ocurrio un error.'
            })
            next(error)
        }
    }

    async cambiarContraseña(req, res, next) {
        try {
            const usuario = await this._model.findAll({ where: { id_usuario: req.params.id_usuario } })
            let match = await bcrypt.compare(req.body.passwordActual, usuario[0].password)
            if (match) {                
                req.body.passwordNueva = await bcrypt.hash(req.body.passwordNueva, 10)
                const response = await this._model.update({ password: req.body.passwordNueva }, { where: { id_usuario: req.params.id_usuario } })
                res.status(200).json(response)
            } else {
                res.status(200).send({
                    error: 100,
                    mensaje: 'clave actual incorrecta.'
                })
            }
        } catch (error) {
            res.status(500).json({
                mensaje: 'Ocurrio un error.'
            })
            next(error)
        }
    }
}

export default usuariosController
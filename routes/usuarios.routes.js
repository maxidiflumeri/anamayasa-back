import routerx from 'express-promise-router'
import models from '../models/index.js'
import usuariosController from '../controllers/usuarios.controller'
import auth from '../middlewares/auth.js'
import underscore from 'underscore'

const _usuariosController = new usuariosController(models.usuarios)
const router = routerx()

router.get('/consultar', auth.verificarGestor, async (req, res, next) => {
    if (underscore.isEmpty(req.query)) {
        _usuariosController.obtenerTodos(req, res, next)
    }
    else if (req.query.id) {
        _usuariosController.obtenerPorId(req, res, next)
    } else {
        res.status(404).json({
            mensaje: 'Parametros incorrectos.'
        })
    }
})

router.post('/agregar', async (req, res, next) => {    
    _usuariosController.agregar(req, res, next)
})

router.post('/login', async (req, res, next) => {
    _usuariosController.Login(req, res, next)
})

router.put('/modificarPassword/:id_usuario', auth.verificarGestor, async (req, res, next) => {
    _usuariosController.cambiarContraseña(req, res, next)
})

router.put('/modificar/:id', auth.verificarAdministrador, async (req, res, next) => {
    _usuariosController.actualizar(req, res, next)
})

router.delete('/eliminar/:id', async (req, res, next) => {
    _usuariosController.eliminar(req, res, next)
})

export default router
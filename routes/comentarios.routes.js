import routerx from 'express-promise-router'
import comentariosController from '../controllers/comentarios.controller'
import models from '../models/index.js'
import auth from '../middlewares/auth.js'
import underscore from 'underscore'

const _comentariosController = new comentariosController(models.comentarios)
const router = routerx()

router.get('/consultar', auth.verificarGestor, async (req, res, next) => {
    if (underscore.isEmpty(req.query)) {
        _comentariosController.obtenerTodos(req, res, next)
    } else if (req.query.id) {
        _comentariosController.obtenerPorId(req, res, next)
    } else if (req.query.id_deudor) {
        _comentariosController.obtenerPorIdDeudor(req, res, next)
    } else {
        res.status(404).json({
            mensaje: 'Parametros incorrectos.'
        })
    }
})

router.post('/agregar', auth.verificarGestor, async (req, res, next) => {
    _comentariosController.agregar(req, res, next)
})

router.put('/modificar/:id', auth.verificarAdministrador, async (req, res, next) => {
    _comentariosController.actualizar(req, res, next)
})

router.delete('/eliminar/:id', auth.verificarAdministrador, async (req, res, next) => {
    _comentariosController.eliminar(req, res, next)
})

export default router
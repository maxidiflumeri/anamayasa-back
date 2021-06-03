import routerx from 'express-promise-router'
import models from '../models/index.js'
import redes_socialesController from '../controllers/redes_sociales.controller'
import auth from '../middlewares/auth.js'
import underscore from 'underscore'

const _redes_socialesController = new redes_socialesController(models.redes_sociales)
const router = routerx()

router.get('/consultar', auth.verificarGestor, async (req, res, next) => {
    if (underscore.isEmpty(req.query)) {
        _redes_socialesController.obtenerTodos(req, res, next)
    } else if (req.query.id && req.query.usuario && req.query.id_red_social) {
        _redes_socialesController.obtenerPorId(req, res, next)
    } else if (req.query.id_deudor) {
        _redes_socialesController.obtenerPorIdDeudor(req, res, next)
    } else if (req.query.usuario) {
        _redes_socialesController.obtenerPorUsuarioRed(req, res, next)
    } else {
        res.status(404).json({
            mensaje: 'Parametros incorrectos.'
        })
    }
})

router.post('/agregar', auth.verificarGestor, async (req, res, next) => {
    _redes_socialesController.agregar(req, res, next)
})

router.put('/modificar/:id/:usuario/:id_red_social', auth.verificarGestor, async (req, res, next) => {
    _redes_socialesController.actualizar(req, res, next)
})

router.delete('/eliminar/:id/:usuario/:id_red_social', auth.verificarGestor, async (req, res, next) => {
    _redes_socialesController.eliminar(req, res, next)
})

export default router
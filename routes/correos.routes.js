import routerx from 'express-promise-router'
import correosController from '../controllers/correos.controller'
import models from '../models/index.js'
import auth from '../middlewares/auth.js'
import underscore from 'underscore'

const _correosController = new correosController(models.correos)
const router = routerx()

router.get('/consultar', auth.verificarGestor, async (req, res, next) => {
    if (underscore.isEmpty(req.query)) {
        _correosController.obtenerTodos(req, res, next)
    } else if (req.query.id && req.query.correo) {
        _correosController.obtenerPorId(req, res, next)
    } else if (req.query.id_deudor) {
        _correosController.obtenerPorIdDeudor(req, res, next)
    } else if (req.query.correo) {
        _correosController.obtenerPorCorreo(req, res, next)
    } else {
        res.status(404).json({
            mensaje: 'Parametros incorrectos.'
        })
    }
})

router.post('/agregar', auth.verificarGestor, async (req, res, next) => {
    _correosController.agregar(req, res, next)
})

router.put('/modificar/:id/:correo', auth.verificarGestor, async (req, res, next) => {
    _correosController.actualizar(req, res, next)
})

router.delete('/eliminar/:id/:correo', auth.verificarGestor, async (req, res, next) => {
    _correosController.eliminar(req, res, next)
})

export default router
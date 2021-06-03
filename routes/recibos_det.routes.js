import routerx from 'express-promise-router'
import models from '../models/index'
import recibos_detController from '../controllers/recibos_det.controller'
import auth from '../middlewares/auth.js'
import underscore from 'underscore'

const _recibos_detController = new recibos_detController(models.recibos_det)
const router = routerx()

router.get('/consultar', auth.verificarGestor, async (req, res, next) => {
    if (underscore.isEmpty(req.query)) {
        _recibos_detController.obtenerTodos(req, res, next)
    } else if (req.query.id) {
        _recibos_detController.obtenerPorId(req, res, next)
    } else if (req.query.id_recibo_cab) {
        _recibos_detController.obtenerPorIdReciboCab(req, res, next)
    }else {
        res.status(404).json({
            mensaje: 'Parametros incorrectos.'
        })
    }
})

router.post('/agregar', auth.verificarReferente, async (req, res, next) => {
    _recibos_detController.agregar(req, res, next)
})

router.put('/modificar/:id', auth.verificarAdministrador, async (req, res, next) => {
    _recibos_detController.actualizar(req, res, next)
})

router.delete('/eliminar/:id', auth.verificarReferente, async (req, res, next) => {
    _recibos_detController.eliminar(req, res, next)
})

export default router
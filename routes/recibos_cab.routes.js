import routerx from 'express-promise-router'
import models from '../models/index.js'
import recibos_cabController from '../controllers/recibos_cab.controller'
import auth from '../middlewares/auth.js'
import underscore from 'underscore'

const _recibos_cabController = new recibos_cabController(models.recibos_cab)
const router = routerx()

router.get('/consultar', auth.verificarGestor, async (req, res, next) => {
    if (underscore.isEmpty(req.query)) {
        _recibos_cabController.obtenerTodos(req, res, next)
    } else if (req.query.id) {
        _recibos_cabController.obtenerPorId(req, res, next)
    } else if (req.query.id_deudor) {
        _recibos_cabController.obtenerPorIdDeudor(req, res, next)
    } else {
        res.status(404).json({
            mensaje: 'Parametros incorrectos.'
        })
    }
})

router.post('/agregar', auth.verificarReferente, async (req, res, next) => {    
    _recibos_cabController.agregar(req, res, next)
})

router.put('/modificar/:id', auth.verificarAdministrador, async (req, res, next) => {
    _recibos_cabController.actualizar(req, res, next)
})

router.delete('/eliminar/:id', auth.verificarLider, async (req, res, next) => {
    _recibos_cabController.eliminar(req, res, next)
})

export default router
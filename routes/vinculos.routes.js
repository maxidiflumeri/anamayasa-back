import routerx from 'express-promise-router'
import models from '../models/index.js'
import vinculosController from '../controllers/vinculos.controller'
import auth from '../middlewares/auth.js'
import underscore from 'underscore'

const _vinculosController = new vinculosController(models.vinculos)
const router = routerx()

router.get('/consultar', auth.verificarGestor, async (req, res, next) => {
    if (underscore.isEmpty(req.query)) {
        _vinculosController.obtenerTodos(req, res, next)
    } else if (req.query.id) {
        _vinculosController.obtenerPorId(req, res, next)
    } else if (req.query.id_deudor) {
        _vinculosController.obtenerPorIdDeudor(req, res, next)
    } else {
        res.status(404).json({
            mensaje: 'Parametros incorrectos.'
        })
    }
})

router.post('/agregar', auth.verificarGestor, async (req, res, next) => {    
    _vinculosController.agregar(req, res, next)
})

router.put('/modificar/:id', auth.verificarGestor, async (req, res, next) => {
    _vinculosController.actualizar(req, res, next)
})

router.delete('/eliminar/:id', auth.verificarGestor, async (req, res, next) => {
    _vinculosController.eliminar(req, res, next)
})

export default router
import routerx from 'express-promise-router'
import models from '../models/index.js'
import politicasController from '../controllers/politicas.controller'
import auth from '../middlewares/auth.js'
import underscore from 'underscore'

const _politicasController = new politicasController(models.politicas)
const router = routerx()

router.get('/consultar', auth.verificarGestor, async (req, res, next) => {
    if (underscore.isEmpty(req.query)) {
        _politicasController.obtenerTodos(req, res, next)
    } else if (req.query.id) {
        _politicasController.obtenerPorId(req, res, next)
    } else if (req.query.id_empresa) {
        _politicasController.obtenerPorIdEmpresa(req, res, next)
    } else {
        res.status(404).json({
            mensaje: 'Parametros incorrectos.'
        })
    }
})

router.post('/agregar', auth.verificarReferente, async (req, res, next) => {
    _politicasController.agregar(req, res, next)
})

router.put('/modificar/:id', auth.verificarReferente, async (req, res, next) => {
    _politicasController.actualizar(req, res, next)
})

router.delete('/eliminar/:id', auth.verificarAdministrador, async (req, res, next) => {
    _politicasController.eliminar(req, res, next)
})

export default router
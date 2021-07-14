import routerx from 'express-promise-router'
import conveniosController from '../controllers/convenios.controller'
import models from '../models/index.js'
import auth from '../middlewares/auth.js'
import underscore from 'underscore'

const _conveniosController = new conveniosController(models.convenios)
const router = routerx()

router.get('/consultar', auth.verificarGestor, async (req, res, next) => {
    if (underscore.isEmpty(req.query)) {
        _conveniosController.obtenerTodos(req, res, next)
    } else if (req.query.id) {
        _conveniosController.obtenerPorId(req, res, next)
    } else if (req.query.id_deudor) {
        _conveniosController.obtenerPorIdDeudor(req, res, next)
    } else {
        res.status(404).json({
            mensaje: 'Parametros incorrectos.'
        })
    }
})

router.post('/agregar', auth.verificarGestor, async (req, res, next) => {
    _conveniosController.agregar(req, res, next)
})

router.put('/modificar/:id', auth.verificarAdministrador, async (req, res, next) => {
    _conveniosController.actualizar(req, res, next)
})

router.put('/anular/:id', auth.verificarGestor, async (req, res, next) => {    
    _conveniosController.anularConvenio(req, res, next)
})

router.delete('/eliminar/:id', auth.verificarLider, async (req, res, next) => {
    _conveniosController.eliminar(req, res, next)
})

export default router
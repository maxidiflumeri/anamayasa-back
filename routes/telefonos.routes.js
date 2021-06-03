import routerx from 'express-promise-router'
import models from '../models/index.js'
import telefonosController from '../controllers/telefonos.controller'
import auth from '../middlewares/auth.js'
import underscore from 'underscore'

const _telefonosController = new telefonosController(models.telefonos)
const router = routerx()

router.get('/consultar', auth.verificarGestor, async (req, res, next) => {
    if (underscore.isEmpty(req.query)) {
        _telefonosController.obtenerTodos(req, res, next)
    } else if (req.query.id) {
        _telefonosController.obtenerPorId(req, res, next)
    } else if (req.query.id_deudor) {
        _telefonosController.obtenerPorIdDeudor(req, res, next)
    } else if (req.query.telefono) {
        _telefonosController.obtenerPorNro(req, res, next)
    } else {
        res.status(404).json({
            mensaje: 'Parametros incorrectos.'
        })
    }
})

router.post('/agregar', auth.verificarGestor, async (req, res, next) => {
    _telefonosController.agregar(req, res, next)
})

router.put('/modificar/:id/:telefono', auth.verificarGestor, async (req, res, next) => {
    _telefonosController.actualizar(req, res, next)
})

router.delete('/eliminar/:id/:telefono', auth.verificarGestor, async (req, res, next) => {
    _telefonosController.eliminar(req, res, next)
})

export default router
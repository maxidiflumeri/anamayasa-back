import routerx from 'express-promise-router'
import toyota_atClientesController from '../controllers/toyota_atClientes.controller'
import models from '../models/index.js'
import auth from '../middlewares/auth.js'
import underscore from 'underscore'

const _toyota_atClientesController = new toyota_atClientesController(models.toyota_atclientes)
const router = routerx()

router.get('/consultar', auth.verificarGestor, async (req, res, next) => {
    if (underscore.isEmpty(req.query)) {
        _toyota_atClientesController.obtenerTodos(req, res, next)
    }
    else if (req.query.id) {
        _toyota_atClientesController.obtenerPorId(req, res, next)
    } else {
        res.status(404).json({
            mensaje: 'Parametros incorrectos.'
        })
    }
})

router.post('/agregar', auth.verificarGestor, async (req, res, next) => {    
    _toyota_atClientesController.agregar(req, res, next)
})

router.put('/modificar/:id', auth.verificarGestor, async (req, res, next) => {
    _toyota_atClientesController.actualizar(req, res, next)
})

router.delete('/eliminar/:id', auth.verificarGestor, async (req, res, next) => {
    _toyota_atClientesController.eliminar(req, res, next)
})

export default router
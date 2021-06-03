import routerx from 'express-promise-router'
import p_tipos_ivaController from '../controllers/p_tipos_iva.controller'
import models from '../models/index.js'
import auth from '../middlewares/auth.js'
import underscore from 'underscore'

const _p_tipos_ivaController = new p_tipos_ivaController(models.p_tipos_iva)
const router = routerx()

router.get('/consultar', auth.verificarGestor, async (req, res, next) => {
    if (underscore.isEmpty(req.query)) {
        _p_tipos_ivaController.obtenerTodos(req, res, next)
    }
    else if (req.query.id) {
        _p_tipos_ivaController.obtenerPorId(req, res, next)
    } else {
        res.status(404).json({
            mensaje: 'Parametros incorrectos.'
        })
    }
})

router.post('/agregar', auth.verificarAdministrador, async (req, res, next) => {    
    _p_tipos_ivaController.agregar(req, res, next)
})

router.put('/modificar/:id', auth.verificarAdministrador, async (req, res, next) => {
    _p_tipos_ivaController.actualizar(req, res, next)
})

router.delete('/eliminar/:id', auth.verificarAdministrador, async (req, res, next) => {
    _p_tipos_ivaController.eliminar(req, res, next)
})

export default router
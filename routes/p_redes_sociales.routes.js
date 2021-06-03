import routerx from 'express-promise-router'
import p_redes_socialesController from '../controllers/p_redes_sociales.controller'
import models from '../models/index.js'
import auth from '../middlewares/auth.js'
import underscore from 'underscore'

const _p_redes_socialesController = new p_redes_socialesController(models.p_redes_sociales)
const router = routerx()

router.get('/consultar', auth.verificarGestor, async (req, res, next) => {
    if (underscore.isEmpty(req.query)) {
        _p_redes_socialesController.obtenerTodos(req, res, next)
    }
    else if (req.query.id) {
        _p_redes_socialesController.obtenerPorId(req, res, next)
    } else {
        res.status(404).json({
            mensaje: 'Parametros incorrectos.'
        })
    }
})

router.post('/agregar', auth.verificarAdministrador, async (req, res, next) => {    
    _p_redes_socialesController.agregar(req, res, next)
})

router.put('/modificar/:id', auth.verificarAdministrador, async (req, res, next) => {
    _p_redes_socialesController.actualizar(req, res, next)
})

router.delete('/eliminar/:id', auth.verificarAdministrador, async (req, res, next) => {
    _p_redes_socialesController.eliminar(req, res, next)
})

export default router

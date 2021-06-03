import routerx from 'express-promise-router'
import p_tasas_interesController from '../controllers/p_tasas_interes.controller'
import models from '../models/index.js'
import auth from '../middlewares/auth.js'
import underscore from 'underscore'

const _p_tasas_interesController = new p_tasas_interesController(models.p_tasas_interes)
const router = routerx()

router.get('/consultar', auth.verificarGestor, async (req, res, next) => {
    if (underscore.isEmpty(req.query)) {
        _p_tasas_interesController.obtenerTodos(req, res, next)
    }
    else if (req.query.id) {
        _p_tasas_interesController.obtenerPorId(req, res, next)
    } else {
        res.status(404).json({
            mensaje: 'Parametros incorrectos.'
        })
    }
})

router.post('/agregar', auth.verificarAdministrador, async (req, res, next) => {    
    _p_tasas_interesController.agregar(req, res, next)
})

router.put('/modificar/:id', auth.verificarAdministrador, async (req, res, next) => {
    _p_tasas_interesController.actualizar(req, res, next)
})

router.delete('/eliminar/:id', auth.verificarAdministrador, async (req, res, next) => {
    _p_tasas_interesController.eliminar(req, res, next)
})

export default router

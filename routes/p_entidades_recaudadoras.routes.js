import routerx from 'express-promise-router'
import p_entidades_recaudadorasController from '../controllers/p_entidades_recaudadoras.controller'
import models from '../models/index.js'
import auth from '../middlewares/auth.js'
import underscore from 'underscore'

const _p_entidades_recaudadorasController = new p_entidades_recaudadorasController(models.p_entidades_recaudadoras)
const router = routerx()

router.get('/consultar', auth.verificarGestor, async (req, res, next) => {
    if (underscore.isEmpty(req.query)) {
        _p_entidades_recaudadorasController.obtenerTodos(req, res, next)
    }
    else if (req.query.id) {
        _p_entidades_recaudadorasController.obtenerPorId(req, res, next)
    } else {
        res.status(404).json({
            mensaje: 'Parametros incorrectos.'
        })
    } 
})

router.post('/agregar', auth.verificarAdministrador, async (req, res, next) => {    
    _p_entidades_recaudadorasController.agregar(req, res, next)
})

router.put('/modificar/:id', auth.verificarAdministrador, async (req, res, next) => {
    _p_entidades_recaudadorasController.actualizar(req, res, next)
})

router.delete('/eliminar/:id', auth.verificarAdministrador, async (req, res, next) => {
    _p_entidades_recaudadorasController.eliminar(req, res, next)
})

export default router



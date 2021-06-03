import routerx from 'express-promise-router'
import p_grupos_trabajoController from '../controllers/p_grupos_trabajo.controller'
import models from '../models/index.js'
import auth from '../middlewares/auth.js'
import underscore from 'underscore'

const _p_grupos_trabajoController = new p_grupos_trabajoController(models.p_grupos_trabajo)
const router = routerx()

router.get('/consultar', auth.verificarGestor, async (req, res, next) => {
    if (underscore.isEmpty(req.query)) {
        _p_grupos_trabajoController.obtenerTodos(req, res, next)
    }
    else if (req.query.id) {
        _p_grupos_trabajoController.obtenerPorId(req, res, next)
    } else {
        res.status(404).json({
            mensaje: 'Parametros incorrectos.'
        })
    }
})

router.post('/agregar', auth.verificarAdministrador, async (req, res, next) => {    
    _p_grupos_trabajoController.agregar(req, res, next)
})

router.put('/modificar/:id', auth.verificarAdministrador, async (req, res, next) => {
    _p_grupos_trabajoController.actualizar(req, res, next)
})

router.delete('/eliminar/:id', auth.verificarAdministrador, async (req, res, next) => {
    _p_grupos_trabajoController.eliminar(req, res, next)
})

export default router



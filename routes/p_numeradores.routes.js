import routerx from 'express-promise-router'
import p_numeradoresController from '../controllers/p_numeradores.controller'
import models from '../models/index.js'
import auth from '../middlewares/auth.js'
import underscore from 'underscore'

const _p_numeradoresController = new p_numeradoresController(models.p_numeradores)
const router = routerx()

router.get('/consultar', auth.verificarGestor, async (req, res, next) => {
    if (underscore.isEmpty(req.query)) {
        _p_numeradoresController.obtenerTodos(req, res, next)
    }
    else if (req.query.id) {
        _p_numeradoresController.obtenerPorId(req, res, next)
    } else {
        res.status(404).json({
            mensaje: 'Parametros incorrectos.'
        })
    }
})

router.post('/agregar', auth.verificarAdministrador, async (req, res, next) => {    
    _p_numeradoresController.agregar(req, res, next)
})

router.put('/modificar/:id', auth.verificarAdministrador, async (req, res, next) => {
    _p_numeradoresController.actualizar(req, res, next)
})

router.delete('/eliminar/:id', auth.verificarAdministrador, async (req, res, next) => {
    _p_numeradoresController.eliminar(req, res, next)
})

export default router



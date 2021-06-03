import routerx from 'express-promise-router'
import p_tipos_direccionController from '../controllers/p_tipos_direccion.controller'
import models from '../models/index.js'
import auth from '../middlewares/auth.js'
import underscore from 'underscore'

const _p_tipos_direccionController = new p_tipos_direccionController(models.p_tipos_direccion)
const router = routerx()

router.get('/consultar', auth.verificarGestor, async (req, res, next) => {
    if (underscore.isEmpty(req.query)) {
        _p_tipos_direccionController.obtenerTodos(req, res, next)
    }
    else if (req.query.id) {
        _p_tipos_direccionController.obtenerPorId(req, res, next)
    } else {
        res.status(404).json({
            mensaje: 'Parametros incorrectos.'
        })
    }
})

router.post('/agregar', auth.verificarAdministrador, async (req, res, next) => {    
    _p_tipos_direccionController.agregar(req, res, next)
})

router.put('/modificar/:id', auth.verificarAdministrador, async (req, res, next) => {
    _p_tipos_direccionController.actualizar(req, res, next)
})

router.delete('/eliminar/:id', auth.verificarAdministrador, async (req, res, next) => {
    _p_tipos_direccionController.eliminar(req, res, next)
})

export default router
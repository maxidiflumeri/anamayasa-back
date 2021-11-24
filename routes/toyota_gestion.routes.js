import routerx from 'express-promise-router'
import toyota_gestionController from '../controllers/toyota_gestion.controller'
import models from '../models/index.js'
import auth from '../middlewares/auth.js'
import underscore from 'underscore'

const _toyota_gestionController = new toyota_gestionController(models.toyota_gestion)
const router = routerx()

router.get('/consultar', auth.verificarGestor, async (req, res, next) => {
    if (underscore.isEmpty(req.query)) {
        _toyota_gestionController.obtenerTodos(req, res, next)
    }
    else if (req.query.id) {
        _toyota_gestionController.obtenerPorId(req, res, next)
    } else {
        res.status(404).json({
            mensaje: 'Parametros incorrectos.'
        })
    }
})

router.post('/agregar', auth.verificarGestor, async (req, res, next) => {    
    _toyota_gestionController.agregar(req, res, next)
})

router.put('/modificar/:id', auth.verificarGestor, async (req, res, next) => {
    _toyota_gestionController.actualizar(req, res, next)
})

router.delete('/eliminar/:id', auth.verificarGestor, async (req, res, next) => {
    _toyota_gestionController.eliminar(req, res, next)
})

export default router
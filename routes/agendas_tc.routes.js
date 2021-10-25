import routerx from 'express-promise-router'
import agendas_tcController from '../controllers/agendas_tc.controller'
import models from '../models/index.js'
import auth from '../middlewares/auth.js'
import underscore from 'underscore'

const _agendas_tcController = new agendas_tcController(models.agendas_tc)
const router = routerx()

router.get('/consultar', auth.verificarGestor, async (req, res, next) => {
    if (underscore.isEmpty(req.query)) {
        _agendas_tcController.obtenerTodos(req, res, next)
    }
    else if (req.query.id) {
        _agendas_tcController.obtenerPorId(req, res, next)
    } else {
        res.status(404).json({
            mensaje: 'Parametros incorrectos.'
        })
    }
})

router.post('/agregar', auth.verificarGestor, async (req, res, next) => {    
    _agendas_tcController.agregar(req, res, next)
})

router.put('/modificar/:id', auth.verificarGestor, async (req, res, next) => {
    _agendas_tcController.actualizar(req, res, next)
})

router.delete('/eliminar/:id', auth.verificarGestor, async (req, res, next) => {
    _agendas_tcController.eliminar(req, res, next)
})

export default router
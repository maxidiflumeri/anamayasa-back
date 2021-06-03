import routerx from 'express-promise-router'
import p_codigos_gestionController from '../controllers/p_codigos_gestion.controller'
import models from '../models/index.js'
import auth from '../middlewares/auth.js'
import underscore from 'underscore'

const _p_codigos_gestionController = new p_codigos_gestionController(models.p_codigos_gestion)
const router = routerx()

router.get('/consultar', auth.verificarGestor, async (req, res, next) => {
    if (underscore.isEmpty(req.query)) {
        _p_codigos_gestionController.obtenerTodos(req, res, next)
    }
    else if (req.query.id) {
        _p_codigos_gestionController.obtenerPorId(req, res, next)
    }
    else if (req.query.id_empresa) {
        _p_codigos_gestionController.obtenerPorIdEmpresa(req, res, next)
    } else {
        res.status(404).json({
            mensaje: 'Parametros incorrectos.'
        })
    }
})

router.post('/agregar', auth.verificarAdministrador, async (req, res, next) => {    
    _p_codigos_gestionController.agregar(req, res, next)
})

router.put('/modificar/:id', auth.verificarAdministrador, async (req, res, next) => {
    _p_codigos_gestionController.actualizar(req, res, next)
})

router.delete('/eliminar/:id', auth.verificarAdministrador, async (req, res, next) => {
    _p_codigos_gestionController.eliminar(req, res, next)
})

export default router



import routerx from 'express-promise-router'
import models from '../models/index.js'
import p_template_correosController from '../controllers/p_template_correos.controller'
import auth from '../middlewares/auth.js'
import underscore from 'underscore'

const _p_template_correosController = new p_template_correosController(models.p_template_correos)
const router = routerx()

router.get('/consultar', auth.verificarGestor, async (req, res, next) => {
    if (underscore.isEmpty(req.query)) {
        _p_template_correosController.obtenerTodos(req, res, next)
    } else if (req.query.id) {
        _p_template_correosController.obtenerPorId(req, res, next)
    } else if (req.query.id_empresa) {
        _p_template_correosController.obtenerPorIdEmpresa(req, res, next)
    } else {
        res.status(404).json({
            mensaje: 'Parametros incorrectos.'
        })
    }
})

router.post('/agregar', auth.verificarReferente, async (req, res, next) => {
    _p_template_correosController.agregar(req, res, next)
})

router.put('/modificar/:id', auth.verificarReferente, async (req, res, next) => {
    _p_template_correosController.actualizar(req, res, next)
})

router.delete('/eliminar/:id', auth.verificarAdministrador, async (req, res, next) => {
    _p_template_correosController.eliminar(req, res, next)
})

export default router
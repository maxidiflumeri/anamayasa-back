import routerx from 'express-promise-router'
import p_codigos_situacionController from '../controllers/p_codigos_situacion.controller'
import models from '../models/index.js'
import auth from '../middlewares/auth.js'
import underscore from 'underscore'

const _p_codigos_situacionController = new p_codigos_situacionController(models.p_codigos_situacion)
const router = routerx()

router.get('/consultar', auth.verificarGestor, async (req, res, next) => {
    if (underscore.isEmpty(req.query)) {
        _p_codigos_situacionController.obtenerTodos(req, res, next)
    }
    else if (req.query.id) {
        _p_codigos_situacionController.obtenerPorId(req, res, next)

    }
    else if (req.query.id_empresa) {
        _p_codigos_situacionController.obtenerPorIdEmpresa(req, res, next)
    } else {
        res.status(404).json({
            mensaje: 'Parametros incorrectos.'
        })
    }
})

router.post('/agregar', auth.verificarAdministrador, async (req, res, next) => {
    _p_codigos_situacionController.agregar(req, res, next)
})

router.put('/modificar/:id', auth.verificarAdministrador, async (req, res, next) => {
    _p_codigos_situacionController.actualizar(req, res, next)
})

router.delete('/eliminar/:id', auth.verificarAdministrador, async (req, res, next) => {
    _p_codigos_situacionController.eliminar(req, res, next)
})

export default router



import routerx from 'express-promise-router'
import codigosBarraController from '../controllers/codigos_barra.controller'
import models from '../models/index.js'
import auth from '../middlewares/auth.js'
import underscore from 'underscore'

const _codigosBarraController = new codigosBarraController(models.codigos_barra)
const router = routerx()

router.get('/consultar', auth.verificarGestor, async (req, res, next) => {
    if (underscore.isEmpty(req.query)) {
        _codigosBarraController.obtenerTodos(req, res, next)
    } else if (req.query.id) {
        _codigosBarraController.obtenerPorId(req, res, next)
    } else if (req.query.id_deudor) {
        _codigosBarraController.obtenerPorIdDeudor(req, res, next)
    } else {
        res.status(404).json({
            mensaje: 'Parametros incorrectos.'
        })
    }
})

router.post('/agregar', auth.verificarAdministrador, async (req, res, next) => {
    _codigosBarraController.agregar(req, res, next)
})

router.put('/modificar/:id', auth.verificarAdministrador, async (req, res, next) => {
    _codigosBarraController.actualizar(req, res, next)
})

router.delete('/eliminar/:id', auth.verificarAdministrador, async (req, res, next) => {
    _codigosBarraController.eliminar(req, res, next)
})

export default router
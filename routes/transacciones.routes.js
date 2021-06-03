import routerx from 'express-promise-router'
import models from '../models/index.js'
import transaccionesController from '../controllers/transacciones.controller'
import auth from '../middlewares/auth.js'
import underscore from 'underscore'

const _transaccionesController = new transaccionesController(models.transacciones)
const router = routerx()

router.get('/consultar', auth.verificarGestor, async (req, res, next) => {
    if (underscore.isEmpty(req.query)) {
        _transaccionesController.obtenerTodos(req, res, next)
    } else if (req.query.id) {
        _transaccionesController.obtenerPorId(req, res, next)
    } else if (req.query.id_deudor) {
        _transaccionesController.obtenerPorIdDeudor(req, res, next)
    } else if (req.query.id_usuario) {
        _transaccionesController.obtenerPorIdUsuario(req, res, next)
    } else {
        res.status(404).json({
            mensaje: 'Parametros incorrectos.'
        })
    }
})

router.post('/agregar', auth.verificarGestor, async (req, res, next) => {
    _transaccionesController.agregar(req, res, next)
})

router.put('/modificar/:id', auth.verificarAdministrador, async (req, res, next) => {
    _transaccionesController.actualizar(req, res, next)
})

router.delete('/eliminar/:id', auth.verificarAdministrador, async (req, res, next) => {
    _transaccionesController.eliminar(req, res, next)
})

export default router
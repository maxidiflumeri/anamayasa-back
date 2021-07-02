import routerx from 'express-promise-router'
import deudoresController from '../controllers/deudores.controller'
import models from '../models/index.js'
import auth from '../middlewares/auth.js'
import underscore from 'underscore'

const _deudoresController = new deudoresController(models.deudores)
const router = routerx()

router.get('/consultar', auth.verificarGestor, async (req, res, next) => {
    if (underscore.isEmpty(req.query)) {
        _deudoresController.obtenerTodos(req, res, next)
    } else if (req.query.primer_deudor) {
        _deudoresController.obtenerPrimerDeudor(req, res, next)
    } else if (req.query.id) {
        _deudoresController.obtenerPorId(req, res, next)
    } else if (req.query.id_empresa && req.query.id_deudor) {
        _deudoresController.obtenerPorIdyEmpresa(req, res, next)
    } else if (req.query.id_empresa && req.query.nro_documento) {
        _deudoresController.obtenerPorEmpresayDocumento(req, res, next)
    } else if (req.query.id_empresa && req.query.nombre) {
        _deudoresController.obtenerPorEmpresayNombre(req, res, next)
    } else if (req.query.id_empresa && req.query.nro_cliente) {
        _deudoresController.obtenerPorEmpresayCliente(req, res, next)
    } else if (req.query.nro_documento) {
        _deudoresController.obtenerPorDocumento(req, res, next)
    } else if (req.query.nombre) {
        _deudoresController.obtenerPorNombre(req, res, next)
    } else if (req.query.nro_cliente) {
        _deudoresController.obtenerPorCliente(req, res, next)
    } else {
        res.status(404).json({
            mensaje: 'Parametros incorrectos.'
        })
    }
})

router.get('/actualizaDeuda', auth.verificarGestor, async (req, res, next) => {
    if (req.query.monto && req.query.id_tipo_actualizacion && req.query.fecha && req.query.id_iva && req.query.id_empresa && req.query.id_deudor) {
        _deudoresController.actualizaDeuda(req, res, next)
    } else {
        res.status(404).json({
            mensaje: 'Parametros incorrectos.'
        })
    }
})

router.post('/agregar', auth.verificarAdministrador, async (req, res, next) => {
    _deudoresController.agregar(req, res, next)
})

router.put('/modificar/:id', auth.verificarGestor, async (req, res, next) => {
    _deudoresController.actualizar(req, res, next)
})

router.delete('/eliminar/:id', auth.verificarAdministrador, async (req, res, next) => {
    _deudoresController.eliminar(req, res, next)
})


export default router
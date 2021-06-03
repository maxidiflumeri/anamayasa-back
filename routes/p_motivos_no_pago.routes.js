import routerx from 'express-promise-router'
import p_motivos_no_pagoController from '../controllers/p_motivos_no_pago.controller'
import models from '../models/index.js'
import auth from '../middlewares/auth.js'
import underscore from 'underscore'

const _p_motivos_no_pagoController = new p_motivos_no_pagoController(models.p_motivos_no_pago)
const router = routerx()

router.get('/consultar', auth.verificarGestor, async (req, res, next) => {
    if (underscore.isEmpty(req.query)) {
        _p_motivos_no_pagoController.obtenerTodos(req, res, next)
    }
    else if (req.query.id) {
        _p_motivos_no_pagoController.obtenerPorId(req, res, next)
    } 
    else if (req.query.id_empresa) {
        _p_motivos_no_pagoController.obtenerPorIdEmpresa(req, res, next)
    }
    else {
        res.status(404).json({
            mensaje: 'Parametros incorrectos.'
        })
    }  
})

router.post('/agregar', auth.verificarAdministrador, async (req, res, next) => {    
    _p_motivos_no_pagoController.agregar(req, res, next)
})

router.put('/modificar/:id', auth.verificarAdministrador, async (req, res, next) => {
    _p_motivos_no_pagoController.actualizar(req, res, next)
})

router.delete('/eliminar/:id', auth.verificarAdministrador, async (req, res, next) => {
    _p_motivos_no_pagoController.eliminar(req, res, next)
})

export default router



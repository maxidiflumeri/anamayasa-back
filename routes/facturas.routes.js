import routerx from 'express-promise-router'
import facturasController from '../controllers/facturas.controller'
import models from '../models/index.js'
import auth from '../middlewares/auth.js'
import underscore from 'underscore'

const _facturasController = new facturasController(models.facturas)
const router = routerx()

router.get('/consultar', auth.verificarGestor, async (req, res, next) => {
    if(underscore.isEmpty(req.query)){
        _facturasController.obtenerTodos(req, res, next)    
    }else if(req.query.id && req.query.nro_factura){
        _facturasController.obtenerPorId(req, res, next)
    }else if(req.query.id_deudor){
        _facturasController.obtenerPorIdDeudor(req, res, next)
    }else{
        res.status(404).json({
            mensaje: 'Parametros incorrectos.'
        })
    }    
})

router.post('/agregar', auth.verificarAdministrador, async (req, res, next) => {        
    _facturasController.agregar(req, res, next)
})

router.put('/modificar/:id/:nro_factura', auth.verificarAdministrador, async (req, res, next) => {
    _facturasController.actualizar(req, res, next)
})

router.delete('/eliminar/:id/:nro_factura', auth.verificarAdministrador, async (req, res, next) => {
    _facturasController.eliminar(req, res, next)
})

export default router
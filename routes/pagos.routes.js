import routerx from 'express-promise-router'
import models from '../models/index.js'
import pagosController from '../controllers/pagos.controller'
import auth from '../middlewares/auth.js'
import underscore from 'underscore'

const _pagosController = new pagosController(models.pagos)
const router = routerx()

router.get('/consultar', auth.verificarGestor, async (req, res, next) => {
    if(underscore.isEmpty(req.query)){
        _pagosController.obtenerTodos(req, res, next)    
    }else if(req.query.id && req.query.nro_comprobante){
        _pagosController.obtenerPorId(req, res, next)
    }else if(req.query.id_deudor){
        _pagosController.obtenerPorIdDeudor(req, res, next)
    }else{
        res.status(404).json({
            mensaje: 'Parametros incorrectos.'
        })
    }    
})

router.post('/agregar', auth.verificarGestor, async (req, res, next) => {    
    _pagosController.agregar(req, res, next)
})

router.put('/modificar/:id/:nro_comprobante', auth.verificarAdministrador, async (req, res, next) => {
    _pagosController.actualizar(req, res, next)
})

router.delete('/eliminar/:id/:nro_comprobante', auth.verificarLider, async (req, res, next) => {
    _pagosController.eliminar(req, res, next)
})

export default router
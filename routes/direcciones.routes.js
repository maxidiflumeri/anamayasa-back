import routerx from 'express-promise-router'
import direccionesController from '../controllers/direcciones.controller'
import models from '../models/index.js'
import auth from '../middlewares/auth.js'
import underscore from 'underscore'

const _direccionesController = new direccionesController(models.direcciones)
const router = routerx()

router.get('/consultar', auth.verificarGestor, async (req, res, next) => {
    if(underscore.isEmpty(req.query)){
        _direccionesController.obtenerTodos(req, res, next)    
    }else if(req.query.id){
        _direccionesController.obtenerPorId(req, res, next)
    }else if(req.query.id_deudor){
        _direccionesController.obtenerPorIdDeudor(req, res, next)
    }else{
        res.status(404).json({
            mensaje: 'Parametros incorrectos.'
        })
    }    
})

router.post('/agregar', auth.verificarGestor, async (req, res, next) => {        
    _direccionesController.agregar(req, res, next)
})

router.put('/modificar/:id', auth.verificarGestor, async (req, res, next) => {
    _direccionesController.actualizar(req, res, next)
})

router.delete('/eliminar/:id', auth.verificarGestor, async (req, res, next) => {
    _direccionesController.eliminar(req, res, next)
})

export default router
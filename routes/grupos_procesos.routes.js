import routerx from 'express-promise-router'
import grupos_procesosController from '../controllers/grupos_procesos.controller'
import models from '../models/index.js'
import auth from '../middlewares/auth.js'
import underscore from 'underscore'

const _grupos_procesosController = new grupos_procesosController(models.grupos_procesos)
const router = routerx()

router.get('/consultar', auth.verificarGestor, async (req, res, next) => {
    if (underscore.isEmpty(req.query)) {
        _grupos_procesosController.obtenerTodos(req, res, next)
    } else if(req.query.id){
        _grupos_procesosController.obtenerPorId(req, res, next)
    } else if(req.query.id_rol){
        _grupos_procesosController.obtenerPorRol(req, res, next)
    } else {
        res.status(404).json({
            mensaje: 'Parametros incorrectos.'
        })
    }
})

router.post('/agregar', auth.verificarAdministrador, async (req, res, next) => {    
    _grupos_procesosController.agregar(req, res, next)
})

router.put('/modificar/:id', auth.verificarAdministrador, async (req, res, next) => {
    _grupos_procesosController.actualizar(req, res, next)
})

router.delete('/eliminar/:id', auth.verificarAdministrador, async (req, res, next) => {
    _grupos_procesosController.eliminar(req, res, next)
})

export default router



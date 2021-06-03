import routerx from 'express-promise-router'
import items_procesosController from '../controllers/items_procesos.controller'
import models from '../models/index.js'
import auth from '../middlewares/auth.js'
import underscore from 'underscore'

const _items_procesosController = new items_procesosController(models.items_procesos)
const router = routerx()

router.get('/consultar', auth.verificarGestor, async (req, res, next) => {
    if (underscore.isEmpty(req.query)) {
        _items_procesosController.obtenerTodos(req, res, next)
    } else if(req.query.id){
        _items_procesosController.obtenerPorId(req, res, next)
    } else if(req.query.id_grupo && req.query.id_rol){
        _items_procesosController.obtenerPorGrupoyRol(req, res, next)
    } else {
        res.status(404).json({
            mensaje: 'Parametros incorrectos.'
        })
    }
})

router.post('/agregar', auth.verificarAdministrador, async (req, res, next) => {    
    _items_trabajoController.agregar(req, res, next)
})

router.put('/modificar/:id', auth.verificarAdministrador, async (req, res, next) => {
    _items_trabajoController.actualizar(req, res, next)
})

router.delete('/eliminar/:id', auth.verificarAdministrador, async (req, res, next) => {
    _items_trabajoController.eliminar(req, res, next)
})

export default router



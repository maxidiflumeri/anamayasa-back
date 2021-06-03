import routerx from 'express-promise-router'
import models from '../models/index.js'
import telefonos_borradosController from '../controllers/telefonos_borrados.controller'
import auth from '../middlewares/auth.js'
import underscore from 'underscore'

const _telefonos_borradosController = new telefonos_borradosController(models.telefonos_borrados)
const router = routerx()

router.get('/consultar', auth.verificarGestor, async (req, res, next) => {
    if (underscore.isEmpty(req.query)) {
        _telefonos_borradosController.obtenerTodos(req, res, next)
    }
    else if (req.query.id) {
        _telefonos_borradosController.obtenerPorId(req, res, next)
    } else {
        res.status(404).json({
            mensaje: 'Parametros incorrectos.'
        })
    }
})

router.post('/agregar', auth.verificarGestor, async (req, res, next) => {    
    _telefonos_borradosController.agregar(req, res, next)
})

router.put('/modificar/:nro_doc/:telefono', auth.verificarAdministrador, async (req, res, next) => {
    _telefonos_borradosController.actualizar(req, res, next)
})

router.delete('/eliminar/:nro_doc/:telefono', auth.verificarAdministrador, async (req, res, next) => {
    _telefonos_borradosController.eliminar(req, res, next)
})

export default router
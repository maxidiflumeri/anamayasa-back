import routerx from 'express-promise-router'
import p_empresas_paramController from '../controllers/p_empresas_param.controller'
import models from '../models/index.js'
import auth from '../middlewares/auth.js'
import underscore from 'underscore'

const _p_empresas_paramController = new p_empresas_paramController(models.p_empresas_param)
const router = routerx()

router.get('/consultar', auth.verificarGestor, async (req, res, next) => {
    if (underscore.isEmpty(req.query)) {
        _p_empresas_paramController.obtenerTodos(req, res, next)
    }
    else if (req.query.id_empresa && req.query.id_tabla) {
        _p_empresas_paramController.obtenerPorIdEmpresaIdTabla(req, res, next)
    } else {
        res.status(404).json({
            mensaje: 'Parametros incorrectos.'
        })
    }
})

router.post('/agregar', auth.verificarAdministrador, async (req, res, next) => {    
    _p_empresas_paramController.agregar(req, res, next)
})

router.put('/modificar/:id_empresa/:id_tabla/:id_opcion', auth.verificarAdministrador, async (req, res, next) => {
    _p_empresas_paramController.actualizar(req, res, next)
})

router.delete('/eliminar/:id_empresa/:id_tabla/:id_opcion', auth.verificarAdministrador, async (req, res, next) => {
    _p_empresas_paramController.eliminar(req, res, next)
})

export default router



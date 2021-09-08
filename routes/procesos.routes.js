import routerx from 'express-promise-router'
import procesosController from '../controllers/procesos.controller'
import auth from '../middlewares/auth.js'
import underscore from 'underscore'

const _procesosController = new procesosController()
const router = routerx()

router.get('/baseDiscador', async (req, res, next) => {
    if (underscore.isEmpty(req.query)) {
        res.status(404).json({
            mensaje: 'Parametros incorrectos.'
        })
    } else {
        _procesosController.generaBaseDiscador(req, res, next)
    }
})

router.get('/estadistico', auth.verificarGestor, async (req, res, next) => {
    if (underscore.isEmpty(req.query)) {
        res.status(404).json({
            mensaje: 'Parametros incorrectos.'
        })
    } else {
        _procesosController.generaEstadistico(req, res, next)
    }
})

router.get('/archivoUsoMultiples', auth.verificarGestor, async (req, res, next) => {
    if (underscore.isEmpty(req.query)) {
        res.status(404).json({
            mensaje: 'Parametros incorrectos.'
        })
    } else {
        _procesosController.generaArchivoUsoMultiple(req, res, next)
    }
})

export default router
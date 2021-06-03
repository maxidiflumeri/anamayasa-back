import routerx from 'express-promise-router'
import envioMailController from '../controllers/envio_mail.controller'
import auth from '../middlewares/auth.js'
import multer from '../middlewares/multer'

const router = routerx()
const _envioMailController = new envioMailController()

router.post('/envioMail', [auth.verificarGestor, multer.upload.array('adjuntos',10)], async (req, res, next) => {
    _envioMailController.enviarMail(req, res, next)
})

export default router




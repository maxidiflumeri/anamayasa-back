import baseDiscadorService from '../services/baseDiscador'

class procesosController {

    constructor() {        
    }

    async generaBaseDiscador(req, res, next) {
        try {
            const response = await baseDiscadorService.generaBase(req.query)
            res.status(200).json(response)
        } catch (error) {
            res.status(500).json({
                mensaje: 'Ocurrio un error'
            })
            next(error)
        }
    }   
}

export default procesosController
import baseDiscadorService from '../services/baseDiscador'
import estadisticoService from '../services/estadistico'
import archivoUsoMultipleService from '../services/archivoUsoMultiple'
import fs from 'fs'

class procesosController {

    constructor() {        
    }

    async generaBaseDiscador(req, res, next) {
        try {
            let response = await baseDiscadorService.generaBase(req.query)
            var file = fs.createReadStream(`./files/bases/emp${response}/contactos.xlsx`)
            var stat = fs.statSync(`./files/bases/emp${response}/contactos.xlsx`)
            res.setHeader('Content-Length', stat.size)
            res.setHeader('Content-Type', 'application/vnd.openxmlformats')
            res.setHeader('Content-Disposition', `attachment; filename=contactos.xlsx`)
            file.pipe(res)
        } catch (error) {
            res.status(500).json({
                mensaje: 'Ocurrio un error'
            })
            next(error)
        }
    }   

    async generaEstadistico(req, res, next) {
        try {
            const response = await estadisticoService.generaEstadistico(req.query)
            res.status(200).json(response)
        } catch (error) {
            res.status(500).json({
                mensaje: 'Ocurrio un error'
            })
            next(error)
        }
    } 

    async generaArchivoUsoMultiple(req, res, next) {
        try {
            let response = await archivoUsoMultipleService.generaArchivo(req.query)
            var file = fs.createReadStream(`./files/ArchivoUsoMultiples/emp${response}/${req.query.id_empresa}_${req.query.remesa_desde}_${req.query.remesa_hasta}.xlsx`)
            var stat = fs.statSync(`./files/ArchivoUsoMultiples/emp${response}/${req.query.id_empresa}_${req.query.remesa_desde}_${req.query.remesa_hasta}.xlsx`)
            res.setHeader('Content-Length', stat.size)
            res.setHeader('Content-Type', 'application/vnd.openxmlformats')
            res.setHeader('Content-Disposition', `attachment; filename=${req.query.id_empresa}_${req.query.remesa_desde}_${req.query.remesa_hasta}.xlsx`)
            file.pipe(res)               
        } catch (error) {
            res.status(500).json({
                mensaje: 'Ocurrio un error'
            })
            next(error)
        }
    }
}

export default procesosController
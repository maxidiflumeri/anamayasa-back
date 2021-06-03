import serviceTransaccion from '../services/transaccion.service'

class direccionController {

    constructor(model) {
        this._model = model;
    }

    async obtenerTodos(req, res, next) {
        try {
            const response = await this._model.findAll()
            res.status(200).json(response)
        } catch (error) {
            res.status(500).json({
                mensaje: 'Ocurrio un error'
            })
            next(error)
        }
    }

    async obtenerPorId(req, res, next) {
        try {
            const response = await this._model.findAll({ where: { id_direccion: req.query.id } })
            res.status(200).json(response)
        } catch (error) {
            res.status(500).json({
                mensaje: 'Ocurrio un error'
            })
            next(error)
        }
    }

    async obtenerPorIdDeudor(req, res, next) {
        try {
            const response = await this._model.findAll({ where: { id_deudor: req.query.id_deudor }, order: [['efectivo', 'DESC']]} )
            res.status(200).json(response)
        } catch (error) {
            res.status(500).json({
                mensaje: 'Ocurrio un error'
            })
            next(error)
        }
    }

    async agregar(req, res, next) {
        try {
            if (req.body.efectivo == 1) {
                await this._model.update({ efectivo: 0 }, { where: { id_deudor: req.body.id_deudor, efectivo: 1 } })
            }
            const response = await this._model.create(req.body)
            let detalle = this.generaDetalle('Se agrega domicilio: ', req.body)
            serviceTransaccion.generaTransaccion(req.headers.token, req.body.id_deudor, 37, detalle, null, null)
            res.status(200).json(response)
        } catch (error) {
            res.status(500).json({
                mensaje: 'Ocurrio un error'
            })
            next(error)
        }
    }

    async actualizar(req, res, next) {
        try {
            const domicilio = await this._model.findAll({ where: { id_direccion: req.params.id } })
            if (req.body.efectivo == 1) {
                await this._model.update({ efectivo: 0 }, { where: { id_deudor: domicilio[0].id_deudor, efectivo: 1 } })
            }            
            const response = await this._model.update(req.body, { where: { id_direccion: req.params.id } })
            let detalle = this.generaDetalle('Se modifica domicilio: ', domicilio[0])
            detalle = detalle + this.generaDetalle(' por ', req.body)
            serviceTransaccion.generaTransaccion(req.headers.token, domicilio[0].id_deudor, 39, detalle, null, null)
            res.status(200).json(response)

        } catch (error) {
            res.status(500).json({
                mensaje: 'Ocurrio un error'
            })
            next(error)
        }
    }

    async eliminar(req, res, next) {
        try {
            const domicilio = await this._model.findAll({ where: { id_direccion: req.params.id } })
            const seBorro = await this._model.destroy({ where: { id_direccion: req.params.id } })
            if (seBorro) {
                let detalle = this.generaDetalle('Se elimina domicilio: ', domicilio[0])
                res.send({ Mensaje: "Se borro exitosamente" })
                serviceTransaccion.generaTransaccion(req.headers.token, domicilio[0].id_deudor, 38, detalle, null, null)
            } else {
                res.send({ Mensaje: "Id no encontrado" })
            }
        } catch (error) {
            res.status(500).json({
                mensaje: 'Ocurrio un error'
            })
            next(error)
        }
    }


    generaDetalle(comienzo, body) {
        let detalle = comienzo

        if (body.calle.length > 0) {
            detalle = detalle + `${body.calle} `
        }
        if (body.numero.length > 0 || body.numero > 0) {
            detalle = detalle + `${body.numero} `
        }
        if (body.piso.length > 0) {
            detalle = detalle + `- Piso: ${body.piso} `
        }
        if (body.departamento.length > 0) {
            detalle = detalle + `- Depto: ${body.departamento} `
        }
        if (body.entrada.length > 0) {
            detalle = detalle + `- Entrada: ${body.entrada} `
        }
        if (body.escalera.length > 0) {
            detalle = detalle + `- Escalera: ${body.escalera} `
        }
        if (body.cod_postal.length > 0) {
            detalle = detalle + `- CP: ${body.cod_postal} `
        }
        if (body.localidad.length > 0) {
            detalle = detalle + `- Localidad: ${body.localidad} `
        }
        if (body.provincia.length > 0) {
            detalle = detalle + `- Provincia: ${body.provincia} `
        }
        if (body.efectivo == 1) {
            detalle = detalle + `- Principal: Si`
        }else {
            detalle = detalle + `- Principal: No`
        }        

        return detalle
    }
}

export default direccionController
class toyota_gestionController {

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
            const response = await this._model.findAll({ where: { id: req.query.id } })
            res.status(200).json(response)
        } catch (error) {
            res.status(500).json({
                mensaje: 'Ocurrio un error'
            })
            next(error)
        }
    }

    async agregar(req, res, next) {
        let gestionToyota = {
            id_deudor: req.body.id_deudor,
            id_asignacion: req.body.id_asignacion,
            id_origen: req.body.id_origen,
            id_respuesta: req.body.id_respuesta,
            fecha_pago: req.body.fecha_pago.length == 0 ? null : req.body.fecha_pago,
            id_entidad: req.body.id_entidad.length == 0 ? null : req.body.id_entidad,
            id_tipo_pago: req.body.id_tipo_pago.length == 0 ? null : req.body.id_tipo_pago,
            importe_pago: req.body.importe_pago.length == 0 ? null : req.body.importe_pago,
            comentario: req.body.comentario,
            id_usuario: req.body.id_usuario
        }

        console.log(gestionToyota)

        try {
            const response = await this._model.create(gestionToyota)
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
            const response = await this._model.update(req.body, { where: { id: req.params.id } })
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
            const seBorro = await this._model.destroy({ where: { id: req.params.id } })
            if (seBorro) {
                res.send({ Mensaje: "Se borro exitosamente" })
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
}

export default toyota_gestionController
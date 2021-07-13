"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class facturasController {
  constructor(model) {
    this._model = model;
  }

  async obtenerTodos(req, res, next) {
    try {
      const response = await this._model.findAll();
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({
        mensaje: 'Ocurrio un error'
      });
      next(error);
    }
  }

  async obtenerPorId(req, res, next) {
    try {
      const response = await this._model.findAll({
        where: {
          nro_factura: req.query.nro_factura,
          id_deudor: req.query.id
        }
      });
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({
        mensaje: 'Ocurrio un error'
      });
      next(error);
    }
  }

  async obtenerPorIdDeudor(req, res, next) {
    try {
      const response = await this._model.findAll({
        where: {
          id_deudor: req.query.id_deudor
        }
      });
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({
        mensaje: 'Ocurrio un error'
      });
      next(error);
    }
  }

  async agregar(req, res, next) {
    try {
      const response = await this._model.create(req.body);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({
        mensaje: 'Ocurrio un error'
      });
      next(error);
    }
  }

  async actualizar(req, res, next) {
    try {
      const response = await this._model.update(req.body, {
        where: {
          nro_factura: req.params.nro_factura,
          id_deudor: req.params.id
        }
      });
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({
        mensaje: 'Ocurrio un error'
      });
      next(error);
    }
  }

  async eliminar(req, res, next) {
    try {
      const seBorro = await this._model.destroy({
        where: {
          nro_factura: req.params.nro_factura,
          id_deudor: req.params.id
        }
      });

      if (seBorro) {
        res.send({
          Mensaje: "Se borro exitosamente"
        });
      } else {
        res.send({
          Mensaje: "Id no encontrado"
        });
      }
    } catch (error) {
      res.status(500).json({
        mensaje: 'Ocurrio un error'
      });
      next(error);
    }
  }

}

var _default = facturasController;
exports.default = _default;
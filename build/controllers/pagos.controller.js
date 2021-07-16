"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _transaccion = _interopRequireDefault(require("../services/transaccion.service"));

var _index = _interopRequireDefault(require("../models/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class pagosController {
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
          id_deudor: req.query.id,
          nro_comprobante: req.query.nro_comprobante
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
      const detalle = `Se carga nuevo pago, tipo pago ${req.body.id_tipo_pago}, fecha de pago ${req.body.fecha_pago}, importe ${req.body.importe_total}`;

      _transaccion.default.generaTransaccion(req.headers.token, req.body.id_deudor, 5, detalle, null, null);

      if (req.body.id_tipo_pago == 8) {
        await _index.default.deudores.update({
          id_situacion: 8
        }, {
          where: {
            id_deudor: req.body.id_deudor
          }
        });
      }

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
          id_deudor: req.params.id,
          nro_comprobante: req.params.nro_comprobante
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
          id_deudor: req.params.id,
          nro_comprobante: req.params.nro_comprobante
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

var _default = pagosController;
exports.default = _default;
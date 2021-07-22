"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _transaccion = _interopRequireDefault(require("../services/transaccion.service"));

var _index = _interopRequireDefault(require("../models/index"));

var _connection = _interopRequireDefault(require("../config/db/connection"));

var _sequelize = require("sequelize");

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
          id_deudor: req.query.id_deudor,
          anulado: 0
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
    const t = await _connection.default.transaction();

    try {
      const promesas = await this._model.findAll({
        where: {
          id_deudor: req.body.id_deudor,
          id_tipo_pago: 8,
          anulado: 0,
          fecha_pago: {
            [_sequelize.Op.gt]: new Date()
          }
        }
      });

      if (promesas.length > 0) {
        res.status(500).json({
          mensaje: 'Ya existe promesa de pago'
        });
      } else {
        const response = await this._model.create(req.body, {
          transaction: t
        });
        const detalle = `Se carga nuevo pago, tipo pago ${req.body.id_tipo_pago}, fecha de pago ${req.body.fecha_pago}, importe ${req.body.importe_total}`;

        _transaccion.default.generaTransaccion(req.headers.token, req.body.id_deudor, 5, detalle, null, null);

        if (req.body.id_tipo_pago == 8) {
          await _index.default.deudores.update({
            id_situacion: 8
          }, {
            where: {
              id_deudor: req.body.id_deudor
            },
            transaction: t
          });
        }

        await t.commit();
        res.status(200).json(response);
      }
    } catch (error) {
      await t.rollback();
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

  async anularPago(req, res, next) {
    const t = await _connection.default.transaction();

    try {
      const response = await this._model.update({
        anulado: 1
      }, {
        where: {
          id_pago: req.params.id_pago
        },
        transaction: t
      });

      if (req.params.codigo == 8) {
        await _index.default.deudores.update({
          id_situacion: 2
        }, {
          where: {
            id_deudor: req.params.id_deudor
          },
          transaction: t
        });
      }

      const detalle = `Se anula pago id ${req.params.id_pago}`;

      _transaccion.default.generaTransaccion(req.headers.token, req.params.id_deudor, 18, detalle, null, null);

      await t.commit();
      res.status(200).json(response);
    } catch (error) {
      await t.rollback();
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
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../models/index"));

var _transaccion = _interopRequireDefault(require("../services/transaccion.service"));

var _connection = _interopRequireDefault(require("../config/db/connection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class conveniosController {
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
          id_convenio: req.query.id
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
    const t = await _connection.default.transaction();
    const convenioNuevo = req.body.convenioNuevo;
    const bodyFacturas = req.body.facturas;

    try {
      const response = await this._model.create(convenioNuevo, {
        transaction: t
      });

      for (var i = 0; i < bodyFacturas.length; i++) {
        let factura = bodyFacturas[i];
        await _index.default.facturas.update({
          id_convenio: response.id_convenio
        }, {
          where: {
            id_factura: factura.id_factura
          },
          transaction: t
        });
      }

      const detalle = `Se genera convenio por ${convenioNuevo.importe} en ${convenioNuevo.cuotas} cuotas.`;

      _transaccion.default.generaTransaccion(req.headers.token, convenioNuevo.id_deudor, 7, detalle, req.body.id_llamada, req.body.grabacion);

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

  async actualizar(req, res, next) {
    try {
      const response = await this._model.update(req.body, {
        where: {
          id_convenio: req.params.id
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
          id_convenio: req.params.id
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

  async anularConvenio(req, res, next) {
    const t = await _connection.default.transaction();

    try {
      const response = await this._model.update({
        anulado: 1
      }, {
        where: {
          id_convenio: req.params.id
        },
        transaction: t
      });
      await _index.default.facturas.update({
        id_convenio: null
      }, {
        where: {
          id_convenio: req.params.id
        },
        transaction: t
      });
      const detalle = `Se anula convenio número ${req.params.id}.`;

      _transaccion.default.generaTransaccion(req.headers.token, req.params.id_deudor, 9, detalle, req.body.id_llamada, req.body.grabacion);

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

}

var _default = conveniosController;
exports.default = _default;
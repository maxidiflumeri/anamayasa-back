"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../models/index.js"));

var _telefono = _interopRequireDefault(require("../dtos/telefono.dto"));

var _transaccion = _interopRequireDefault(require("../services/transaccion.service"));

var _connection = _interopRequireDefault(require("../config/db/connection"));

var _sequelize = require("sequelize");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  Op
} = require("sequelize");

class telefonosController {
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
          telefono: req.query.telefono
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
      let telefonosRet = [];
      const telefonos = await this._model.findAll({
        where: {
          id_deudor: req.query.id_deudor
        },
        order: [['efectivo', 'DESC']]
      });
      const tiposTelefonos = await _index.default.p_tipos_telefono.findAll();
      telefonos.map(telefono => {
        tiposTelefonos.map(tipo => {
          if (telefono.id_tipo_telefono == tipo.id_tipo_telefono) {
            let tel = new _telefono.default(telefono.id_deudor, telefono.telefono, telefono.efectivo, tipo);
            telefonosRet.push(tel);
          }
        });
      });
      res.status(200).json(telefonosRet);
    } catch (error) {
      res.status(500).json({
        mensaje: 'Ocurrio un error'
      });
      next(error);
    }
  }

  async obtenerPorNro(req, res, next) {
    try {
      const response = await this._model.findAll({
        where: {
          telefono: req.query.telefono
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
      if (req.body.efectivo == 1) {
        await this._model.update({
          efectivo: 0
        }, {
          where: {
            id_deudor: req.body.id_deudor,
            efectivo: 1
          }
        });
      }

      const telefonoOk = await _connection.default.query('DECLARE @RES VARCHAR(MAX) EXEC sp_arregla_telefono :param, @RES output select @RES as telefono', {
        replacements: {
          param: req.body.telefono
        },
        type: _sequelize.QueryTypes.SELECT
      });

      if (telefonoOk[0].telefono == "") {
        res.status(400).json({
          mensaje: 'El teléfono ingresado es inválido.'
        });
      } else {
        req.body.telefono = telefonoOk[0].telefono;
        const response = await this._model.create(req.body);

        _transaccion.default.generaTransaccion(req.headers.token, req.body.id_deudor, 15, `Se agrega telefono ${req.body.telefono}`, req.body.id_llamada, req.body.grabacion);

        res.status(200).json(response);
      }
    } catch (error) {
      res.status(500).json({
        mensaje: 'Error al agregar el teléfono. Vuelva a intentarlo.'
      });
      next(error);
    }
  }

  async actualizar(req, res, next) {
    try {
      if (req.body.efectivo == 1) {
        await this._model.update({
          efectivo: 0
        }, {
          where: {
            id_deudor: req.params.id,
            efectivo: 1
          }
        });
      }

      const telefonoOk = await _connection.default.query('DECLARE @RES VARCHAR(MAX) EXEC sp_arregla_telefono :param, @RES output select @RES as telefono', {
        replacements: {
          param: req.body.telefono
        },
        type: _sequelize.QueryTypes.SELECT
      });

      if (telefonoOk[0].telefono == "") {
        res.status(400).json({
          mensaje: 'El teléfono ingresado es inválido.'
        });
      } else {
        req.body.telefono = telefonoOk[0].telefono;
        const telefono = await this._model.findAll({
          where: {
            id_deudor: req.params.id,
            telefono: req.params.telefono
          }
        });
        const response = await this._model.update(req.body, {
          where: {
            id_deudor: req.params.id,
            telefono: req.params.telefono
          }
        }); //Inicia carga de transaccion

        if (telefono[0].telefono != req.body.telefono) {
          _transaccion.default.generaTransaccion(req.headers.token, req.params.id, 4, `Se modifica telefono ${req.params.telefono} por el telefono ${req.body.telefono}`, req.body.id_llamada, req.body.grabacion);
        }

        if (telefono[0].efectivo != req.body.efectivo) {
          if (req.body.efectivo == 1) {
            _transaccion.default.generaTransaccion(req.headers.token, req.params.id, 4, `Se marca como principal el telefono ${req.body.telefono}`, req.body.id_llamada, req.body.grabacion);
          } else {
            _transaccion.default.generaTransaccion(req.headers.token, req.params.id, 4, `Se desmarca como principal el telefono ${req.body.telefono}`, req.body.id_llamada, req.body.grabacion);
          }
        }

        if (telefono[0].id_tipo_telefono != req.body.id_tipo_telefono) {
          const detalle = `Se modifica el tipo telefono ${telefono[0].id_tipo_telefono} por el tipo telefono ${req.body.id_tipo_telefono} del telefono ${req.body.telefono}`;

          _transaccion.default.generaTransaccion(req.headers.token, req.params.id, 4, detalle, req.body.id_llamada, req.body.grabacion);
        }

        res.status(200).json(response);
      }
    } catch (error) {
      res.status(500).json({
        mensaje: 'Error al editar el teléfono. Vuelva a intentarlo.'
      });
      next(error);
    }
  }

  async eliminar(req, res, next) {
    try {
      const seBorro = await this._model.destroy({
        where: {
          id_deudor: req.params.id,
          telefono: req.params.telefono
        }
      });

      if (seBorro) {
        res.send({
          Mensaje: "Se borro exitosamente"
        });

        _transaccion.default.generaTransaccion(req.headers.token, req.params.id, 17, `Se elimina telefono ${req.params.telefono}`, req.body.id_llamada, req.body.grabacion);
      } else {
        res.send({
          Mensaje: "Id no encontrado"
        });
      }
    } catch (error) {
      res.status(500).json({
        mensaje: 'Error al eliminar el teléfono. Vuelva a intentarlo.'
      });
      next(error);
    }
  }

}

var _default = telefonosController;
exports.default = _default;
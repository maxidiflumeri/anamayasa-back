"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _transaccion = _interopRequireDefault(require("../services/transaccion.service"));

var _connection = _interopRequireDefault(require("../config/db/connection"));

var _sequelize = require("sequelize");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class vinculosController {
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
          id_vinculo: req.query.id
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
      if (req.body.telefono != "") {
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
        }
      }

      const response = await this._model.create(req.body);

      _transaccion.default.generaTransaccion(req.headers.token, req.body.id_deudor, 34, `Se agrega vinculo ${req.body.nombre}`, null, null);

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
      if (req.body.telefono != "") {
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
        }
      }

      const vinculo = await this._model.findAll({
        where: {
          id_vinculo: req.params.id
        }
      });
      const response = await this._model.update(req.body, {
        where: {
          id_vinculo: req.params.id
        }
      });

      if (vinculo[0].nombre != req.body.nombre) {
        _transaccion.default.generaTransaccion(req.headers.token, vinculo[0].id_deudor, 36, `Se modifica nombre del vinculo ${vinculo[0].nombre} por el nombre ${req.body.nombre}`, null, null);
      }

      if (vinculo[0].correo != req.body.correo) {
        _transaccion.default.generaTransaccion(req.headers.token, vinculo[0].id_deudor, 36, `Se modifica correo ${vinculo[0].correo} por el correo ${req.body.correo} del vinculo ${req.body.nombre}`, null, null);
      }

      if (vinculo[0].telefono != req.body.telefono) {
        _transaccion.default.generaTransaccion(req.headers.token, vinculo[0].id_deudor, 36, `Se modifica telefono ${vinculo[0].telefono} por el telefono ${req.body.telefono} del vinculo ${req.body.nombre}`, null, null);
      }

      if (vinculo[0].id_tipo_parentesco != req.body.id_tipo_parentesco) {
        _transaccion.default.generaTransaccion(req.headers.token, vinculo[0].id_deudor, 36, `Se modifica tipo parentesco ${vinculo[0].id_tipo_parentesco} por tipo parentesco ${req.body.id_tipo_parentesco} del vinculo ${req.body.nombre}`, null, null);
      }

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
      const vinculo = await this._model.findAll({
        where: {
          id_vinculo: req.params.id
        }
      });
      const seBorro = await this._model.destroy({
        where: {
          id_vinculo: req.params.id
        }
      });

      if (seBorro) {
        res.send({
          Mensaje: "Se borro exitosamente"
        });

        _transaccion.default.generaTransaccion(req.headers.token, vinculo[0].id_deudor, 35, `Se elimina vinculo ${vinculo[0].nombre}`, null, null);
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

var _default = vinculosController;
exports.default = _default;
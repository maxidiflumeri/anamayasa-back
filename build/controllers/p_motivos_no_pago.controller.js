"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _connection = _interopRequireDefault(require("../config/db/connection"));

var _sequelize = require("sequelize");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class p_motivos_no_pagoController {
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
          id_motivo: req.query.id
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

  async obtenerPorIdEmpresa(req, res, next) {
    try {
      const response = await _connection.default.query(`select * from v_motivos_no_pago where id_empresa =${req.query.id_empresa} order by descripcion ASC`, {
        type: _sequelize.QueryTypes.SELECT
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
          id_motivo: req.params.id
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
          id_motivo: req.params.id
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

var _default = p_motivos_no_pagoController;
exports.default = _default;
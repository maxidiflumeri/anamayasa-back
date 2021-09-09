"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseDiscador = _interopRequireDefault(require("../services/baseDiscador"));

var _estadistico = _interopRequireDefault(require("../services/estadistico"));

var _archivoUsoMultiple = _interopRequireDefault(require("../services/archivoUsoMultiple"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class procesosController {
  constructor() {}

  async generaBaseDiscador(req, res, next) {
    try {
      let response = await _baseDiscador.default.generaBase(req.query);

      var file = _fs.default.createReadStream(`./files/bases/emp${response}/contactos.xlsx`);

      var stat = _fs.default.statSync(`./files/bases/emp${response}/contactos.xlsx`);

      res.setHeader('Content-Length', stat.size);
      res.setHeader('Content-Type', 'application/vnd.openxmlformats');
      res.setHeader('Content-Disposition', `attachment; filename=contactos.xlsx`);
      file.pipe(res);
    } catch (error) {
      res.status(500).json({
        mensaje: 'Ocurrio un error'
      });
      next(error);
    }
  }

  async generaEstadistico(req, res, next) {
    try {
      const response = await _estadistico.default.generaEstadistico(req.query);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({
        mensaje: 'Ocurrio un error'
      });
      next(error);
    }
  }

  async generaArchivoUsoMultiple(req, res, next) {
    try {
      let response = await _archivoUsoMultiple.default.generaArchivo(req.query);

      var file = _fs.default.createReadStream(`./files/ArchivoUsoMultiples/emp${response}/${req.query.id_empresa}_${req.query.remesa_desde}_${req.query.remesa_hasta}.xlsx`);

      var stat = _fs.default.statSync(`./files/ArchivoUsoMultiples/emp${response}/${req.query.id_empresa}_${req.query.remesa_desde}_${req.query.remesa_hasta}.xlsx`);

      res.setHeader('Content-Length', stat.size);
      res.setHeader('Content-Type', 'application/vnd.openxmlformats');
      res.setHeader('Content-Disposition', `attachment; filename=${req.query.id_empresa}_${req.query.remesa_desde}_${req.query.remesa_hasta}.xlsx`);
      file.pipe(res);
    } catch (error) {
      res.status(500).json({
        mensaje: 'Ocurrio un error'
      });
      next(error);
    }
  }

}

var _default = procesosController;
exports.default = _default;
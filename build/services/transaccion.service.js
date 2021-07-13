"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../models/index"));

var _token = _interopRequireDefault(require("./token.service"));

var _transaccion = _interopRequireDefault(require("../dtos/transaccion.dto"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  generaTransaccion: async (token, id_deudor, id_tipo_transaccion, detalle, id_llamada, grabacion) => {
    try {
      const usuario = await _token.default.decodificar(token);
      const transaccion = new _transaccion.default(id_tipo_transaccion, usuario.id_usuario, id_deudor, detalle, id_llamada, grabacion);
      await _index.default.transacciones.create(transaccion);
    } catch (error) {
      console.log(error);
    }
  }
};
exports.default = _default;
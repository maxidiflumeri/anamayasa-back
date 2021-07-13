"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class transaccion {
  constructor(id_tipo_transaccion, id_usuario, id_deudor, detalle, id_llamada, grabacion) {
    this.id_tipo_transaccion = id_tipo_transaccion;
    this.id_usuario = id_usuario;
    this.id_deudor = id_deudor;
    this.detalle = detalle;
    this.id_llamada = id_llamada;
    this.grabacion = grabacion;
  }

}

var _default = transaccion;
exports.default = _default;
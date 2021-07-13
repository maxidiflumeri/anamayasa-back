"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class usuario {
  constructor(id_usuario, nombre, correo, dni, cuil, id_rol, legajo_neotel) {
    this.id_usuario = id_usuario;
    this.nombre = nombre;
    this.correo = correo;
    this.dni = dni;
    this.cuil = cuil;
    this.id_rol = id_rol;
    this.legajo_neotel = legajo_neotel;
  }

}

var _default = usuario;
exports.default = _default;
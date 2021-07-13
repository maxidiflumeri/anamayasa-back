"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _index = _interopRequireDefault(require("../models/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function chequearToken(token) {
  let _id = null;

  try {
    const {
      id_usuario
    } = _jsonwebtoken.default.decode(token);

    _id = id_usuario;
  } catch (error) {
    return 1;
  }

  const user = await _index.default.usuarios.findAll({
    where: {
      id_usuario: _id
    }
  });

  if (user[0]) {
    const token = _jsonwebtoken.default.sign({
      id_usuario: user[0].id_usuario,
      rol: user[0].id_rol,
      correo: user[0].correo,
      legajo_neotel: user[0].legajo_neotel
    }, 'claveSecretaToken', {
      expiresIn: '1d'
    });

    return {
      token,
      id_rol: user[0].id_rol
    };
  } else {
    return false;
  }
}

var _default = {
  codificar: async (id_usuario, id_rol, correo, legajo_neotel, nombre) => {
    const token = _jsonwebtoken.default.sign({
      id_usuario: id_usuario,
      rol: id_rol,
      correo: correo,
      legajo_neotel: legajo_neotel,
      nombre: nombre
    }, 'claveSecretaToken', {
      expiresIn: '1d'
    });

    return token;
  },
  decodificar: async token => {
    try {
      const {
        id_usuario
      } = _jsonwebtoken.default.verify(token, 'claveSecretaToken');

      const user = await _index.default.usuarios.findAll({
        where: {
          id_usuario: id_usuario
        }
      });

      if (user) {
        return user[0];
      } else {
        return false;
      }
    } catch (error) {
      const newToken = await chequearToken(token);
      return newToken;
    }
  }
};
exports.default = _default;
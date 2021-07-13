"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tokenService = _interopRequireDefault(require("../services/token.service.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  verificarUsuario: async (req, res, next) => {
    if (!req.headers.token) {
      return res.status(404).send({
        mensaje: 'No Existe el token.'
      });
    }

    const response = await _tokenService.default.decodificar(req.headers.token);

    if (response.id_rol == 0) {
      next();
    } else if (response == 1) {
      res.status(403).send({
        mensaje: 'Token expirado o no valido'
      });
    } else {
      res.status(403).send({
        mensaje: 'Usuario no autorizado.'
      });
    }
  },
  verificarGestor: async (req, res, next) => {
    if (!req.headers.token) {
      return res.status(404).send({
        mensaje: 'No Existe el token.'
      });
    }

    const response = await _tokenService.default.decodificar(req.headers.token);

    if (response.id_rol >= 1) {
      next();
    } else if (response == 1) {
      res.status(403).send({
        mensaje: 'Token expirado o no valido'
      });
    } else {
      res.status(403).send({
        mensaje: 'Usuario no autorizado.'
      });
    }
  },
  verificarReferente: async (req, res, next) => {
    if (!req.headers.token) {
      return res.status(404).send({
        mensaje: 'No Existe el token.'
      });
    }

    const response = await _tokenService.default.decodificar(req.headers.token);

    if (response.id_rol >= 2) {
      next();
    } else if (response == 1) {
      res.status(403).send({
        mensaje: 'Token expirado o no valido'
      });
    } else {
      res.status(403).send({
        mensaje: 'Usuario no autorizado.'
      });
    }
  },
  verificarLider: async (req, res, next) => {
    if (!req.headers.token) {
      return res.status(404).send({
        mensaje: 'No Existe el token.'
      });
    }

    const response = await _tokenService.default.decodificar(req.headers.token);

    if (response.id_rol >= 3) {
      next();
    } else if (response == 1) {
      res.status(403).send({
        mensaje: 'Token expirado o no valido'
      });
    } else {
      res.status(403).send({
        mensaje: 'Usuario no autorizado.'
      });
    }
  },
  verificarGerente: async (req, res, next) => {
    if (!req.headers.token) {
      return res.status(404).send({
        mensaje: 'No Existe el token.'
      });
    }

    const response = await _tokenService.default.decodificar(req.headers.token);

    if (response.id_rol >= 4) {
      next();
    } else if (response == 1) {
      res.status(403).send({
        mensaje: 'Token expirado o no valido'
      });
    } else {
      res.status(403).send({
        mensaje: 'Usuario no autorizado.'
      });
    }
  },
  verificarAdministrador: async (req, res, next) => {
    if (!req.headers.token) {
      return res.status(404).send({
        mensaje: 'No Existe el token.'
      });
    }

    const response = await _tokenService.default.decodificar(req.headers.token);

    if (response.id_rol >= 5) {
      next();
    } else if (response == 1) {
      res.status(403).send({
        mensaje: 'Token expirado o no valido'
      });
    } else {
      res.status(403).send({
        mensaje: 'Usuario no autorizado.'
      });
    }
  }
};
exports.default = _default;
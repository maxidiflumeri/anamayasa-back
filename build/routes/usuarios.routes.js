"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressPromiseRouter = _interopRequireDefault(require("express-promise-router"));

var _index = _interopRequireDefault(require("../models/index.js"));

var _usuarios = _interopRequireDefault(require("../controllers/usuarios.controller"));

var _auth = _interopRequireDefault(require("../middlewares/auth.js"));

var _underscore = _interopRequireDefault(require("underscore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _usuariosController = new _usuarios.default(_index.default.usuarios);

const router = (0, _expressPromiseRouter.default)();
router.get('/consultar', _auth.default.verificarGestor, async (req, res, next) => {
  if (_underscore.default.isEmpty(req.query)) {
    _usuariosController.obtenerTodos(req, res, next);
  } else if (req.query.id) {
    _usuariosController.obtenerPorId(req, res, next);
  } else {
    res.status(404).json({
      mensaje: 'Parametros incorrectos.'
    });
  }
});
router.post('/agregar', async (req, res, next) => {
  _usuariosController.agregar(req, res, next);
});
router.post('/login', async (req, res, next) => {
  _usuariosController.Login(req, res, next);
});
router.put('/modificarPassword/:id_usuario', _auth.default.verificarGestor, async (req, res, next) => {
  _usuariosController.cambiarContraseña(req, res, next);
});
router.put('/modificar/:id', _auth.default.verificarAdministrador, async (req, res, next) => {
  _usuariosController.actualizar(req, res, next);
});
router.delete('/eliminar/:id', async (req, res, next) => {
  _usuariosController.eliminar(req, res, next);
});
var _default = router;
exports.default = _default;
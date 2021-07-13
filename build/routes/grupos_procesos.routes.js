"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressPromiseRouter = _interopRequireDefault(require("express-promise-router"));

var _grupos_procesos = _interopRequireDefault(require("../controllers/grupos_procesos.controller"));

var _index = _interopRequireDefault(require("../models/index.js"));

var _auth = _interopRequireDefault(require("../middlewares/auth.js"));

var _underscore = _interopRequireDefault(require("underscore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _grupos_procesosController = new _grupos_procesos.default(_index.default.grupos_procesos);

const router = (0, _expressPromiseRouter.default)();
router.get('/consultar', _auth.default.verificarGestor, async (req, res, next) => {
  if (_underscore.default.isEmpty(req.query)) {
    _grupos_procesosController.obtenerTodos(req, res, next);
  } else if (req.query.id) {
    _grupos_procesosController.obtenerPorId(req, res, next);
  } else if (req.query.id_rol) {
    _grupos_procesosController.obtenerPorRol(req, res, next);
  } else {
    res.status(404).json({
      mensaje: 'Parametros incorrectos.'
    });
  }
});
router.post('/agregar', _auth.default.verificarAdministrador, async (req, res, next) => {
  _grupos_procesosController.agregar(req, res, next);
});
router.put('/modificar/:id', _auth.default.verificarAdministrador, async (req, res, next) => {
  _grupos_procesosController.actualizar(req, res, next);
});
router.delete('/eliminar/:id', _auth.default.verificarAdministrador, async (req, res, next) => {
  _grupos_procesosController.eliminar(req, res, next);
});
var _default = router;
exports.default = _default;
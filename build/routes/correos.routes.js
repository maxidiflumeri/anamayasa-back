"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressPromiseRouter = _interopRequireDefault(require("express-promise-router"));

var _correos = _interopRequireDefault(require("../controllers/correos.controller"));

var _index = _interopRequireDefault(require("../models/index.js"));

var _auth = _interopRequireDefault(require("../middlewares/auth.js"));

var _underscore = _interopRequireDefault(require("underscore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _correosController = new _correos.default(_index.default.correos);

const router = (0, _expressPromiseRouter.default)();
router.get('/consultar', _auth.default.verificarGestor, async (req, res, next) => {
  if (_underscore.default.isEmpty(req.query)) {
    _correosController.obtenerTodos(req, res, next);
  } else if (req.query.id && req.query.correo) {
    _correosController.obtenerPorId(req, res, next);
  } else if (req.query.id_deudor) {
    _correosController.obtenerPorIdDeudor(req, res, next);
  } else if (req.query.correo) {
    _correosController.obtenerPorCorreo(req, res, next);
  } else {
    res.status(404).json({
      mensaje: 'Parametros incorrectos.'
    });
  }
});
router.post('/agregar', _auth.default.verificarGestor, async (req, res, next) => {
  _correosController.agregar(req, res, next);
});
router.put('/modificar/:id/:correo', _auth.default.verificarGestor, async (req, res, next) => {
  _correosController.actualizar(req, res, next);
});
router.delete('/eliminar/:id/:correo', _auth.default.verificarGestor, async (req, res, next) => {
  _correosController.eliminar(req, res, next);
});
var _default = router;
exports.default = _default;
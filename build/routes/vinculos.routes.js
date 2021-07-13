"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressPromiseRouter = _interopRequireDefault(require("express-promise-router"));

var _index = _interopRequireDefault(require("../models/index.js"));

var _vinculos = _interopRequireDefault(require("../controllers/vinculos.controller"));

var _auth = _interopRequireDefault(require("../middlewares/auth.js"));

var _underscore = _interopRequireDefault(require("underscore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _vinculosController = new _vinculos.default(_index.default.vinculos);

const router = (0, _expressPromiseRouter.default)();
router.get('/consultar', _auth.default.verificarGestor, async (req, res, next) => {
  if (_underscore.default.isEmpty(req.query)) {
    _vinculosController.obtenerTodos(req, res, next);
  } else if (req.query.id) {
    _vinculosController.obtenerPorId(req, res, next);
  } else if (req.query.id_deudor) {
    _vinculosController.obtenerPorIdDeudor(req, res, next);
  } else {
    res.status(404).json({
      mensaje: 'Parametros incorrectos.'
    });
  }
});
router.post('/agregar', _auth.default.verificarGestor, async (req, res, next) => {
  _vinculosController.agregar(req, res, next);
});
router.put('/modificar/:id', _auth.default.verificarGestor, async (req, res, next) => {
  _vinculosController.actualizar(req, res, next);
});
router.delete('/eliminar/:id', _auth.default.verificarGestor, async (req, res, next) => {
  _vinculosController.eliminar(req, res, next);
});
var _default = router;
exports.default = _default;
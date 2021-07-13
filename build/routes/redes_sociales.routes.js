"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressPromiseRouter = _interopRequireDefault(require("express-promise-router"));

var _index = _interopRequireDefault(require("../models/index.js"));

var _redes_sociales = _interopRequireDefault(require("../controllers/redes_sociales.controller"));

var _auth = _interopRequireDefault(require("../middlewares/auth.js"));

var _underscore = _interopRequireDefault(require("underscore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _redes_socialesController = new _redes_sociales.default(_index.default.redes_sociales);

const router = (0, _expressPromiseRouter.default)();
router.get('/consultar', _auth.default.verificarGestor, async (req, res, next) => {
  if (_underscore.default.isEmpty(req.query)) {
    _redes_socialesController.obtenerTodos(req, res, next);
  } else if (req.query.id && req.query.usuario && req.query.id_red_social) {
    _redes_socialesController.obtenerPorId(req, res, next);
  } else if (req.query.id_deudor) {
    _redes_socialesController.obtenerPorIdDeudor(req, res, next);
  } else if (req.query.usuario) {
    _redes_socialesController.obtenerPorUsuarioRed(req, res, next);
  } else {
    res.status(404).json({
      mensaje: 'Parametros incorrectos.'
    });
  }
});
router.post('/agregar', _auth.default.verificarGestor, async (req, res, next) => {
  _redes_socialesController.agregar(req, res, next);
});
router.put('/modificar/:id/:usuario/:id_red_social', _auth.default.verificarGestor, async (req, res, next) => {
  _redes_socialesController.actualizar(req, res, next);
});
router.delete('/eliminar/:id/:usuario/:id_red_social', _auth.default.verificarGestor, async (req, res, next) => {
  _redes_socialesController.eliminar(req, res, next);
});
var _default = router;
exports.default = _default;
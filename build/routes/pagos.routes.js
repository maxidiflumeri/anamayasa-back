"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressPromiseRouter = _interopRequireDefault(require("express-promise-router"));

var _index = _interopRequireDefault(require("../models/index.js"));

var _pagos = _interopRequireDefault(require("../controllers/pagos.controller"));

var _auth = _interopRequireDefault(require("../middlewares/auth.js"));

var _underscore = _interopRequireDefault(require("underscore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _pagosController = new _pagos.default(_index.default.pagos);

const router = (0, _expressPromiseRouter.default)();
router.get('/consultar', _auth.default.verificarGestor, async (req, res, next) => {
  if (_underscore.default.isEmpty(req.query)) {
    _pagosController.obtenerTodos(req, res, next);
  } else if (req.query.id && req.query.nro_comprobante) {
    _pagosController.obtenerPorId(req, res, next);
  } else if (req.query.id_deudor) {
    _pagosController.obtenerPorIdDeudor(req, res, next);
  } else {
    res.status(404).json({
      mensaje: 'Parametros incorrectos.'
    });
  }
});
router.post('/agregar', _auth.default.verificarGestor, async (req, res, next) => {
  _pagosController.agregar(req, res, next);
});
router.put('/modificar/:id/:nro_comprobante', _auth.default.verificarAdministrador, async (req, res, next) => {
  _pagosController.actualizar(req, res, next);
});
router.delete('/eliminar/:id/:nro_comprobante', _auth.default.verificarLider, async (req, res, next) => {
  _pagosController.eliminar(req, res, next);
});
var _default = router;
exports.default = _default;
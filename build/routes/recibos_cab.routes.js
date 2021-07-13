"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressPromiseRouter = _interopRequireDefault(require("express-promise-router"));

var _index = _interopRequireDefault(require("../models/index.js"));

var _recibos_cab = _interopRequireDefault(require("../controllers/recibos_cab.controller"));

var _auth = _interopRequireDefault(require("../middlewares/auth.js"));

var _underscore = _interopRequireDefault(require("underscore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _recibos_cabController = new _recibos_cab.default(_index.default.recibos_cab);

const router = (0, _expressPromiseRouter.default)();
router.get('/consultar', _auth.default.verificarGestor, async (req, res, next) => {
  if (_underscore.default.isEmpty(req.query)) {
    _recibos_cabController.obtenerTodos(req, res, next);
  } else if (req.query.id) {
    _recibos_cabController.obtenerPorId(req, res, next);
  } else if (req.query.id_deudor) {
    _recibos_cabController.obtenerPorIdDeudor(req, res, next);
  } else {
    res.status(404).json({
      mensaje: 'Parametros incorrectos.'
    });
  }
});
router.post('/agregar', _auth.default.verificarReferente, async (req, res, next) => {
  _recibos_cabController.agregar(req, res, next);
});
router.put('/modificar/:id', _auth.default.verificarAdministrador, async (req, res, next) => {
  _recibos_cabController.actualizar(req, res, next);
});
router.delete('/eliminar/:id', _auth.default.verificarLider, async (req, res, next) => {
  _recibos_cabController.eliminar(req, res, next);
});
var _default = router;
exports.default = _default;
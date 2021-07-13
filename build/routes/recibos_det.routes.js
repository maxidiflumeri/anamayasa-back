"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressPromiseRouter = _interopRequireDefault(require("express-promise-router"));

var _index = _interopRequireDefault(require("../models/index"));

var _recibos_det = _interopRequireDefault(require("../controllers/recibos_det.controller"));

var _auth = _interopRequireDefault(require("../middlewares/auth.js"));

var _underscore = _interopRequireDefault(require("underscore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _recibos_detController = new _recibos_det.default(_index.default.recibos_det);

const router = (0, _expressPromiseRouter.default)();
router.get('/consultar', _auth.default.verificarGestor, async (req, res, next) => {
  if (_underscore.default.isEmpty(req.query)) {
    _recibos_detController.obtenerTodos(req, res, next);
  } else if (req.query.id) {
    _recibos_detController.obtenerPorId(req, res, next);
  } else if (req.query.id_recibo_cab) {
    _recibos_detController.obtenerPorIdReciboCab(req, res, next);
  } else {
    res.status(404).json({
      mensaje: 'Parametros incorrectos.'
    });
  }
});
router.post('/agregar', _auth.default.verificarReferente, async (req, res, next) => {
  _recibos_detController.agregar(req, res, next);
});
router.put('/modificar/:id', _auth.default.verificarAdministrador, async (req, res, next) => {
  _recibos_detController.actualizar(req, res, next);
});
router.delete('/eliminar/:id', _auth.default.verificarReferente, async (req, res, next) => {
  _recibos_detController.eliminar(req, res, next);
});
var _default = router;
exports.default = _default;
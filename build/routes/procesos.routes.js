"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressPromiseRouter = _interopRequireDefault(require("express-promise-router"));

var _procesos = _interopRequireDefault(require("../controllers/procesos.controller"));

var _auth = _interopRequireDefault(require("../middlewares/auth.js"));

var _underscore = _interopRequireDefault(require("underscore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _procesosController = new _procesos.default();

const router = (0, _expressPromiseRouter.default)();
router.get('/baseDiscador', async (req, res, next) => {
  if (_underscore.default.isEmpty(req.query)) {
    res.status(404).json({
      mensaje: 'Parametros incorrectos.'
    });
  } else {
    _procesosController.generaBaseDiscador(req, res, next);
  }
});
router.get('/estadistico', _auth.default.verificarGestor, async (req, res, next) => {
  if (_underscore.default.isEmpty(req.query)) {
    res.status(404).json({
      mensaje: 'Parametros incorrectos.'
    });
  } else {
    _procesosController.generaEstadistico(req, res, next);
  }
});
router.get('/archivoUsoMultiples', _auth.default.verificarGestor, async (req, res, next) => {
  if (_underscore.default.isEmpty(req.query)) {
    res.status(404).json({
      mensaje: 'Parametros incorrectos.'
    });
  } else {
    _procesosController.generaArchivoUsoMultiple(req, res, next);
  }
});
var _default = router;
exports.default = _default;
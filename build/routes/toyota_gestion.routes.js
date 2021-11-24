"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressPromiseRouter = _interopRequireDefault(require("express-promise-router"));

var _toyota_gestion = _interopRequireDefault(require("../controllers/toyota_gestion.controller"));

var _index = _interopRequireDefault(require("../models/index.js"));

var _auth = _interopRequireDefault(require("../middlewares/auth.js"));

var _underscore = _interopRequireDefault(require("underscore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _toyota_gestionController = new _toyota_gestion.default(_index.default.toyota_gestion);

const router = (0, _expressPromiseRouter.default)();
router.get('/consultar', _auth.default.verificarGestor, async (req, res, next) => {
  if (_underscore.default.isEmpty(req.query)) {
    _toyota_gestionController.obtenerTodos(req, res, next);
  } else if (req.query.id) {
    _toyota_gestionController.obtenerPorId(req, res, next);
  } else {
    res.status(404).json({
      mensaje: 'Parametros incorrectos.'
    });
  }
});
router.post('/agregar', _auth.default.verificarGestor, async (req, res, next) => {
  _toyota_gestionController.agregar(req, res, next);
});
router.put('/modificar/:id', _auth.default.verificarGestor, async (req, res, next) => {
  _toyota_gestionController.actualizar(req, res, next);
});
router.delete('/eliminar/:id', _auth.default.verificarGestor, async (req, res, next) => {
  _toyota_gestionController.eliminar(req, res, next);
});
var _default = router;
exports.default = _default;
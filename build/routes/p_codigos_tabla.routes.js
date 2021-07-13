"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressPromiseRouter = _interopRequireDefault(require("express-promise-router"));

var _p_codigos_tabla = _interopRequireDefault(require("../controllers/p_codigos_tabla.controller"));

var _index = _interopRequireDefault(require("../models/index.js"));

var _auth = _interopRequireDefault(require("../middlewares/auth.js"));

var _underscore = _interopRequireDefault(require("underscore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _p_codigos_tablaController = new _p_codigos_tabla.default(_index.default.p_codigos_tabla);

const router = (0, _expressPromiseRouter.default)();
router.get('/consultar', _auth.default.verificarGestor, async (req, res, next) => {
  if (_underscore.default.isEmpty(req.query)) {
    _p_codigos_tablaController.obtenerTodos(req, res, next);
  } else if (req.query.id) {
    _p_codigos_tablaController.obtenerPorId(req, res, next);
  } else {
    res.status(404).json({
      mensaje: 'Parametros incorrectos.'
    });
  }
});
router.post('/agregar', _auth.default.verificarAdministrador, async (req, res, next) => {
  _p_codigos_tablaController.agregar(req, res, next);
});
router.put('/modificar/:id', _auth.default.verificarAdministrador, async (req, res, next) => {
  _p_codigos_tablaController.actualizar(req, res, next);
});
router.delete('/eliminar/:id', _auth.default.verificarAdministrador, async (req, res, next) => {
  _p_codigos_tablaController.eliminar(req, res, next);
});
var _default = router;
exports.default = _default;
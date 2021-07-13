"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressPromiseRouter = _interopRequireDefault(require("express-promise-router"));

var _index = _interopRequireDefault(require("../models/index.js"));

var _telefonos_borrados = _interopRequireDefault(require("../controllers/telefonos_borrados.controller"));

var _auth = _interopRequireDefault(require("../middlewares/auth.js"));

var _underscore = _interopRequireDefault(require("underscore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _telefonos_borradosController = new _telefonos_borrados.default(_index.default.telefonos_borrados);

const router = (0, _expressPromiseRouter.default)();
router.get('/consultar', _auth.default.verificarGestor, async (req, res, next) => {
  if (_underscore.default.isEmpty(req.query)) {
    _telefonos_borradosController.obtenerTodos(req, res, next);
  } else if (req.query.id) {
    _telefonos_borradosController.obtenerPorId(req, res, next);
  } else {
    res.status(404).json({
      mensaje: 'Parametros incorrectos.'
    });
  }
});
router.post('/agregar', _auth.default.verificarGestor, async (req, res, next) => {
  _telefonos_borradosController.agregar(req, res, next);
});
router.put('/modificar/:nro_doc/:telefono', _auth.default.verificarAdministrador, async (req, res, next) => {
  _telefonos_borradosController.actualizar(req, res, next);
});
router.delete('/eliminar/:nro_doc/:telefono', _auth.default.verificarAdministrador, async (req, res, next) => {
  _telefonos_borradosController.eliminar(req, res, next);
});
var _default = router;
exports.default = _default;
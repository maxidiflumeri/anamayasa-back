"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressPromiseRouter = _interopRequireDefault(require("express-promise-router"));

var _index = _interopRequireDefault(require("../models/index.js"));

var _telefonos = _interopRequireDefault(require("../controllers/telefonos.controller"));

var _auth = _interopRequireDefault(require("../middlewares/auth.js"));

var _underscore = _interopRequireDefault(require("underscore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _telefonosController = new _telefonos.default(_index.default.telefonos);

const router = (0, _expressPromiseRouter.default)();
router.get('/consultar', _auth.default.verificarGestor, async (req, res, next) => {
  if (_underscore.default.isEmpty(req.query)) {
    _telefonosController.obtenerTodos(req, res, next);
  } else if (req.query.id) {
    _telefonosController.obtenerPorId(req, res, next);
  } else if (req.query.id_deudor) {
    _telefonosController.obtenerPorIdDeudor(req, res, next);
  } else if (req.query.telefono) {
    _telefonosController.obtenerPorNro(req, res, next);
  } else {
    res.status(404).json({
      mensaje: 'Parametros incorrectos.'
    });
  }
});
router.post('/agregar', _auth.default.verificarGestor, async (req, res, next) => {
  _telefonosController.agregar(req, res, next);
});
router.put('/modificar/:id/:telefono', _auth.default.verificarGestor, async (req, res, next) => {
  _telefonosController.actualizar(req, res, next);
});
router.delete('/eliminar/:id/:telefono', _auth.default.verificarGestor, async (req, res, next) => {
  _telefonosController.eliminar(req, res, next);
});
var _default = router;
exports.default = _default;
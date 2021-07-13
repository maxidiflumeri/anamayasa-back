"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressPromiseRouter = _interopRequireDefault(require("express-promise-router"));

var _items_procesos = _interopRequireDefault(require("../controllers/items_procesos.controller"));

var _index = _interopRequireDefault(require("../models/index.js"));

var _auth = _interopRequireDefault(require("../middlewares/auth.js"));

var _underscore = _interopRequireDefault(require("underscore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _items_procesosController = new _items_procesos.default(_index.default.items_procesos);

const router = (0, _expressPromiseRouter.default)();
router.get('/consultar', _auth.default.verificarGestor, async (req, res, next) => {
  if (_underscore.default.isEmpty(req.query)) {
    _items_procesosController.obtenerTodos(req, res, next);
  } else if (req.query.id) {
    _items_procesosController.obtenerPorId(req, res, next);
  } else if (req.query.id_grupo && req.query.id_rol) {
    _items_procesosController.obtenerPorGrupoyRol(req, res, next);
  } else {
    res.status(404).json({
      mensaje: 'Parametros incorrectos.'
    });
  }
});
router.post('/agregar', _auth.default.verificarAdministrador, async (req, res, next) => {
  _items_trabajoController.agregar(req, res, next);
});
router.put('/modificar/:id', _auth.default.verificarAdministrador, async (req, res, next) => {
  _items_trabajoController.actualizar(req, res, next);
});
router.delete('/eliminar/:id', _auth.default.verificarAdministrador, async (req, res, next) => {
  _items_trabajoController.eliminar(req, res, next);
});
var _default = router;
exports.default = _default;
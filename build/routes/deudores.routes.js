"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressPromiseRouter = _interopRequireDefault(require("express-promise-router"));

var _deudores = _interopRequireDefault(require("../controllers/deudores.controller"));

var _index = _interopRequireDefault(require("../models/index.js"));

var _auth = _interopRequireDefault(require("../middlewares/auth.js"));

var _underscore = _interopRequireDefault(require("underscore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _deudoresController = new _deudores.default(_index.default.deudores);

const router = (0, _expressPromiseRouter.default)();
router.get('/consultar', _auth.default.verificarGestor, async (req, res, next) => {
  if (_underscore.default.isEmpty(req.query)) {
    _deudoresController.obtenerTodos(req, res, next);
  } else if (req.query.primer_deudor) {
    _deudoresController.obtenerPrimerDeudor(req, res, next);
  } else if (req.query.id) {
    _deudoresController.obtenerPorId(req, res, next);
  } else if (req.query.id_empresa && req.query.id_deudor) {
    _deudoresController.obtenerPorIdyEmpresa(req, res, next);
  } else if (req.query.id_empresa && req.query.nro_documento) {
    _deudoresController.obtenerPorEmpresayDocumento(req, res, next);
  } else if (req.query.id_empresa && req.query.nombre) {
    _deudoresController.obtenerPorEmpresayNombre(req, res, next);
  } else if (req.query.id_empresa && req.query.nro_cliente) {
    _deudoresController.obtenerPorEmpresayCliente(req, res, next);
  } else if (req.query.nro_documento) {
    _deudoresController.obtenerPorDocumento(req, res, next);
  } else if (req.query.nombre) {
    _deudoresController.obtenerPorNombre(req, res, next);
  } else if (req.query.nro_cliente) {
    _deudoresController.obtenerPorCliente(req, res, next);
  } else {
    res.status(404).json({
      mensaje: 'Parametros incorrectos.'
    });
  }
});
router.get('/actualizaDeuda', _auth.default.verificarGestor, async (req, res, next) => {
  if (req.query.monto && req.query.id_tipo_actualizacion && req.query.fecha && req.query.id_iva && req.query.id_empresa && req.query.id_deudor) {
    _deudoresController.actualizaDeuda(req, res, next);
  } else {
    res.status(404).json({
      mensaje: 'Parametros incorrectos.'
    });
  }
});
router.post('/agregar', _auth.default.verificarAdministrador, async (req, res, next) => {
  _deudoresController.agregar(req, res, next);
});
router.put('/modificar/:id', _auth.default.verificarGestor, async (req, res, next) => {
  _deudoresController.actualizar(req, res, next);
});
router.delete('/eliminar/:id', _auth.default.verificarAdministrador, async (req, res, next) => {
  _deudoresController.eliminar(req, res, next);
});
var _default = router;
exports.default = _default;
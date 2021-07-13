"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressPromiseRouter = _interopRequireDefault(require("express-promise-router"));

var _envio_mail = _interopRequireDefault(require("../controllers/envio_mail.controller"));

var _auth = _interopRequireDefault(require("../middlewares/auth.js"));

var _multer = _interopRequireDefault(require("../middlewares/multer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _expressPromiseRouter.default)();

const _envioMailController = new _envio_mail.default();

router.post('/envioMail', [_auth.default.verificarGestor, _multer.default.upload.array('adjuntos', 10)], async (req, res, next) => {
  _envioMailController.enviarMail(req, res, next);
});
var _default = router;
exports.default = _default;
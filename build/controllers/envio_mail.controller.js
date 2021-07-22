"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _envioMail = _interopRequireDefault(require("../services/envioMail.service"));

var _index = _interopRequireDefault(require("../models/index.js"));

var _fs = _interopRequireDefault(require("fs"));

var _textversionjs = _interopRequireDefault(require("textversionjs"));

var _transaccion = _interopRequireDefault(require("../services/transaccion.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class envioMailController {
  constructor() {}

  async enviarMail(req, res, next) {
    try {
      let politica = await _index.default.politicas.findAll({
        where: {
          id_politica: req.body.id_politica
        }
      });
      let remitente = politica[0].correo;
      let password = politica[0].password;
      let resultado = await _envioMail.default.enviarMail(remitente, password, req.body.destinatario, req.body.asunto, req.body.texto, req.files ? req.files : null);

      if (resultado.codigo == 200) {
        const textoStr = (0, _textversionjs.default)(req.body.texto);
        const detalle = `Se envía Mail: Para ${req.body.destinatario}\nAsunto: ${req.body.asunto}\nAdjunto: ${req.file ? req.file.originalname : null}\nTexo: ${textoStr}`;

        _transaccion.default.generaTransaccion(req.headers.token, req.body.id_deudor, 40, detalle, null, null);

        if (req.files) {
          req.files.forEach(archivo => {
            _fs.default.unlinkSync(archivo.path);
          });
        }

        res.status(200).json(resultado);
      } else {
        res.status(500).json(resultado);
      }
    } catch (error) {
      res.status(500).json({
        mensaje: 'Ocurrio un error'
      });
      next(error);
    }
  }

  async enviarPdfPorMail(req, res, next) {
    try {
      var buf = Buffer.from(req.body.fileBase64, 'base64');
      let filePath = `./upload/cupón_${req.body.deudor}.pdf`;

      _fs.default.writeFile(filePath, buf, error => {
        if (error) {
          res.status(500).json({
            mensaje: error.message
          });
          next(error);
        }
      });

      let adjunto = [{
        filename: `cupón_${req.body.deudor}.pdf`,
        path: filePath
      }];
      let politica = await _index.default.politicas.findAll({
        where: {
          id_politica: req.body.id_politica
        }
      });
      let remitente = politica[0].correo;
      let password = politica[0].password;
      let resultado = await _envioMail.default.enviarMail(remitente, password, req.body.destinatario, 'Envio cupon', 'se envia cupon', adjunto);

      if (resultado.codigo == 200) {
        //const textoStr = textVersion(req.body.texto)
        //const detalle = `Se envía Mail: Para ${req.body.destinatario}\nAsunto: ${req.body.asunto}\nAdjunto: ${req.file ? req.file.originalname : null}\nTexo: ${textoStr}`
        //serviceTransaccion.generaTransaccion(req.headers.token, req.body.id_deudor, 40, detalle, null, null)
        _fs.default.unlinkSync(filePath);

        res.status(200).json(resultado);
      } else {
        res.status(500).json(resultado);
      }
    } catch (error) {
      res.status(500).json({
        mensaje: 'Ocurrio un error'
      });
      next(error);
    }
  }

}

var _default = envioMailController;
exports.default = _default;
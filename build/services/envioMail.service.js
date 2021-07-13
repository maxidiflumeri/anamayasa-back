"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function objAdjuntos(adjuntos) {
  let adjuntosReturn = [];
  adjuntos.forEach(adjunto => {
    let obj = {
      filename: adjunto.filename,
      path: adjunto.path
    };
    adjuntosReturn.push(obj);
  });
  return adjuntosReturn;
}

var _default = {
  enviarMail: async (remitente, password, destinatario, asunto, body, adjuntos) => {
    return new Promise((resolve, reject) => {
      var transporter = _nodemailer.default.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: remitente,
          pass: password
        }
      });

      if (adjuntos) {
        let attachments = objAdjuntos(adjuntos);
        var mailOptions = {
          from: remitente,
          to: destinatario,
          subject: asunto,
          html: body,
          attachments: attachments
        };
      } else {
        var mailOptions = {
          from: remitente,
          to: destinatario,
          subject: asunto,
          html: body
        };
      }

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          resolve({
            codigo: 400,
            mensaje: error
          });
        } else {
          resolve({
            codigo: 200,
            mensaje: info
          });
        }
      });
    });
  }
};
exports.default = _default;
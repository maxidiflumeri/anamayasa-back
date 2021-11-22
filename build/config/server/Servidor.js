"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _compression = _interopRequireDefault(require("compression"));

var _helmet = _interopRequireDefault(require("helmet"));

var _index = _interopRequireDefault(require("../../routes/index"));

var _constantes = _interopRequireDefault(require("../shared/constantes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//cors sirve para permitir interacción entre apis de diferente dominio
//morgan sirve para recibir por consola el detalle de los require que hacen a mis Apis.
//compression sirve para comprimir solicitudes http
//Helmet ayuda a proteger la aplicación de algunas vulnerabilidades web conocidas mediante el establecimiento correcto de cabeceras HTTP.
//import connect from 'connect-history-api-fallback'
class Servidor {
  crearServidor() {
    const app = (0, _express.default)();
    app.use(_express.default.json({
      limit: '50mb'
    }));
    app.use(_express.default.urlencoded({
      limit: '50mb',
      extended: true
    })); //        app.use(connect())    

    app.use((0, _compression.default)());
    app.use((0, _helmet.default)());
    app.use((0, _cors.default)());
    _constantes.default.NODE_ENV == 'test' ? null : app.use((0, _morgan.default)('dev'));
    app.use('/api', _index.default);
    app.set('port', _constantes.default.PORT || 3000);
    return app;
  }

}

var _default = Servidor;
exports.default = _default;
"use strict";

require("colors");

var _connection = _interopRequireDefault(require("./config/db/connection"));

var _Servidor = _interopRequireDefault(require("./config/server/Servidor"));

var _cron = _interopRequireDefault(require("./services/cron.service"));

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import libreria para cambiar colores en la consola
_moment.default.tz.setDefault('UTC');

const server = new _Servidor.default();
const app = server.crearServidor();

_cron.default.generarTareas(); //app.use(express.static(path.join(__dirname, 'public')))


app.listen(app.get('port'), async () => {
  console.log('servidor escuchando en puerto ' + app.get('port'));

  try {
    await _connection.default.authenticate();
    console.log('Nos hemos conectado a la base de datos exitosamente'.bgGreen.black);
  } catch (error) {
    console.log('Error al conectar a la base de datos'.bgRed.white);
  }
});
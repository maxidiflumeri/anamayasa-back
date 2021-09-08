"use strict";

require("colors");

var _connection = _interopRequireDefault(require("./config/db/connection"));

var _Servidor = _interopRequireDefault(require("./config/server/Servidor"));

var _cron = _interopRequireDefault(require("./services/cron.service"));

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import libreria para cambiar colores en la consola
// import baseDiscador from './services/baseDiscador'
// console.log(baseDiscador.generaBase(41, 1, 221, 1, 999999, 20000, 30000, 44, 44, 0, 0, 0, 0, 21000, 29000, 0, 0, null, null, null, null, null, null, null, null, null, null, null, null, 
//     null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 'Mora1', 'Mora3', 'Mora2', 'Mora2', 'Masculino', 'Masculino', '', ''))
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
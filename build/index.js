"use strict";

require("colors");

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _connection = _interopRequireDefault(require("./config/db/connection"));

var _Servidor = _interopRequireDefault(require("./config/server/Servidor"));

var _cron = _interopRequireDefault(require("./services/cron.service"));

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import libreria para cambiar colores en la consola
// importa servidor express
//dependencia que me permite ver el path donde se encuentra el proyecto
_moment.default.tz.setDefault('UTC');

const server = new _Servidor.default();
const app = server.crearServidor();

_cron.default.generarTareas(); //app.use(express.static(path.join(__dirname, 'public')))
// https.createServer({
//   key: fs.readFileSync('my_cert.key'),
//   cert: fs.readFileSync('my_cert.crt')
// }, app).listen(app.get('port'), async () => {
//   console.log('servidor escuchando en puerto ' + app.get('port'))
//   try {
//     await connection.authenticate()
//     console.log('Nos hemos conectado a la base de datos exitosamente'.bgGreen.black)
//   } catch (error) {
//     console.log('Error al conectar a la base de datos'.bgRed.white)
//   }
// });


app.listen(app.get('port'), async () => {
  console.log('servidor escuchando en puerto ' + app.get('port'));

  try {
    await _connection.default.authenticate();
    console.log('Nos hemos conectado a la base de datos exitosamente'.bgGreen.black);
  } catch (error) {
    console.log('Error al conectar a la base de datos'.bgRed.white);
  }
});
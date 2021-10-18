"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nodeCron = _interopRequireDefault(require("node-cron"));

var _index = _interopRequireDefault(require("../models/index"));

var _envioMail = _interopRequireDefault(require("../services/envioMail.service"));

var _axios = _interopRequireDefault(require("axios"));

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function generarTareas() {
  try {
    _nodeCron.default.schedule('30 23 * * *', () => {
      let arrayTareas = _nodeCron.default.getTasks();

      arrayTareas.forEach(tarea => {
        tarea.stop();
      });
      generoTareas();
    });
  } catch (error) {
    console.log(error);
  }
}

async function generoTareas() {
  let tareas = await _index.default.tareas.findAll();
  tareas.forEach(async tarea => {
    try {
      _nodeCron.default.schedule(tarea.patron, async () => {
        if (tarea.activa == 1) {
          if (tarea.proceso == 'API') {
            try {
              let horario = _moment.default.tz((0, _moment.default)(), 'America/Buenos_Aires').format('DD/MM/YYYY HH:mm');

              await _axios.default.get(tarea.accion);
              await _envioMail.default.enviarMail('maximd@anamayasa.com.ar', 'Diflu2020', tarea.destinatario1, tarea.asunto, `${tarea.cuerpo}. Horario de la acción: ${horario}`, null);
            } catch (error) {
              await _envioMail.default.enviarMail('maximd@anamayasa.com.ar', 'Diflu2020', tarea.destinatario1, 'ERROR AL EJECUTAR LA TAREA', error.message, null);
            }
          } else {
            await _envioMail.default.enviarMail('maximd@anamayasa.com.ar', 'Diflu2020', tarea.destinatario1, tarea.asunto, tarea.cuerpo, null);
          }
        }
      });
    } catch (error) {
      console.log("errorrrrrr");
      console.log(error);
    }
  });
}

var _default = {
  generarTareas
};
exports.default = _default;
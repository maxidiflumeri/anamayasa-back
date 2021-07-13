"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nodeCron = _interopRequireDefault(require("node-cron"));

var _index = _interopRequireDefault(require("../models/index"));

var _envioMail = _interopRequireDefault(require("../services/envioMail.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function generarTareas() {
  try {
    let tareas = await _index.default.tareas.findAll();

    _nodeCron.default.schedule('53 11 * * *', () => {
      let arrayTareas = _nodeCron.default.getTasks();

      arrayTareas.forEach(tarea => {
        tarea.stop();
      });
      generoTareas(tareas);
    });
  } catch (error) {
    console.log(error);
  }
}

function generoTareas(tareas) {
  console.log('entro a la funcion generar y recibo las tareas');
  tareas.forEach(tarea => {
    try {
      console.log('genero tarea ' + tarea.id_tarea);

      _nodeCron.default.schedule(tarea.patron, async () => {
        let resultado = await _envioMail.default.enviarMail('maximd@anamayasa.com.ar', 'Diflu2020', tarea.destinatario1, tarea.asunto, tarea.cuerpo, null);
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
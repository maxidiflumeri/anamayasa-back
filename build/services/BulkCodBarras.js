"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _convertExcelToJson = _interopRequireDefault(require("convert-excel-to-json"));

var _index = _interopRequireDefault(require("../models/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  importExcelToJson: async () => {
    const resultado = (0, _convertExcelToJson.default)({
      sourceFile: './upload/codigos_barra.xlsx',
      header: {
        rows: 1
      },
      columnToKey: {
        'A': '{{A1}}',
        'B': '{{B1}}',
        'C': '{{C1}}',
        'D': '{{D1}}',
        'E': '{{E1}}',
        'F': '{{F1}}',
        'G': '{{G1}}',
        'H': '{{H1}}',
        'I': '{{I1}}',
        'J': '{{J1}}'
      },
      sheets: ['codigos_barra']
    });
    let arrayCodigos = resultado.codigos_barra;
    console.log(arrayCodigos.length); //console.log(arrayCorreos)

    let init = 0;
    let fin = 15000;

    for (let i = 0; i < 3; i++) {
      let pepe = arrayCodigos.slice(init, fin);
      console.log('pasada: ' + i);

      try {
        console.log("empieza el Bulk insert");
        await _index.default.codigos_barra.bulkCreate(pepe, {
          validate: false,
          logging: false
        });
        console.log("termino ok");
      } catch (error) {
        console.log(error.message);
      }

      init = init + 15000;
      fin = fin + 15000;
    }
  }
};
exports.default = _default;
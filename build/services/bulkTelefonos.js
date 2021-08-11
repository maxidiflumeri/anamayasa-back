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
      sourceFile: './upload/telefonos.xlsx',
      header: {
        rows: 1
      },
      columnToKey: {
        'A': '{{A1}}',
        'B': '{{B1}}',
        'C': '{{C1}}',
        'D': '{{D1}}'
      },
      sheets: ['telefonos']
    });
    let arrayTelefonos = resultado.telefonos; // let init = 0
    // let fin = 15000
    // let corte = parseInt(arrayTelefonos.length / fin)+1
    // console.log(corte)
    // for(let i = 0; i < corte; i++){
    //     let pepe = arrayTelefonos.slice(init,fin)
    //     console.log(pepe.length)  
    //     console.log('pasada: ' + i)
    //     try {
    //         console.log("empieza el bulk insert")
    //         await models.telefonos.bulkCreate(pepe,{validate: false, logging: false})
    //         console.log("termino ok")
    //     } catch (error) {
    //         console.log(error.message)
    //     }
    //     init = init + 15000
    //     fin = fin + 15000
    // }

    for (var i = 0; i < arrayTelefonos.length; i++) {
      var telefono = arrayTelefonos[i];

      try {
        await _index.default.telefonos.create(telefono);
        console.log('se agrego el registro: ' + i);
      } catch (error) {
        console.log('error en registro: ' + i);
      }
    }
  }
};
exports.default = _default;
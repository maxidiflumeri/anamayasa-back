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
      sourceFile: './upload/facturas.xlsx',
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
        'J': '{{J1}}',
        'K': '{{K1}}',
        'L': '{{L1}}',
        'M': '{{M1}}',
        'N': '{{N1}}',
        'O': '{{O1}}',
        'P': '{{P1}}',
        'Q': '{{Q1}}',
        'R': '{{R1}}',
        'S': '{{S1}}',
        'T': '{{T1}}',
        'U': '{{U1}}',
        'V': '{{V1}}',
        'W': '{{W1}}',
        'X': '{{X1}}',
        'Y': '{{Y1}}',
        'Z': '{{Z1}}',
        'AA': '{{AA1}}',
        'AB': '{{AB1}}'
      },
      sheets: ['facturas']
    });
    let arrayFacturas = resultado.facturas;
    console.log(arrayFacturas.length);

    for (var i = 0; i < arrayFacturas.length; i++) {
      var factura = arrayFacturas[i];

      if (factura.fecha_comprobante == '/  /') {
        factura.fecha_comprobante = null;
      }

      if (factura.fecha_vencimiento == '/  /') {
        factura.fecha_vencimiento = null;
      }

      if (factura.aux1) {
        factura.aux1 = factura.aux1.toString();
      }

      if (factura.aux2) {
        factura.aux2 = factura.aux2.toString();
      }

      if (factura.aux3) {
        factura.aux3 = factura.aux3.toString();
      }

      if (factura.aux4) {
        factura.aux4 = factura.aux4.toString();
      }

      if (factura.aux5) {
        factura.aux5 = factura.aux5.toString();
      }

      if (factura.aux6) {
        factura.aux6 = factura.aux6.toString();
      }

      if (factura.aux7) {
        factura.aux7 = factura.aux7.toString();
      }

      if (factura.aux8) {
        factura.aux8 = factura.aux8.toString();
      }

      if (factura.aux9) {
        factura.aux9 = factura.aux9.toString();
      }

      if (factura.aux10) {
        factura.aux10 = factura.aux10.toString();
      }

      if (factura.aux11) {
        factura.aux11 = factura.aux11.toString();
      }

      if (factura.aux12) {
        factura.aux12 = factura.aux12.toString();
      }

      if (factura.aux13) {
        factura.aux13 = factura.aux13.toString();
      }

      if (factura.aux14) {
        factura.aux14 = factura.aux14.toString();
      }

      if (factura.aux15) {
        factura.aux15 = factura.aux15.toString();
      }
    }

    let init = 0;
    let fin = 15000;
    let corte = parseInt(arrayFacturas.length / fin) + 1;
    console.log(corte);

    for (let i = 0; i < corte; i++) {
      let pepe = arrayFacturas.slice(init, fin);
      console.log(pepe.length);
      console.log('pasada: ' + i);

      try {
        console.log("empieza el bulk insert");
        await _index.default.facturas.bulkCreate(pepe, {
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
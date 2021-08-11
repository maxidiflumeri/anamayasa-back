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
      sourceFile: './upload/deudores.xlsx',
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
        'AB': '{{AB1}}',
        'AC': '{{AC1}}',
        'AD': '{{AD1}}',
        'AE': '{{EA1}}',
        'AF': '{{AF1}}',
        'AG': '{{AG1}}',
        'AH': '{{AH1}}',
        'AI': '{{AI1}}',
        'AJ': '{{AJ1}}',
        'AK': '{{AK1}}',
        'AL': '{{AL1}}',
        'AM': '{{AM1}}',
        'AN': '{{AN1}}',
        'AO': '{{AO1}}',
        'AP': '{{AP1}}',
        'AQ': '{{AQ1}}',
        'AR': '{{AR1}}',
        'AS': '{{AS1}}',
        'AT': '{{AT1}}',
        'AU': '{{AU1}}',
        'AV': '{{AV1}}',
        'AW': '{{AW1}}',
        'AX': '{{AX1}}',
        'AY': '{{AY1}}',
        'AZ': '{{AZ1}}',
        'BA': '{{BA1}}',
        'BB': '{{BB1}}',
        'BC': '{{BC1}}',
        'BD': '{{BD1}}',
        'BE': '{{BE1}}',
        'BF': '{{BF1}}',
        'BG': '{{BG1}}',
        'BH': '{{BH1}}',
        'BI': '{{BI1}}',
        'BJ': '{{BJ1}}',
        'BK': '{{BK1}}',
        'BL': '{{BL1}}',
        'BM': '{{BM1}}',
        'BN': '{{BN1}}',
        'BO': '{{BO1}}',
        'BP': '{{BP1}}',
        'BQ': '{{BQ1}}',
        'BR': '{{BR1}}',
        'BS': '{{BS1}}',
        'BT': '{{BT1}}',
        'BU': '{{BU1}}',
        'BV': '{{BV1}}',
        'BW': '{{BW1}}',
        'BX': '{{BX1}}',
        'BY': '{{BY1}}',
        'BZ': '{{BZ1}}',
        'CA': '{{CA1}}',
        'CB': '{{CB1}}',
        'CC': '{{CC1}}'
      },
      sheets: ['deudores']
    });
    let arrayDeudores = resultado.deudores;
    console.log(arrayDeudores.length);
    let registro = 0;

    for (var i = 40000; i < arrayDeudores.length; i++) {
      var deudor = arrayDeudores[i];

      if (deudor.fecha_alta == '/  /') {
        deudor.fecha_alta = null;
      }

      if (deudor.fecha_mora == '/  /') {
        deudor.fecha_mora = null;
      }

      if (deudor.fecha_cierre == '/  /') {
        deudor.fecha_cierre = null;
      }

      if (deudor.fecha_baja == '/  /') {
        deudor.fecha_baja = null;
      }

      if (deudor.fecha_recepcion == '/  /') {
        deudor.fecha_recepcion = null;
      }

      if (deudor.fecha_agenda == '/  /') {
        deudor.fecha_agenda = null;
      }

      deudor.fecha_cambio_sit = null;
      deudor.fecha_cambio_gest = null;

      if (deudor.nro_doc) {
        deudor.nro_doc = deudor.nro_doc.toString();
      }

      if (deudor.nro_cliente1) {
        deudor.nro_cliente1 = deudor.nro_cliente1.toString();
      }

      if (deudor.nro_cliente2) {
        deudor.nro_cliente2 = deudor.nro_cliente2.toString();
      }

      if (deudor.nro_cliente3) {
        deudor.nro_cliente3 = deudor.nro_cliente3.toString();
      }

      if (deudor.aux1) {
        deudor.aux1 = deudor.aux1.toString();
      }

      if (deudor.aux2) {
        deudor.aux2 = deudor.aux2.toString();
      }

      if (deudor.aux3) {
        deudor.aux3 = deudor.aux3.toString();
      }

      if (deudor.aux4) {
        deudor.aux4 = deudor.aux4.toString();
      }

      if (deudor.aux5) {
        deudor.aux5 = deudor.aux5.toString();
      }

      if (deudor.aux6) {
        deudor.aux6 = deudor.aux6.toString();
      }

      if (deudor.aux7) {
        deudor.aux7 = deudor.aux7.toString();
      }

      if (deudor.aux8) {
        deudor.aux8 = deudor.aux8.toString();
      }

      if (deudor.aux9) {
        deudor.aux9 = deudor.aux9.toString();
      }

      if (deudor.aux10) {
        deudor.aux10 = deudor.aux10.toString();
      }

      if (deudor.aux11) {
        deudor.aux11 = deudor.aux11.toString();
      }

      if (deudor.aux12) {
        deudor.aux12 = deudor.aux12.toString();
      }

      if (deudor.aux13) {
        deudor.aux13 = deudor.aux13.toString();
      }

      if (deudor.aux14) {
        deudor.aux14 = deudor.aux14.toString();
      }

      if (deudor.aux15) {
        deudor.aux15 = deudor.aux15.toString();
      }

      if (deudor.aux16) {
        deudor.aux16 = deudor.aux16.toString();
      }

      if (deudor.aux17) {
        deudor.aux17 = deudor.aux17.toString();
      }

      if (deudor.aux18) {
        deudor.aux18 = deudor.aux18.toString();
      }

      if (deudor.aux19) {
        deudor.aux19 = deudor.aux19.toString();
      }

      if (deudor.aux20) {
        deudor.aux20 = deudor.aux20.toString();
      }

      if (deudor.aux21) {
        deudor.aux21 = deudor.aux21.toString();
      }

      if (deudor.aux22) {
        deudor.aux22 = deudor.aux22.toString();
      }

      if (deudor.aux23) {
        deudor.aux23 = deudor.aux23.toString();
      }

      if (deudor.aux24) {
        deudor.aux24 = deudor.aux24.toString();
      }

      if (deudor.aux25) {
        deudor.aux25 = deudor.aux25.toString();
      }

      if (deudor.aux26) {
        deudor.aux26 = deudor.aux26.toString();
      }

      if (deudor.aux27) {
        deudor.aux27 = deudor.aux27.toString();
      }

      if (deudor.aux28) {
        deudor.aux28 = deudor.aux28.toString();
      }

      if (deudor.aux29) {
        deudor.aux29 = deudor.aux29.toString();
      }

      if (deudor.aux30) {
        deudor.aux30 = deudor.aux30.toString();
      }

      if (deudor.aux31) {
        deudor.aux31 = deudor.aux31.toString();
      }

      if (deudor.aux31) {
        deudor.aux31 = deudor.aux31.toString();
      }

      if (deudor.aux32) {
        deudor.aux32 = deudor.aux32.toString();
      }

      if (deudor.aux33) {
        deudor.aux33 = deudor.aux33.toString();
      }

      if (deudor.aux34) {
        deudor.aux34 = deudor.aux34.toString();
      }

      if (deudor.aux35) {
        deudor.aux35 = deudor.aux35.toString();
      }

      if (deudor.aux36) {
        deudor.aux36 = deudor.aux36.toString();
      }

      if (deudor.aux37) {
        deudor.aux37 = deudor.aux37.toString();
      }

      if (deudor.aux38) {
        deudor.aux38 = deudor.aux38.toString();
      }

      if (deudor.aux39) {
        deudor.aux39 = deudor.aux39.toString();
      }

      if (deudor.aux40) {
        deudor.aux40 = deudor.aux40.toString();
      }

      if (deudor.aux41) {
        deudor.aux41 = deudor.aux41.toString();
      }

      if (deudor.aux42) {
        deudor.aux42 = deudor.aux42.toString();
      }

      if (deudor.aux43) {
        deudor.aux43 = deudor.aux43.toString();
      }

      if (deudor.aux44) {
        deudor.aux44 = deudor.aux44.toString();
      }

      if (deudor.aux45) {
        deudor.aux45 = deudor.aux45.toString();
      }

      if (deudor.aux46) {
        deudor.aux46 = deudor.aux46.toString();
      }

      if (deudor.aux47) {
        deudor.aux47 = deudor.aux47.toString();
      }

      if (deudor.aux48) {
        deudor.aux48 = deudor.aux48.toString();
      }

      if (deudor.aux49) {
        deudor.aux49 = deudor.aux49.toString();
      }

      if (deudor.aux50) {
        deudor.aux50 = deudor.aux50.toString();
      }

      try {
        await _index.default.deudores.create(deudor);
        console.log('se agrego el registro: ' + i);
      } catch (error) {
        console.log(error);
      }
    } // let init = 0
    // let fin = 15000
    // let corte = parseInt(arrayDeudores.length / fin)+1
    // console.log(corte)
    // for(let i = 0; i < corte; i++){
    //     let pepe = arrayDeudores.slice(init,fin)
    //     console.log(pepe.length)  
    //     console.log('pasada: ' + i)
    //     try {
    //         console.log("empieza el bulk insert")
    //         await models.deudores.bulkCreate(pepe,{validate: false, logging: false})
    //         console.log("termino ok")
    //     } catch (error) {
    //         console.log(error.message)
    //     }
    //     init = init + 15000
    //     fin = fin + 15000
    // }

  }
};
exports.default = _default;
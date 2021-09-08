"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _connection = _interopRequireDefault(require("../config/db/connection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  generaEstadistico: async queryParams => {
    let id_empresa = queryParams.id_empresa;
    let id_situacion_desde = queryParams.id_situacion_desde;
    let id_situacion_hasta = queryParams.id_situacion_hasta;
    let id_gestion_desde = queryParams.id_gestion_desde;
    let id_gestion_hasta = queryParams.id_gestion_hasta;
    let deuda_desde = queryParams.deuda_desde;
    let deuda_hasta = queryParams.deuda_hasta;
    let remesa_desde = queryParams.remesa_desde;
    let remesa_hasta = queryParams.remesa_hasta;
    let politica_desde = queryParams.politica_desde;
    let politica_hasta = queryParams.politica_hasta;
    let id_situacion_omite_desde = queryParams.id_situacion_omite_desde;
    let id_situacion_omite_hasta = queryParams.id_situacion_omite_hasta;
    let id_gestion_omite_desde = queryParams.id_gestion_omite_desde;
    let id_gestion_omite_hasta = queryParams.id_gestion_omite_hasta;
    let deuda_omite_desde = queryParams.deuda_omite_desde;
    let deuda_omite_hasta = queryParams.deuda_omite_hasta;
    let remesa_omite_desde = queryParams.remesa_omite_desde;
    let remesa_omite_hasta = queryParams.remesa_omite_hasta;
    let politica_omite_desde = queryParams.politica_omite_desde;
    let politica_omite_hasta = queryParams.politica_omite_hasta;
    let telEfectivos = queryParams.telEfectivos;
    let celIplan = queryParams.celIplan;
    let celIplanLc = queryParams.celIplanLc;
    let net2phone = queryParams.net2phone;
    let aux1_desde = queryParams.aux1_desde;
    let aux1_hasta = queryParams.aux1_hasta;
    let aux1_omite_desde = queryParams.aux1_omite_desde;
    let aux1_omite_hasta = queryParams.aux1_omite_hasta;
    let aux2_desde = queryParams.aux2_desde;
    let aux2_hasta = queryParams.aux2_hasta;
    let aux2_omite_desde = queryParams.aux2_omite_desde;
    let aux2_omite_hasta = queryParams.aux2_omite_hasta;
    let aux3_desde = queryParams.aux3_desde;
    let aux3_hasta = queryParams.aux3_hasta;
    let aux3_omite_desde = queryParams.aux3_omite_desde;
    let aux3_omite_hasta = queryParams.aux3_omite_hasta;
    let aux4_desde = queryParams.aux4_desde;
    let aux4_hasta = queryParams.aux4_hasta;
    let aux4_omite_desde = queryParams.aux4_omite_desde;
    let aux4_omite_hasta = queryParams.aux4_omite_hasta;
    let aux5_desde = queryParams.aux5_desde;
    let aux5_hasta = queryParams.aux5_hasta;
    let aux5_omite_desde = queryParams.aux5_omite_desde;
    let aux5_omite_hasta = queryParams.aux5_omite_hasta;
    let aux6_desde = queryParams.aux6_desde;
    let aux6_hasta = queryParams.aux6_hasta;
    let aux6_omite_desde = queryParams.aux6_omite_desde;
    let aux6_omite_hasta = queryParams.aux6_omite_hasta;
    let aux7_desde = queryParams.aux7_desde;
    let aux7_hasta = queryParams.aux7_hasta;
    let aux7_omite_desde = queryParams.aux7_omite_desde;
    let aux7_omite_hasta = queryParams.aux7_omite_hasta;
    let aux8_desde = queryParams.aux8_desde;
    let aux8_hasta = queryParams.aux8_hasta;
    let aux8_omite_desde = queryParams.aux8_omite_desde;
    let aux8_omite_hasta = queryParams.aux8_omite_hasta;
    let aux9_desde = queryParams.aux9_desde;
    let aux9_hasta = queryParams.aux9_hasta;
    let aux9_omite_desde = queryParams.aux9_omite_desde;
    let aux9_omite_hasta = queryParams.aux9_omite_hasta;
    let aux10_desde = queryParams.aux10_desde;
    let aux10_hasta = queryParams.aux10_hasta;
    let aux10_omite_desde = queryParams.aux10_omite_desde;
    let aux10_omite_hasta = queryParams.aux10_omite_hasta;
    let aux11_desde = queryParams.aux11_desde;
    let aux11_hasta = queryParams.aux11_hasta;
    let aux11_omite_desde = queryParams.aux11_omite_desde;
    let aux11_omite_hasta = queryParams.aux11_omite_hasta;
    let aux12_desde = queryParams.aux12_desde;
    let aux12_hasta = queryParams.aux12_hasta;
    let aux12_omite_desde = queryParams.aux12_omite_desde;
    let aux12_omite_hasta = queryParams.aux12_omite_hasta;
    let aux13_desde = queryParams.aux13_desde;
    let aux13_hasta = queryParams.aux13_hasta;
    let aux13_omite_desde = queryParams.aux13_omite_desde;
    let aux13_omite_hasta = queryParams.aux13_omite_hasta;
    let aux14_desde = queryParams.aux14_desde;
    let aux14_hasta = queryParams.aux14_hasta;
    let aux14_omite_desde = queryParams.aux14_omite_desde;
    let aux14_omite_hasta = queryParams.aux14_omite_hasta;
    let aux15_desde = queryParams.aux15_desde;
    let aux15_hasta = queryParams.aux15_hasta;
    let aux15_omite_desde = queryParams.aux15_omite_desde;
    let aux15_omite_hasta = queryParams.aux15_omite_hasta;
    let aux16_desde = queryParams.aux16_desde;
    let aux16_hasta = queryParams.aux16_hasta;
    let aux16_omite_desde = queryParams.aux16_omite_desde;
    let aux16_omite_hasta = queryParams.aux16_omite_hasta;
    let aux17_desde = queryParams.aux17_desde;
    let aux17_hasta = queryParams.aux17_hasta;
    let aux17_omite_desde = queryParams.aux17_omite_desde;
    let aux17_omite_hasta = queryParams.aux17_omite_hasta;
    let aux18_desde = queryParams.aux18_desde;
    let aux18_hasta = queryParams.aux18_hasta;
    let aux18_omite_desde = queryParams.aux18_omite_desde;
    let aux18_omite_hasta = queryParams.aux18_omite_hasta;
    let aux19_desde = queryParams.aux19_desde;
    let aux19_hasta = queryParams.aux19_hasta;
    let aux19_omite_desde = queryParams.aux19_omite_desde;
    let aux19_omite_hasta = queryParams.aux19_omite_hasta;
    let aux20_desde = queryParams.aux20_desde;
    let aux20_hasta = queryParams.aux20_hasta;
    let aux20_omite_desde = queryParams.aux20_omite_desde;
    let aux20_omite_hasta = queryParams.aux20_omite_hasta;
    let aux21_desde = queryParams.aux21_desde;
    let aux21_hasta = queryParams.aux21_hasta;
    let aux21_omite_desde = queryParams.aux21_omite_desde;
    let aux21_omite_hasta = queryParams.aux21_omite_hasta;
    let aux22_desde = queryParams.aux22_desde;
    let aux22_hasta = queryParams.aux22_hasta;
    let aux22_omite_desde = queryParams.aux22_omite_desde;
    let aux22_omite_hasta = queryParams.aux22_omite_hasta;
    let aux23_desde = queryParams.aux23_desde;
    let aux23_hasta = queryParams.aux23_hasta;
    let aux23_omite_desde = queryParams.aux23_omite_desde;
    let aux23_omite_hasta = queryParams.aux23_omite_hasta;
    let aux24_desde = queryParams.aux24_desde;
    let aux24_hasta = queryParams.aux24_hasta;
    let aux24_omite_desde = queryParams.aux24_omite_desde;
    let aux24_omite_hasta = queryParams.aux24_omite_hasta;
    let aux25_desde = queryParams.aux25_desde;
    let aux25_hasta = queryParams.aux25_hasta;
    let aux25_omite_desde = queryParams.aux25_omite_desde;
    let aux25_omite_hasta = queryParams.aux25_omite_hasta;
    let aux26_desde = queryParams.aux26_desde;
    let aux26_hasta = queryParams.aux26_hasta;
    let aux26_omite_desde = queryParams.aux26_omite_desde;
    let aux26_omite_hasta = queryParams.aux26_omite_hasta;
    let aux27_desde = queryParams.aux27_desde;
    let aux27_hasta = queryParams.aux27_hasta;
    let aux27_omite_desde = queryParams.aux27_omite_desde;
    let aux27_omite_hasta = queryParams.aux27_omite_hasta;
    let aux28_desde = queryParams.aux28_desde;
    let aux28_hasta = queryParams.aux28_hasta;
    let aux28_omite_desde = queryParams.aux28_omite_desde;
    let aux28_omite_hasta = queryParams.aux28_omite_hasta;
    let aux29_desde = queryParams.aux29_desde;
    let aux29_hasta = queryParams.aux29_hasta;
    let aux29_omite_desde = queryParams.aux29_omite_desde;
    let aux29_omite_hasta = queryParams.aux29_omite_hasta;
    let aux30_desde = queryParams.aux30_desde;
    let aux30_hasta = queryParams.aux30_hasta;
    let aux30_omite_desde = queryParams.aux30_omite_desde;
    let aux30_omite_hasta = queryParams.aux30_omite_hasta;
    let aux31_desde = queryParams.aux31_desde;
    let aux31_hasta = queryParams.aux31_hasta;
    let aux31_omite_desde = queryParams.aux31_omite_desde;
    let aux31_omite_hasta = queryParams.aux31_omite_hasta;
    let aux32_desde = queryParams.aux32_desde;
    let aux32_hasta = queryParams.aux32_hasta;
    let aux32_omite_desde = queryParams.aux32_omite_desde;
    let aux32_omite_hasta = queryParams.aux32_omite_hasta;
    let aux33_desde = queryParams.aux33_desde;
    let aux33_hasta = queryParams.aux33_hasta;
    let aux33_omite_desde = queryParams.aux33_omite_desde;
    let aux33_omite_hasta = queryParams.aux33_omite_hasta;
    let aux34_desde = queryParams.aux34_desde;
    let aux34_hasta = queryParams.aux34_hasta;
    let aux34_omite_desde = queryParams.aux34_omite_desde;
    let aux34_omite_hasta = queryParams.aux34_omite_hasta;
    let aux35_desde = queryParams.aux35_desde;
    let aux35_hasta = queryParams.aux35_hasta;
    let aux35_omite_desde = queryParams.aux35_omite_desde;
    let aux35_omite_hasta = queryParams.aux35_omite_hasta;
    let aux36_desde = queryParams.aux36_desde;
    let aux36_hasta = queryParams.aux36_hasta;
    let aux36_omite_desde = queryParams.aux36_omite_desde;
    let aux36_omite_hasta = queryParams.aux36_omite_hasta;
    let aux37_desde = queryParams.aux37_desde;
    let aux37_hasta = queryParams.aux37_hasta;
    let aux37_omite_desde = queryParams.aux37_omite_desde;
    let aux37_omite_hasta = queryParams.aux37_omite_hasta;
    let aux38_desde = queryParams.aux38_desde;
    let aux38_hasta = queryParams.aux38_hasta;
    let aux38_omite_desde = queryParams.aux38_omite_desde;
    let aux38_omite_hasta = queryParams.aux38_omite_hasta;
    let aux39_desde = queryParams.aux39_desde;
    let aux39_hasta = queryParams.aux39_hasta;
    let aux39_omite_desde = queryParams.aux39_omite_desde;
    let aux39_omite_hasta = queryParams.aux39_omite_hasta;
    let aux40_desde = queryParams.aux40_desde;
    let aux40_hasta = queryParams.aux40_hasta;
    let aux40_omite_desde = queryParams.aux40_omite_desde;
    let aux40_omite_hasta = queryParams.aux40_omite_hasta;
    let aux41_desde = queryParams.aux41_desde;
    let aux41_hasta = queryParams.aux41_hasta;
    let aux41_omite_desde = queryParams.aux41_omite_desde;
    let aux41_omite_hasta = queryParams.aux41_omite_hasta;
    let aux42_desde = queryParams.aux42_desde;
    let aux42_hasta = queryParams.aux42_hasta;
    let aux42_omite_desde = queryParams.aux42_omite_desde;
    let aux42_omite_hasta = queryParams.aux42_omite_hasta;
    let aux43_desde = queryParams.aux43_desde;
    let aux43_hasta = queryParams.aux43_hasta;
    let aux43_omite_desde = queryParams.aux43_omite_desde;
    let aux43_omite_hasta = queryParams.aux43_omite_hasta;
    let aux44_desde = queryParams.aux44_desde;
    let aux44_hasta = queryParams.aux44_hasta;
    let aux44_omite_desde = queryParams.aux44_omite_desde;
    let aux44_omite_hasta = queryParams.aux44_omite_hasta;
    let aux45_desde = queryParams.aux45_desde;
    let aux45_hasta = queryParams.aux45_hasta;
    let aux45_omite_desde = queryParams.aux45_omite_desde;
    let aux45_omite_hasta = queryParams.aux45_omite_hasta;
    let aux46_desde = queryParams.aux46_desde;
    let aux46_hasta = queryParams.aux46_hasta;
    let aux46_omite_desde = queryParams.aux46_omite_desde;
    let aux46_omite_hasta = queryParams.aux46_omite_hasta;
    let aux47_desde = queryParams.aux47_desde;
    let aux47_hasta = queryParams.aux47_hasta;
    let aux47_omite_desde = queryParams.aux47_omite_desde;
    let aux47_omite_hasta = queryParams.aux47_omite_hasta;
    let aux48_desde = queryParams.aux48_desde;
    let aux48_hasta = queryParams.aux48_hasta;
    let aux48_omite_desde = queryParams.aux48_omite_desde;
    let aux48_omite_hasta = queryParams.aux48_omite_hasta;
    let aux49_desde = queryParams.aux49_desde;
    let aux49_hasta = queryParams.aux49_hasta;
    let aux49_omite_desde = queryParams.aux49_omite_desde;
    let aux49_omite_hasta = queryParams.aux49_omite_hasta;
    let aux50_desde = queryParams.aux50_desde;
    let aux50_hasta = queryParams.aux50_hasta;
    let aux50_omite_desde = queryParams.aux50_omite_desde;
    let aux50_omite_hasta = queryParams.aux50_omite_hasta;
    let queryWhere = `WHERE d.id_empresa = ${id_empresa} AND
                        d.id_situacion between ${id_situacion_desde} AND ${id_situacion_hasta} AND d.id_situacion not between ${id_situacion_omite_desde} AND ${id_situacion_omite_hasta} AND
                        d.id_gestion between ${id_gestion_desde} AND ${id_gestion_hasta} AND d.id_gestion not between ${id_gestion_omite_desde} AND ${id_gestion_omite_hasta} AND
                        d.remesa between ${remesa_desde} AND ${remesa_hasta} AND d.remesa not between ${remesa_omite_desde} AND ${remesa_omite_hasta} AND
                        d.deuda_historica between ${deuda_desde} AND ${deuda_hasta} AND d.deuda_historica not between ${deuda_omite_desde} AND ${deuda_omite_hasta} AND
                        d.id_politica between ${politica_desde} AND ${politica_hasta} AND d.id_politica not between ${politica_omite_desde} AND ${politica_omite_hasta}`; // AND d.fecha_cierra > '${moment().format('YYYY-MM-DD')}'

    if (telEfectivos == "true") {
      queryWhere = queryWhere + ` AND t.efectivo = 1 `;
    }

    if (aux1_desde && aux1_hasta) {
      if (aux1_omite_desde && aux1_omite_hasta) {
        queryWhere = queryWhere + ` AND d.aux1 BETWEEN '${aux1_desde}' AND '${aux1_hasta}' AND d.aux1 NOT BETWEEN '${aux1_omite_desde}' AND '${aux1_omite_hasta}' `;
      } else {
        queryWhere = queryWhere + ` AND d.aux1 BETWEEN '${aux1_desde}' AND '${aux1_hasta}'`;
      }
    }

    if (aux2_desde && aux2_hasta) {
      if (aux2_omite_desde && aux2_omite_hasta) {
        queryWhere = queryWhere + ` AND d.aux2 BETWEEN '${aux2_desde}' AND '${aux2_hasta}' AND d.aux2 NOT BETWEEN '${aux2_omite_desde}' AND '${aux2_omite_hasta}' `;
      } else {
        queryWhere = queryWhere + ` AND d.aux2 BETWEEN '${aux2_desde}' AND '${aux2_hasta}'`;
      }
    }

    if (aux3_desde && aux3_hasta) {
      if (aux3_omite_desde && aux3_omite_hasta) {
        queryWhere = queryWhere + ` AND d.aux3 BETWEEN '${aux3_desde}' AND '${aux3_hasta}' AND d.aux3 NOT BETWEEN '${aux3_omite_desde}' AND '${aux3_omite_hasta}' `;
      } else {
        queryWhere = queryWhere + ` AND d.aux3 BETWEEN '${aux3_desde}' AND '${aux3_hasta}'`;
      }
    }

    if (aux4_desde && aux4_hasta) {
      if (aux4_omite_desde && aux4_omite_hasta) {
        queryWhere = queryWhere + ` AND d.aux4 BETWEEN '${aux4_desde}' AND '${aux4_hasta}' AND d.aux4 NOT BETWEEN '${aux4_omite_desde}' AND '${aux4_omite_hasta}' `;
      } else {
        queryWhere = queryWhere + ` AND d.aux4 BETWEEN '${aux4_desde}' AND '${aux4_hasta}'`;
      }
    }

    if (aux5_desde && aux5_hasta) {
      if (aux5_omite_desde && aux5_omite_hasta) {
        queryWhere = queryWhere + ` AND d.aux5 BETWEEN '${aux5_desde}' AND '${aux5_hasta}' AND d.aux5 NOT BETWEEN '${aux5_omite_desde}' AND '${aux5_omite_hasta}' `;
      } else {
        queryWhere = queryWhere + ` AND d.aux5 BETWEEN '${aux5_desde}' AND '${aux5_hasta}'`;
      }
    }

    if (aux6_desde && aux6_hasta) {
      if (aux6_omite_desde && aux6_omite_hasta) {
        queryWhere = queryWhere + ` AND d.aux6 BETWEEN '${aux6_desde}' AND '${aux6_hasta}' AND d.aux6 NOT BETWEEN '${aux6_omite_desde}' AND '${aux6_omite_hasta}' `;
      } else {
        queryWhere = queryWhere + ` AND d.aux6 BETWEEN '${aux6_desde}' AND '${aux6_hasta}'`;
      }
    }

    if (aux7_desde && aux7_hasta) {
      if (aux7_omite_desde && aux7_omite_hasta) {
        queryWhere = queryWhere + ` AND d.aux7 BETWEEN '${aux7_desde}' AND '${aux7_hasta}' AND d.aux7 NOT BETWEEN '${aux7_omite_desde}' AND '${aux7_omite_hasta}' `;
      } else {
        queryWhere = queryWhere + ` AND d.aux7 BETWEEN '${aux7_desde}' AND '${aux7_hasta}'`;
      }
    }

    if (aux8_desde && aux8_hasta) {
      if (aux8_omite_desde && aux8_omite_hasta) {
        queryWhere = queryWhere + ` AND d.aux8 BETWEEN '${aux8_desde}' AND '${aux8_hasta}' AND d.aux8 NOT BETWEEN '${aux8_omite_desde}' AND '${aux8_omite_hasta}' `;
      } else {
        queryWhere = queryWhere + ` AND d.aux8 BETWEEN '${aux8_desde}' AND '${aux8_hasta}'`;
      }
    }

    if (aux9_desde && aux9_hasta) {
      if (aux9_omite_desde && aux9_omite_hasta) {
        queryWhereWhere = queryWhereWhere + ` AND d.aux9 BETWEEN '${aux9_desde}' AND '${aux9_hasta}' AND d.aux9 NOT BETWEEN '${aux9_omite_desde}' AND '${aux9_omite_hasta}' `;
      } else {
        queryWhereWhere = queryWhereWhere + ` AND d.aux9 BETWEEN '${aux9_desde}' AND '${aux9_hasta}'`;
      }
    }

    if (aux10_desde && aux10_hasta) {
      if (aux10_omite_desde && aux10_omite_hasta) {
        queryWhere = queryWhere + ` AND d.aux10 BETWEEN '${aux10_desde}' AND '${aux10_hasta}' AND d.aux10 NOT BETWEEN '${aux10_omite_desde}' AND '${aux10_omite_hasta}' `;
      } else {
        queryWhere = queryWhere + ` AND d.aux10 BETWEEN '${aux10_desde}' AND '${aux10_hasta}'`;
      }
    }

    if (aux11_desde && aux11_hasta) {
      if (aux11_omite_desde && aux11_omite_hasta) {
        queryWhere = queryWhere + ` AND d.aux11 BETWEEN '${aux11_desde}' AND '${aux11_hasta}' AND d.aux11 NOT BETWEEN '${aux11_omite_desde}' AND '${aux11_omite_hasta}' `;
      } else {
        queryWhere = queryWhere + ` AND d.aux11 BETWEEN '${aux11_desde}' AND '${aux11_hasta}'`;
      }
    }

    if (aux12_desde && aux12_hasta) {
      if (aux12_omite_desde && aux12_omite_hasta) {
        queryWhere = queryWhere + ` AND d.aux12 BETWEEN '${aux12_desde}' AND '${aux12_hasta}' AND d.aux12 NOT BETWEEN '${aux12_omite_desde}' AND '${aux12_omite_hasta}' `;
      } else {
        queryWhere = queryWhere + ` AND d.aux12 BETWEEN '${aux12_desde}' AND '${aux12_hasta}'`;
      }
    }

    if (aux13_desde && aux13_hasta) {
      if (aux13_omite_desde && aux13_omite_hasta) {
        queryWhere = queryWhere + ` AND d.aux13 BETWEEN '${aux13_desde}' AND '${aux13_hasta}' AND d.aux13 NOT BETWEEN '${aux13_omite_desde}' AND '${aux13_omite_hasta}' `;
      } else {
        queryWhere = queryWhere + ` AND d.aux13 BETWEEN '${aux13_desde}' AND '${aux13_hasta}'`;
      }
    }

    if (aux14_desde && aux14_hasta) {
      if (aux14_omite_desde && aux14_omite_hasta) {
        queryWhere = queryWhere + ` AND d.aux14 BETWEEN '${aux14_desde}' AND '${aux14_hasta}' AND d.aux14 NOT BETWEEN '${aux14_omite_desde}' AND '${aux14_omite_hasta}' `;
      } else {
        queryWhere = queryWhere + ` AND d.aux14 BETWEEN '${aux14_desde}' AND '${aux14_hasta}'`;
      }
    }

    if (aux15_desde && aux15_hasta) {
      if (aux15_omite_desde && aux15_omite_hasta) {
        queryWhere = queryWhere + ` AND d.aux15 BETWEEN '${aux15_desde}' AND '${aux15_hasta}' AND d.aux15 NOT BETWEEN '${aux15_omite_desde}' AND '${aux15_omite_hasta}' `;
      } else {
        queryWhere = queryWhere + ` AND d.aux15 BETWEEN '${aux15_desde}' AND '${aux15_hasta}'`;
      }
    }

    if (aux16_desde && aux16_hasta) {
      if (aux16_omite_desde && aux16_omite_hasta) {
        queryWhere = queryWhere + ` AND d.aux16 BETWEEN '${aux16_desde}' AND '${aux16_hasta}' AND d.aux16 NOT BETWEEN '${aux16_omite_desde}' AND '${aux16_omite_hasta}' `;
      } else {
        queryWhere = queryWhere + ` AND d.aux16 BETWEEN '${aux16_desde}' AND '${aux16_hasta}'`;
      }
    }

    if (aux17_desde && aux17_hasta) {
      if (aux17_omite_desde && aux17_omite_hasta) {
        queryWhere = queryWhere + ` AND d.aux17 BETWEEN '${aux17_desde}' AND '${aux17_hasta}' AND d.aux17 NOT BETWEEN '${aux17_omite_desde}' AND '${aux17_omite_hasta}' `;
      } else {
        queryWhere = queryWhere + ` AND d.aux17 BETWEEN '${aux17_desde}' AND '${aux17_hasta}'`;
      }
    }

    if (aux18_desde && aux18_hasta) {
      if (aux18_omite_desde && aux18_omite_hasta) {
        queryWhere = queryWhere + ` AND d.aux18 BETWEEN '${aux18_desde}' AND '${aux18_hasta}' AND d.aux18 NOT BETWEEN '${aux18_omite_desde}' AND '${aux18_omite_hasta}' `;
      } else {
        queryWhere = queryWhere + ` AND d.aux18 BETWEEN '${aux18_desde}' AND '${aux18_hasta}'`;
      }
    }

    if (aux19_desde && aux19_hasta) {
      if (aux19_omite_desde && aux19_omite_hasta) {
        queryWhere = queryWhere + ` AND d.aux19 BETWEEN '${aux19_desde}' AND '${aux19_hasta}' AND d.aux19 NOT BETWEEN '${aux19_omite_desde}' AND '${aux19_omite_hasta}' `;
      } else {
        queryWhere = queryWhere + ` AND d.aux19 BETWEEN '${aux19_desde}' AND '${aux19_hasta}'`;
      }
    }

    if (aux20_desde && aux20_hasta) {
      if (aux20_omite_desde && aux20_omite_hasta) {
        queryWhere = queryWhere + ` AND d.aux20 BETWEEN '${aux20_desde}' AND '${aux20_hasta}' AND d.aux20 NOT BETWEEN '${aux20_omite_desde}' AND '${aux20_omite_hasta}' `;
      } else {
        queryWhere = queryWhere + ` AND d.aux20 BETWEEN '${aux20_desde}' AND '${aux20_hasta}'`;
      }
    }

    if (aux21_desde && aux21_hasta) {
      if (aux21_omite_desde && aux21_omite_hasta) {
        queryWhere = queryWhere + ` AND d.aux21 BETWEEN '${aux21_desde}' AND '${aux21_hasta}' AND d.aux21 NOT BETWEEN '${aux21_omite_desde}' AND '${aux21_omite_hasta}' `;
      } else {
        queryWhere = queryWhere + ` AND d.aux21 BETWEEN '${aux21_desde}' AND '${aux21_hasta}'`;
      }
    }

    if (aux22_desde && aux22_hasta) {
      if (aux22_omite_desde && aux22_omite_hasta) {
        queryWhere = queryWhere + ` AND d.aux22 BETWEEN '${aux22_desde}' AND '${aux22_hasta}' AND d.aux22 NOT BETWEEN '${aux22_omite_desde}' AND '${aux22_omite_hasta}' `;
      } else {
        queryWhere = queryWhere + ` AND d.aux22 BETWEEN '${aux22_desde}' AND '${aux22_hasta}'`;
      }
    }

    if (aux23_desde && aux23_hasta) {
      if (aux23_omite_desde && aux23_omite_hasta) {
        queryWhere = queryWhere + ` AND d.aux23 BETWEEN '${aux23_desde}' AND '${aux23_hasta}' AND d.aux23 NOT BETWEEN '${aux23_omite_desde}' AND '${aux23_omite_hasta}' `;
      } else {
        queryWhere = queryWhere + ` AND d.aux23 BETWEEN '${aux23_desde}' AND '${aux23_hasta}'`;
      }
    }

    if (aux24_desde && aux24_hasta) {
      if (aux24_omite_desde && aux24_omite_hasta) {
        queryWhere = queryWhere + ` AND d.aux24 BETWEEN '${aux24_desde}' AND '${aux24_hasta}' AND d.aux24 NOT BETWEEN '${aux24_omite_desde}' AND '${aux24_omite_hasta}' `;
      } else {
        queryWhere = queryWhere + ` AND d.aux24 BETWEEN '${aux24_desde}' AND '${aux24_hasta}'`;
      }
    }

    if (aux25_desde && aux25_hasta) {
      if (aux25_omite_desde && aux25_omite_hasta) {
        queryWhere = queryWhere + ` AND d.aux25 BETWEEN '${aux25_desde}' AND '${aux25_hasta}' AND d.aux25 NOT BETWEEN '${aux25_omite_desde}' AND '${aux25_omite_hasta}' `;
      } else {
        queryWhere = queryWhere + ` AND d.aux25 BETWEEN '${aux25_desde}' AND '${aux25_hasta}'`;
      }
    }

    if (aux26_desde && aux26_hasta) {
      if (aux26_omite_desde && aux26_omite_hasta) {
        queryWhere = queryWhere + ` AND d.aux26 BETWEEN '${aux26_desde}' AND '${aux26_hasta}' AND d.aux26 NOT BETWEEN '${aux26_omite_desde}' AND '${aux26_omite_hasta}' `;
      } else {
        queryWhere = queryWhere + ` AND d.aux26 BETWEEN '${aux26_desde}' AND '${aux26_hasta}'`;
      }
    }

    if (aux27_desde && aux27_hasta) {
      if (aux27_omite_desde && aux27_omite_hasta) {
        queryWhere = queryWhere + ` AND d.aux27 BETWEEN '${aux27_desde}' AND '${aux27_hasta}' AND d.aux27 NOT BETWEEN '${aux27_omite_desde}' AND '${aux27_omite_hasta}' `;
      } else {
        queryWhere = queryWhere + ` AND d.aux27 BETWEEN '${aux27_desde}' AND '${aux27_hasta}'`;
      }
    }

    if (aux28_desde && aux28_hasta) {
      if (aux28_omite_desde && aux28_omite_hasta) {
        queryWhere = queryWhere + ` AND d.aux28 BETWEEN '${aux28_desde}' AND '${aux28_hasta}' AND d.aux28 NOT BETWEEN '${aux28_omite_desde}' AND '${aux28_omite_hasta}' `;
      } else {
        queryWhere = queryWhere + ` AND d.aux28 BETWEEN '${aux28_desde}' AND '${aux28_hasta}'`;
      }
    }

    if (aux29_desde && aux29_hasta) {
      if (aux29_omite_desde && aux29_omite_hasta) {
        queryWhere = queryWhere + ` AND d.aux29 BETWEEN '${aux29_desde}' AND '${aux29_hasta}' AND d.aux29 NOT BETWEEN '${aux29_omite_desde}' AND '${aux29_omite_hasta}' `;
      } else {
        queryWhere = queryWhere + ` AND d.aux29 BETWEEN '${aux29_desde}' AND '${aux29_hasta}'`;
      }
    }

    if (aux30_desde && aux30_hasta) {
      if (aux30_omite_desde && aux30_omite_hasta) {
        queryWhere = queryWhere + ` AND d.aux30 BETWEEN '${aux30_desde}' AND '${aux30_hasta}' AND d.aux30 NOT BETWEEN '${aux30_omite_desde}' AND '${aux30_omite_hasta}' `;
      } else {
        queryWhere = queryWhere + ` AND d.aux30 BETWEEN '${aux30_desde}' AND '${aux30_hasta}'`;
      }
    }

    if (aux31_desde && aux31_hasta) {
      if (aux31_omite_desde && aux31_omite_hasta) {
        queryWhere = queryWhere + ` AND d.aux31 BETWEEN '${aux31_desde}' AND '${aux31_hasta}' AND d.aux31 NOT BETWEEN '${aux31_omite_desde}' AND '${aux31_omite_hasta}' `;
      } else {
        queryWhere = queryWhere + ` AND d.aux31 BETWEEN '${aux31_desde}' AND '${aux31_hasta}'`;
      }
    }

    if (aux32_desde && aux32_hasta) {
      if (aux32_omite_desde && aux32_omite_hasta) {
        queryWhere = queryWhere + ` AND d.aux32 BETWEEN '${aux32_desde}' AND '${aux32_hasta}' AND d.aux32 NOT BETWEEN '${aux32_omite_desde}' AND '${aux32_omite_hasta}' `;
      } else {
        queryWhere = queryWhere + ` AND d.aux32 BETWEEN '${aux32_desde}' AND '${aux32_hasta}'`;
      }
    }

    if (aux33_desde && aux33_hasta) {
      if (aux33_omite_desde && aux33_omite_hasta) {
        queryWhere = queryWhere + ` AND d.aux33 BETWEEN '${aux33_desde}' AND '${aux33_hasta}' AND d.aux33 NOT BETWEEN '${aux33_omite_desde}' AND '${aux33_omite_hasta}' `;
      } else {
        queryWhere = queryWhere + ` AND d.aux33 BETWEEN '${aux33_desde}' AND '${aux33_hasta}'`;
      }
    }

    if (aux34_desde && aux34_hasta) {
      if (aux34_omite_desde && aux34_omite_hasta) {
        queryWhere = queryWhere + ` AND d.aux34 BETWEEN '${aux34_desde}' AND '${aux34_hasta}' AND d.aux34 NOT BETWEEN '${aux34_omite_desde}' AND '${aux34_omite_hasta}' `;
      } else {
        queryWhere = queryWhere + ` AND d.aux34 BETWEEN '${aux34_desde}' AND '${aux34_hasta}'`;
      }
    }

    if (aux35_desde && aux35_hasta) {
      if (aux35_omite_desde && aux35_omite_hasta) {
        queryWhere = queryWhere + ` AND d.aux35 BETWEEN '${aux35_desde}' AND '${aux35_hasta}' AND d.aux35 NOT BETWEEN '${aux35_omite_desde}' AND '${aux35_omite_hasta}' `;
      } else {
        queryWhere = queryWhere + ` AND d.aux35 BETWEEN '${aux35_desde}' AND '${aux35_hasta}'`;
      }
    }

    if (aux36_desde && aux36_hasta) {
      if (aux36_omite_desde && aux36_omite_hasta) {
        queryWhere = queryWhere + ` AND d.aux36 BETWEEN '${aux36_desde}' AND '${aux36_hasta}' AND d.aux36 NOT BETWEEN '${aux36_omite_desde}' AND '${aux36_omite_hasta}' `;
      } else {
        queryWhere = queryWhere + ` AND d.aux36 BETWEEN '${aux36_desde}' AND '${aux36_hasta}'`;
      }
    }

    if (aux37_desde && aux37_hasta) {
      if (aux37_omite_desde && aux37_omite_hasta) {
        queryWhere = queryWhere + ` AND d.aux37 BETWEEN '${aux37_desde}' AND '${aux37_hasta}' AND d.aux37 NOT BETWEEN '${aux37_omite_desde}' AND '${aux37_omite_hasta}' `;
      } else {
        queryWhere = queryWhere + ` AND d.aux37 BETWEEN '${aux37_desde}' AND '${aux37_hasta}'`;
      }
    }

    if (aux38_desde && aux38_hasta) {
      if (aux38_omite_desde && aux38_omite_hasta) {
        queryWhere = queryWhere + ` AND d.aux38 BETWEEN '${aux38_desde}' AND '${aux38_hasta}' AND d.aux38 NOT BETWEEN '${aux38_omite_desde}' AND '${aux38_omite_hasta}' `;
      } else {
        queryWhere = queryWhere + ` AND d.aux38 BETWEEN '${aux38_desde}' AND '${aux38_hasta}'`;
      }
    }

    if (aux39_desde && aux39_hasta) {
      if (aux39_omite_desde && aux39_omite_hasta) {
        queryWhere = queryWhere + ` AND d.aux39 BETWEEN '${aux39_desde}' AND '${aux39_hasta}' AND d.aux39 NOT BETWEEN '${aux39_omite_desde}' AND '${aux39_omite_hasta}' `;
      } else {
        queryWhere = queryWhere + ` AND d.aux39 BETWEEN '${aux39_desde}' AND '${aux39_hasta}'`;
      }
    }

    if (aux40_desde && aux40_hasta) {
      if (aux40_omite_desde && aux40_omite_hasta) {
        queryWhere = queryWhere + ` AND d.aux40 BETWEEN '${aux40_desde}' AND '${aux40_hasta}' AND d.aux40 NOT BETWEEN '${aux40_omite_desde}' AND '${aux40_omite_hasta}' `;
      } else {
        queryWhere = queryWhere + ` AND d.aux40 BETWEEN '${aux40_desde}' AND '${aux40_hasta}'`;
      }
    }

    if (aux41_desde && aux41_hasta) {
      if (aux41_omite_desde && aux41_omite_hasta) {
        queryWhere = queryWhere + ` AND d.aux41 BETWEEN '${aux41_desde}' AND '${aux41_hasta}' AND d.aux41 NOT BETWEEN '${aux41_omite_desde}' AND '${aux41_omite_hasta}' `;
      } else {
        queryWhere = queryWhere + ` AND d.aux41 BETWEEN '${aux41_desde}' AND '${aux41_hasta}'`;
      }
    }

    if (aux42_desde && aux42_hasta) {
      if (aux42_omite_desde && aux42_omite_hasta) {
        queryWhere = queryWhere + ` AND d.aux42 BETWEEN '${aux42_desde}' AND '${aux42_hasta}' AND d.aux42 NOT BETWEEN '${aux42_omite_desde}' AND '${aux42_omite_hasta}' `;
      } else {
        queryWhere = queryWhere + ` AND d.aux42 BETWEEN '${aux42_desde}' AND '${aux42_hasta}'`;
      }
    }

    if (aux43_desde && aux43_hasta) {
      if (aux43_omite_desde && aux43_omite_hasta) {
        queryWhere = queryWhere + ` AND d.aux43 BETWEEN '${aux43_desde}' AND '${aux43_hasta}' AND d.aux43 NOT BETWEEN '${aux43_omite_desde}' AND '${aux43_omite_hasta}' `;
      } else {
        queryWhere = queryWhere + ` AND d.aux43 BETWEEN '${aux43_desde}' AND '${aux43_hasta}'`;
      }
    }

    if (aux44_desde && aux44_hasta) {
      if (aux44_omite_desde && aux44_omite_hasta) {
        queryWhere = queryWhere + ` AND d.aux44 BETWEEN '${aux44_desde}' AND '${aux44_hasta}' AND d.aux44 NOT BETWEEN '${aux44_omite_desde}' AND '${aux44_omite_hasta}' `;
      } else {
        queryWhere = queryWhere + ` AND d.aux44 BETWEEN '${aux44_desde}' AND '${aux44_hasta}'`;
      }
    }

    if (aux45_desde && aux45_hasta) {
      if (aux45_omite_desde && aux45_omite_hasta) {
        queryWhere = queryWhere + ` AND d.aux45 BETWEEN '${aux45_desde}' AND '${aux45_hasta}' AND d.aux45 NOT BETWEEN '${aux45_omite_desde}' AND '${aux45_omite_hasta}' `;
      } else {
        queryWhere = queryWhere + ` AND d.aux45 BETWEEN '${aux45_desde}' AND '${aux45_hasta}'`;
      }
    }

    if (aux46_desde && aux46_hasta) {
      if (aux46_omite_desde && aux46_omite_hasta) {
        queryWhere = queryWhere + ` AND d.aux46 BETWEEN '${aux46_desde}' AND '${aux46_hasta}' AND d.aux46 NOT BETWEEN '${aux46_omite_desde}' AND '${aux46_omite_hasta}' `;
      } else {
        queryWhere = queryWhere + ` AND d.aux46 BETWEEN '${aux46_desde}' AND '${aux46_hasta}'`;
      }
    }

    if (aux47_desde && aux47_hasta) {
      if (aux47_omite_desde && aux47_omite_hasta) {
        queryWhere = queryWhere + ` AND d.aux47 BETWEEN '${aux47_desde}' AND '${aux47_hasta}' AND d.aux47 NOT BETWEEN '${aux47_omite_desde}' AND '${aux47_omite_hasta}' `;
      } else {
        queryWhere = queryWhere + ` AND d.aux47 BETWEEN '${aux47_desde}' AND '${aux47_hasta}'`;
      }
    }

    if (aux48_desde && aux48_hasta) {
      if (aux48_omite_desde && aux48_omite_hasta) {
        queryWhere = queryWhere + ` AND d.aux48 BETWEEN '${aux48_desde}' AND '${aux48_hasta}' AND d.aux48 NOT BETWEEN '${aux48_omite_desde}' AND '${aux48_omite_hasta}' `;
      } else {
        queryWhere = queryWhere + ` AND d.aux48 BETWEEN '${aux48_desde}' AND '${aux48_hasta}'`;
      }
    }

    if (aux49_desde && aux49_hasta) {
      if (aux49_omite_desde && aux49_omite_hasta) {
        queryWhere = queryWhere + ` AND d.aux49 BETWEEN '${aux49_desde}' AND '${aux49_hasta}' AND d.aux49 NOT BETWEEN '${aux49_omite_desde}' AND '${aux49_omite_hasta}' `;
      } else {
        queryWhere = queryWhere + ` AND d.aux49 BETWEEN '${aux49_desde}' AND '${aux49_hasta}'`;
      }
    }

    if (aux50_desde && aux50_hasta) {
      if (aux50_omite_desde && aux50_omite_hasta) {
        queryWhere = queryWhere + ` AND d.aux50 BETWEEN '${aux50_desde}' AND '${aux50_hasta}' AND d.aux50 NOT BETWEEN '${aux50_omite_desde}' AND '${aux50_omite_hasta}' `;
      } else {
        queryWhere = queryWhere + ` AND d.aux50 BETWEEN '${aux50_desde}' AND '${aux50_hasta}'`;
      }
    }

    let subQuery1 = `(SELECT d.id_situacion as situacion, sum(p.importe_total) as pagos
                        FROM deudores d
                        INNER JOIN p_codigos_situacion cs
                        ON d.id_situacion = cs.id_situacion
                        INNER JOIN pagos p
                        ON d.id_deudor = p.id_deudor
                        ${queryWhere}
                        GROUP BY d.id_situacion, cs.descripcion)`;
    let subQuery2 = `(SELECT sum(p.importe_total) as pagos
                        FROM deudores d
                        INNER JOIN p_codigos_situacion cs
                        ON d.id_situacion = cs.id_situacion
                        INNER JOIN pagos p
                        ON d.id_deudor = p.id_deudor
                        ${queryWhere} and p.id_tipo_pago = 1)`;
    let subQuery3 = `((SELECT sum(p.importe_total) as pagos
                        FROM deudores d
                        INNER JOIN p_codigos_situacion cs
                        ON d.id_situacion = cs.id_situacion
                        INNER JOIN pagos p
                        ON d.id_deudor = p.id_deudor
                        ${queryWhere} and p.id_tipo_pago = 1)*100/sum(d.deuda_historica))`;
    let query = `SELECT d.id_situacion, cs.descripcion, count(d.id_situacion) as cantidad, sum(d.deuda_historica) as deuda_historica, pagos.pagos as pagos, (pagos.pagos*100/sum(d.deuda_historica)) as prom
                    FROM deudores d
                    INNER JOIN p_codigos_situacion cs
                    ON d.id_situacion = cs.id_situacion
                    LEFT JOIN ${subQuery1} AS pagos
                    ON pagos.situacion = d.id_situacion                    
                    ${queryWhere}
                    GROUP BY d.id_situacion, cs.descripcion, pagos.pagos
                    UNION ALL      
                    SELECT 100000, 'TOTALES', count(d.id_situacion) as cantidad, sum(d.deuda_historica) as deuda_historica,  ${subQuery2} AS pagos, ${subQuery3} AS prom
                    FROM deudores d
                    INNER JOIN p_codigos_situacion cs
                    ON d.id_situacion = cs.id_situacion
                    ${queryWhere}
                    ORDER BY d.id_situacion`;
    return new Promise(async (resolve, reject) => {
      try {
        let base = await _connection.default.query(query);
        resolve(base);
      } catch (error) {
        console.log(error);
      }
    });
  }
};
exports.default = _default;
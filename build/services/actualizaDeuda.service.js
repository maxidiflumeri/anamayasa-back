"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _connection = _interopRequireDefault(require("../config/db/connection"));

var _index = _interopRequireDefault(require("../models/index.js"));

var _sequelize = require("sequelize");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// PARAMETROS
// param1: id_tipo_actualizacion
// param2: fecha_mora
// param3: deuda_historica
// param4: valor_tasa_interes
// param5: valor1_alic_iva
// param6: valor2_alic_iva_multa
// param7: valor3_tasa_honorarios
// param8: valor4_monto_fijo_recargo
function trunc(x, posiciones = 0) {
  var s = x.toString();
  var decimalLength = s.indexOf('.') + 1;
  var numStr = s.substr(0, decimalLength + posiciones);
  return Number(numStr);
}

var _default = {
  actualizaDeuda: async (deuda_historica, id_tipo_actualizacion, fecha_mora, id_iva, id_empresa, id_deudor) => {
    return new Promise(async (resolve, reject) => {
      try {
        const iva = await _index.default.p_tipos_iva.findAll({
          where: {
            id_tipo_iva: id_iva
          }
        });
        const tasa_interes = await _index.default.p_tasas_interes.findAll({
          where: {
            id_empresa: id_empresa
          }
        });
        const pagos = await _index.default.pagos.findAll({
          where: {
            id_deudor: id_deudor
          }
        });
        let pagosAcum = 0;
        pagos.forEach(pago => {
          if ((pago.id_tipo_pago == 0 || pago.id_tipo_pago == 1) && pago.anulado == 0) {
            pagosAcum = pagosAcum + pago.importe_total;
          }
        });
        deuda_historica = deuda_historica - pagosAcum;
        const recargo = await _connection.default.query('DECLARE @RES VARCHAR(MAX) EXEC sp_calcula_actualizado :param1, :param2, :param3, :param4, :param5, :param6, :param7, :param8, @RES output select @RES as interes', {
          replacements: {
            param1: id_tipo_actualizacion,
            param2: fecha_mora || null,
            param3: deuda_historica,
            param4: tasa_interes[0] ? tasa_interes[0].valor : 0,
            param5: iva[0].valor2 || 0,
            param6: iva[0].valor3 || 0,
            param7: iva[0].valor4 || 0,
            param8: iva[0].valor5 || 0
          },
          type: _sequelize.QueryTypes.SELECT
        });
        const deuda_actualizada = deuda_historica + parseFloat(recargo[0].interes);
        resolve(trunc(deuda_actualizada, 2));
      } catch (error) {
        console.log(error);
      }
    });
  }
};
exports.default = _default;
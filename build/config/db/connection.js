"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = require("sequelize");

var _constantes = _interopRequireDefault(require("../shared/constantes.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { QueryTypes } from 'sequelize'
// import xlsService from '../../services/exportXls.service'
// const sequelize = new Sequelize(constantes.DB.database, constantes.DB.username, constantes.DB.password, constantes.DB);
const sequelize = new _sequelize.Sequelize(_constantes.default.DB); // sequelize.query('EXEC sp_deudor 44,44,41', {type: QueryTypes.SELECT}).then(resultado => {
//     console.log('entrooooo')
//     console.log(resultado.length)
//     const sheetNames = ['deudor', 'telefonos', 'mails', 'direcciones', 'facturas']
//     const sheetColumns = []
//     const objectKeys = []
//     for (let index = 0; index < resultado.length; index++) {
//         const element = resultado[index];
//         const columns = []
//         const keys = []
//         for(var key in element){
//             columns.push(key)
//             keys.push(element[key])
//         }
//         sheetColumns.push(columns)   
//         objectKeys.push(keys)  
//     }
//     xlsService.exportarExcel(sheetNames, sheetColumns, objectKeys, './files/38802635.xlsx')    
// })

var _default = sequelize;
exports.default = _default;
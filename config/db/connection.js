import { Sequelize } from 'sequelize';
import constantes from '../shared/constantes.js'
// import { QueryTypes } from 'sequelize'
// import xlsService from '../../services/exportXls.service'
// const sequelize = new Sequelize(constantes.DB.database, constantes.DB.username, constantes.DB.password, constantes.DB);
const sequelize = new Sequelize(constantes.DB);


// sequelize.query('EXEC sp_deudor 38802635', {type: QueryTypes.SELECT}).then(resultado => {
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

export default sequelize
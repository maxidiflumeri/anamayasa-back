import { Sequelize } from 'sequelize';
import constantes from '../shared/constantes.js'

const sequelize = new Sequelize(constantes.DB.database, constantes.DB.username, constantes.DB.password, constantes.DB);
console.log('Host: ' + constantes.DB.host)
export default sequelize
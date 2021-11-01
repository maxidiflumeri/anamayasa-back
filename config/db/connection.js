import { Sequelize } from 'sequelize';
import constantes from '../shared/constantes.js'
// const sequelize = new Sequelize(constantes.DB.database, constantes.DB.username, constantes.DB.password, constantes.DB);
const sequelize = new Sequelize(constantes.DB);

export default sequelize
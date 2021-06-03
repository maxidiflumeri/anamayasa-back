import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
    path: path.resolve(__dirname, process.env.NODE_ENV + '.env')
  });  

const constantes = {
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
    DB: {
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST,
      dialect: process.env.DB_DIALECT,
      logging: process.env.DB_LOGGING == 'true' ? true : false
    }    
}

export default constantes
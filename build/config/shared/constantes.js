"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config({
  path: _path.default.resolve(__dirname, process.env.NODE_ENV + '.env')
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
};
var _default = constantes;
exports.default = _default;
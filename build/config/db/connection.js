"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = require("sequelize");

var _constantes = _interopRequireDefault(require("../shared/constantes.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const sequelize = new Sequelize(constantes.DB.database, constantes.DB.username, constantes.DB.password, constantes.DB);
const sequelize = new _sequelize.Sequelize(_constantes.default.DB);
var _default = sequelize;
exports.default = _default;
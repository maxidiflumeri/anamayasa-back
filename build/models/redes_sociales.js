"use strict";

const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('redes_sociales', {
    id_deudor: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'deudores',
        key: 'id_deudor'
      }
    },
    usuario: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    id_red_social: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'p_redes_sociales',
        key: 'id_red_social'
      }
    }
  }, {
    sequelize,
    tableName: 'redes_sociales',
    schema: 'dbo',
    timestamps: false,
    indexes: [{
      name: "PK_redes_sociales",
      unique: true,
      fields: [{
        name: "id_deudor"
      }, {
        name: "usuario"
      }, {
        name: "id_red_social"
      }]
    }]
  });
};
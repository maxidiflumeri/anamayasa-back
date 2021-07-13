"use strict";

const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('correos', {
    id_deudor: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'deudores',
        key: 'id_deudor'
      }
    },
    correo: {
      type: DataTypes.STRING(200),
      allowNull: false,
      primaryKey: true
    },
    efectivo: {
      type: DataTypes.DECIMAL(1, 0),
      allowNull: false
    },
    id_tipo_correo: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: false,
      references: {
        model: 'p_tipos_correo',
        key: 'id_tipo_correo'
      }
    }
  }, {
    sequelize,
    tableName: 'correos',
    schema: 'dbo',
    timestamps: false,
    indexes: [{
      name: "PK_correos",
      unique: true,
      fields: [{
        name: "id_deudor"
      }, {
        name: "correo"
      }]
    }]
  });
};
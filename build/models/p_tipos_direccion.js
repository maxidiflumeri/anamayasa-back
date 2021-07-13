"use strict";

const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('p_tipos_direccion', {
    id_tipo_direccion: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: false,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    aux1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    aux2: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'p_tipos_direccion',
    schema: 'dbo',
    timestamps: false,
    indexes: [{
      name: "PK_p_tipos_direccion",
      unique: true,
      fields: [{
        name: "id_tipo_direccion"
      }]
    }]
  });
};
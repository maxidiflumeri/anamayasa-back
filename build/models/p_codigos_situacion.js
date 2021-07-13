"use strict";

const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('p_codigos_situacion', {
    id_situacion: {
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
    tableName: 'p_codigos_situacion',
    schema: 'dbo',
    timestamps: false,
    indexes: [{
      name: "PK_p_codigos_situacion",
      unique: true,
      fields: [{
        name: "id_situacion"
      }]
    }]
  });
};
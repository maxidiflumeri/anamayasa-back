"use strict";

const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('p_motivos_no_pago', {
    id_motivo: {
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
    tableName: 'p_motivos_no_pago',
    schema: 'dbo',
    timestamps: false,
    indexes: [{
      name: "PK_p_motivos_no_pago",
      unique: true,
      fields: [{
        name: "id_motivo"
      }]
    }]
  });
};
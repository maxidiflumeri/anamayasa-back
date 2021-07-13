"use strict";

const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('p_tipos_iva', {
    id_tipo_iva: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: false,
      primaryKey: true
    },
    valor1: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: false
    },
    valor2: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    valor3: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    valor4: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    valor5: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
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
    tableName: 'p_tipos_iva',
    schema: 'dbo',
    timestamps: false,
    indexes: [{
      name: "PK_p_tipos_iva",
      unique: true,
      fields: [{
        name: "id_tipo_iva"
      }]
    }]
  });
};
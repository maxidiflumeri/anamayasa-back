"use strict";

const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('vinculos', {
    id_vinculo: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_deudor: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: false,
      references: {
        model: 'deudores',
        key: 'id_deudor'
      }
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    id_tipo_parentesco: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: false,
      references: {
        model: 'p_tipos_parentesco',
        key: 'id_tipo_parentesco'
      }
    },
    telefono: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: true
    },
    correo: {
      type: DataTypes.STRING(200),
      allowNull: true
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
    tableName: 'vinculos',
    schema: 'dbo',
    timestamps: false
  });
};
"use strict";

const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('direcciones', {
    id_direccion: {
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
    calle: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    numero: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: true
    },
    piso: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    departamento: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    entrada: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    escalera: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    cod_postal: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    localidad: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    provincia: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    efectivo: {
      type: DataTypes.DECIMAL(1, 0),
      allowNull: false
    },
    id_tipo_direccion: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: false,
      references: {
        model: 'p_tipos_direccion',
        key: 'id_tipo_direccion'
      }
    }
  }, {
    sequelize,
    tableName: 'direcciones',
    schema: 'dbo',
    timestamps: false,
    indexes: [{
      name: "PK_direcciones",
      unique: true,
      fields: [{
        name: "id_direccion"
      }]
    }]
  });
};
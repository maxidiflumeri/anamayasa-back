"use strict";

const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('recibos_cab', {
    id_recibo: {
      type: DataTypes.STRING(200),
      allowNull: false,
      primaryKey: true
    },
    id_deudor: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: false,
      references: {
        model: 'deudores',
        key: 'id_deudor'
      }
    },
    id_usuario: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'id_usuario'
      }
    },
    fecha_deposito: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha_recibo: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    nro_lote: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: true
    },
    anulado: {
      type: DataTypes.DECIMAL(1, 0),
      allowNull: false
    },
    fecha_proceso: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    importe_total: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'recibos_cab',
    schema: 'dbo',
    timestamps: false,
    indexes: [{
      name: "PK_recibos_cab",
      unique: true,
      fields: [{
        name: "id_recibo"
      }]
    }]
  });
};
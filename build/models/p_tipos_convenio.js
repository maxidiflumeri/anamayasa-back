"use strict";

const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('p_tipos_convenio', {
    id_tipo_convenio: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: false,
      primaryKey: true
    },
    id_empresa: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: false,
      references: {
        model: 'empresas',
        key: 'id_empresa'
      }
    },
    descripcion: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    max_cuotas: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: false
    },
    refinanciacion: {
      type: DataTypes.DECIMAL(1, 0),
      allowNull: false
    },
    sobre_historico: {
      type: DataTypes.DECIMAL(1, 0),
      allowNull: false
    },
    anticipo_sobre_historico: {
      type: DataTypes.DECIMAL(1, 0),
      allowNull: false
    },
    anticipo0: {
      type: DataTypes.DECIMAL(1, 0),
      allowNull: true
    },
    anticipo1: {
      type: DataTypes.DECIMAL(1, 0),
      allowNull: true
    },
    anticipo2: {
      type: DataTypes.DECIMAL(1, 0),
      allowNull: true
    },
    anticipo3: {
      type: DataTypes.DECIMAL(1, 0),
      allowNull: true
    },
    anticipo4: {
      type: DataTypes.DECIMAL(1, 0),
      allowNull: true
    },
    anticipo5: {
      type: DataTypes.DECIMAL(1, 0),
      allowNull: true
    },
    anticipo6: {
      type: DataTypes.DECIMAL(1, 0),
      allowNull: true
    },
    anticipo7: {
      type: DataTypes.DECIMAL(1, 0),
      allowNull: true
    },
    anticipo8: {
      type: DataTypes.DECIMAL(1, 0),
      allowNull: true
    },
    anticipo9: {
      type: DataTypes.DECIMAL(1, 0),
      allowNull: true
    },
    anticipo10: {
      type: DataTypes.DECIMAL(1, 0),
      allowNull: true
    },
    anticipo11: {
      type: DataTypes.DECIMAL(1, 0),
      allowNull: true
    },
    anticipo12: {
      type: DataTypes.DECIMAL(1, 0),
      allowNull: true
    },
    porc_anticipo_0: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: true
    },
    porc_anticipo_1: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: true
    },
    porc_anticipo_2: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: true
    },
    porc_anticipo_3: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: true
    },
    porc_anticipo_4: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: true
    },
    porc_anticipo_5: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: true
    },
    porc_anticipo_6: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: true
    },
    porc_anticipo_7: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: true
    },
    porc_anticipo_8: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: true
    },
    porc_anticipo_9: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: true
    },
    porc_anticipo_10: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: true
    },
    porc_anticipo_11: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: true
    },
    porc_anticipo_12: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: true
    },
    monto_min_anticipo_0: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    monto_min_anticipo_1: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    monto_min_anticipo_2: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    monto_min_anticipo_3: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    monto_min_anticipo_4: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    monto_min_anticipo_5: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    monto_min_anticipo_6: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    monto_min_anticipo_7: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    monto_min_anticipo_8: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    monto_min_anticipo_9: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    monto_min_anticipo_10: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    monto_min_anticipo_11: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    monto_min_anticipo_12: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    limite_min_cuota_0: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    limite_min_cuota_1: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    limite_min_cuota_2: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    limite_min_cuota_3: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    limite_min_cuota_4: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    limite_min_cuota_5: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    limite_min_cuota_6: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    limite_min_cuota_7: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    limite_min_cuota_8: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    limite_min_cuota_9: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    limite_min_cuota_10: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    limite_min_cuota_11: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    limite_min_cuota_12: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    limite_quita_cuota_0: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    limite_quita_cuota_1: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    limite_quita_cuota_2: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    limite_quita_cuota_3: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    limite_quita_cuota_4: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    limite_quita_cuota_5: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    limite_quita_cuota_6: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    limite_quita_cuota_7: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    limite_quita_cuota_8: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    limite_quita_cuota_9: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    limite_quita_cuota_10: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    limite_quita_cuota_11: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    limite_quita_cuota_12: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    maximo_quita_cuota_0: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    maximo_quita_cuota_1: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    maximo_quita_cuota_2: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    maximo_quita_cuota_3: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    maximo_quita_cuota_4: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    maximo_quita_cuota_5: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    maximo_quita_cuota_6: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    maximo_quita_cuota_7: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    maximo_quita_cuota_8: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    maximo_quita_cuota_9: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    maximo_quita_cuota_10: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    maximo_quita_cuota_11: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    maximo_quita_cuota_12: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    es_libre: {
      type: DataTypes.DECIMAL(1, 0),
      allowNull: false
    },
    aux1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    aux2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    aux3: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    aux4: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    aux5: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'p_tipos_convenio',
    schema: 'dbo',
    timestamps: false,
    indexes: [{
      name: "PK_p_tipos_convenio",
      unique: true,
      fields: [{
        name: "id_tipo_convenio"
      }]
    }]
  });
};
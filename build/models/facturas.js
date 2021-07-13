"use strict";

const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('facturas', {
    id_factura: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nro_factura: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    id_convenio: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: true,
      references: {
        model: 'convenios',
        key: 'convenio'
      }
    },
    id_deudor: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: false,
      references: {
        model: 'deudores',
        key: 'id_deudor'
      }
    },
    fecha_comprobante: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha_vencimiento: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    cant_cartas: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: true
    },
    id_correo: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: true
    },
    clave_pago: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    importe1: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: false
    },
    importe2: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    importe3: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    importe4: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    importe5: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    aux1: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    aux2: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    aux3: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    aux4: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    aux5: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    aux6: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    aux7: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    aux8: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    aux9: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    aux10: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    aux11: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    aux12: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    aux13: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    aux14: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    aux15: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'facturas',
    schema: 'dbo',
    timestamps: false,
    indexes: [{
      name: "PK_facturas",
      unique: true,
      fields: [{
        name: "nro_factura"
      }, {
        name: "id_deudor"
      }]
    }]
  });
};
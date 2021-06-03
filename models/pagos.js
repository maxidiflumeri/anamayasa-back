const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('pagos', {
    id_pago: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nro_comprobante: {
      type: DataTypes.STRING(100),
      allowNull: false      
    },
    id_deudor: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: false,      
      references: {
        model: 'deudores',
        key: 'id_deudor'
      }
    },
    id_entidad: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: false,
      references: {
        model: 'p_entidades_recaudadoras',
        key: 'id_banco'
      }
    },
    id_tipo_pago: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: false,
      references: {
        model: 'p_tipos_pago',
        key: 'id_tipo_pago'
      }
    },
    fecha_pago: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha_aplicacion: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha_rendicion: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    importe_total: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: false
    },
    importe_aplicado: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    comentario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fecha_registro: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    anulado: {
      type: DataTypes.DECIMAL(1, 0),
      allowNull: true
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
    },
    aux6: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    aux7: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    aux8: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    aux9: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    aux10: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pagos',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_pagos",
        unique: true,
        fields: [
          { name: "nro_comprobante" },
          { name: "id_deudor" },
        ]
      },
    ]
  });
};

"use strict";

const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('convenios', {
    id_convenio: {
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
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    cuotas: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: false
    },
    id_tipo: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: false,
      references: {
        model: 'p_tipos_convenio',
        key: 'id_tipo_convenio'
      }
    },
    importe: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: false
    },
    id_tasa: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: false,
      references: {
        model: 'p_tasas_interes',
        key: 'id_tasa'
      }
    },
    id_direccion: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: true,
      references: {
        model: 'direcciones',
        key: 'id_direccion'
      }
    },
    lote_informado: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: true
    },
    firmado: {
      type: DataTypes.DECIMAL(1, 0),
      allowNull: true
    },
    deuda_actualizada: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    deuda_historica: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    monto: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    fecha1: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha2: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha3: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha4: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha5: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha6: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha7: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha8: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha9: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha10: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha11: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha12: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    importe1: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
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
    importe6: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    importe7: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    importe8: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    importe9: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    importe10: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    importe11: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    importe12: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    anulado: {
      type: DataTypes.DECIMAL(1, 0),
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
    }
  }, {
    sequelize,
    tableName: 'convenios',
    schema: 'dbo',
    timestamps: false,
    indexes: [{
      name: "PK_convenios",
      unique: true,
      fields: [{
        name: "id_convenio"
      }]
    }]
  });
};
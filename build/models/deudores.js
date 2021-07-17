"use strict";

const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('deudores', {
    id_deudor: {
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
    id_tipo_actualizacion: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: false,
      references: {
        model: 'p_tipos_actualizacion',
        key: 'id_tipo_actualizacion'
      }
    },
    nro_cliente1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    nro_cliente2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    nro_cliente3: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    remesa: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: false
    },
    nombre_apellido: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    nombre_contacto: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    tipo_doc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    nro_doc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    id_iva: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: false,
      references: {
        model: 'p_tipos_iva',
        key: 'id_tipo_iva'
      }
    },
    fecha_alta: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fecha_mora: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fecha_cierra: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fecha_baja: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fecha_recepcion: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fecha_agenda: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cant_cartas: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    id_correo: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: true,
      references: {
        model: 'p_codigos_correo',
        key: 'id_correo'
      }
    },
    id_situacion: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: false,
      references: {
        model: 'p_codigos_situacion',
        key: 'id_situacion'
      }
    },
    id_gestion: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: false,
      references: {
        model: 'p_codigos_gestion',
        key: 'id_gestion'
      }
    },
    fecha_cambio_sit: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha_cambio_gest: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    deuda_historica: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: false
    },
    id_politica: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: false,
      references: {
        model: 'politicas',
        key: 'id_politica'
      }
    },
    id_motivo_no_pago: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: true,
      references: {
        model: 'p_motivos_no_pago',
        key: 'id_motivo'
      }
    },
    nro_contacto_llamador: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: true
    },
    nro_base_llamador: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: true
    },
    pagos_acumulados: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    pagos_fuera_gestion: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    aux1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aux2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aux3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aux4: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aux5: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aux6: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aux7: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aux8: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aux9: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aux10: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aux11: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aux12: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aux13: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aux14: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aux15: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aux16: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aux17: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aux18: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aux19: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aux20: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aux21: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aux22: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aux23: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aux24: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aux25: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aux26: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aux27: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aux28: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aux29: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aux30: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aux31: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aux32: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aux33: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aux34: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aux35: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aux36: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aux37: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aux38: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aux39: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aux40: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aux41: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aux42: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aux43: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aux44: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aux45: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aux46: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aux47: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aux48: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aux49: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aux50: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'deudores',
    schema: 'dbo',
    timestamps: false,
    indexes: [{
      name: "PK_deudores",
      unique: true,
      fields: [{
        name: "id_deudor"
      }]
    }]
  });
};
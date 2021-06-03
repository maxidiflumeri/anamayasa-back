const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('recibos_det', {
    id_recibo_det: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_recibo: {
      type: DataTypes.STRING(200),
      allowNull: false,
      references: {
        model: 'recibos_cab',
        key: 'id_recibo'
      }
    },
    id_banco: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: false,
      references: {
        model: 'p_entidades_recaudadoras',
        key: 'id_banco'
      }
    },
    tipo_recibo: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    id_forma_pago: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: false,
      references: {
        model: 'p_formas_pago',
        key: 'id_forma'
      }
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    importe: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: false
    },
    nro_comprobante: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    observaciones: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    honorarios: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: false
    },
    neto: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: false
    },
    iva: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: false
    },
    retencion: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: false
    },
    total: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'recibos_det',
    schema: 'dbo',
    timestamps: false
  });
};

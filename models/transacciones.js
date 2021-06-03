const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transacciones', {
    id_transaccion: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_tipo_transaccion: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: false,
      references: {
        model: 'p_tipos_transaccion',
        key: 'id_tipo_transaccion'
      }
    },
    id_usuario: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'id_usuario'
      }
    },
    id_deudor: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: false,
      references: {
        model: 'deudores',
        key: 'id_deudor'
      }
    },
    fecha_inicio: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fecha_fin: {
      type: DataTypes.DATE,
      allowNull: true
    },
    detalle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id_llamada: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: true
    },
    grabacion: {
      type: DataTypes.STRING(100),
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
    }
  }, {
    sequelize,
    tableName: 'transacciones',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_transacciones",
        unique: true,
        fields: [
          { name: "id_transaccion" },
        ]
      },
    ]
  });
};

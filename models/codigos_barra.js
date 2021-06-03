const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('codigos_barra', {
    clave_pago: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    id_deudor: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: false,
      references: {
        model: 'deudores',
        key: 'id_deudor'
      }
    },
    importe: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    cuota: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    nro_convenio: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: true
    },
    saldo: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    fecha_vencimiento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    codigo_barras: {
      type: DataTypes.STRING,
      allowNull: true
    },
    gestor: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'codigos_barra',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_codigos_barra_1",
        unique: true,
        fields: [
          { name: "clave_pago" },
        ]
      },
    ]
  });
};

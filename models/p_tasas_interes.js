const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('p_tasas_interes', {
    id_tasa: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: false,
      primaryKey: true
    },
    id_empresa: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: false,
      references: {
        model: 'empresas',
        key: 'id_empresa'
      }
    },
    valor: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    aux1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    aux2: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'p_tasas_interes',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_p_tasas_interes",
        unique: true,
        fields: [
          { name: "id_tasa" },
        ]
      },
    ]
  });
};

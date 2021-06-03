const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('p_tipos_pago', {
    id_tipo_pago: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: false,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    visible: {
      type: DataTypes.DECIMAL(1,0),
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
    tableName: 'p_tipos_pago',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_p_tipos_pago",
        unique: true,
        fields: [
          { name: "id_tipo_pago" },
        ]
      },
    ]
  });
};

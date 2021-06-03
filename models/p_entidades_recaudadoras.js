const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('p_entidades_recaudadoras', {
    id_banco: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: false,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.STRING(100),
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
    tableName: 'p_entidades_recaudadoras',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_p_bancos",
        unique: true,
        fields: [
          { name: "id_banco" },
        ]
      },
    ]
  });
};

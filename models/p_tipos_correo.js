const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('p_tipos_correo', {
    id_tipo_correo: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: false,
      primaryKey: true
    },
    id_empresa: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: false
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
    tableName: 'p_tipos_correo',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_p_tipos_correo",
        unique: true,
        fields: [
          { name: "id_tipo_correo" },
        ]
      },
    ]
  });
};

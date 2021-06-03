const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('telefonos_borrados', {
    nro_doc: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    telefono: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'id_usuario'
      }
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
    tableName: 'telefonos_borrados',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_telefonos_borrados",
        unique: true,
        fields: [
          { name: "nro_doc" },
          { name: "telefono" },
        ]
      },
    ]
  });
};

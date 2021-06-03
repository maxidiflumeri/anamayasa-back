const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('items_procesos', {
    id_item: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: false,
      primaryKey: true
    },
    id_grupo: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: true,
      references: {
        model: 'grupos_procesos',
        key: 'id_grupo'
      }
    },
    nombre_item: {
      type: DataTypes.STRING,
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    id_rol: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: true
    },
    path: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'items_procesos',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_items_procesos",
        unique: true,
        fields: [
          { name: "id_item" },
        ]
      },
    ]
  });
};

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('telefonos', {
    id_deudor: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'deudores',
        key: 'id_deudor'
      }
    },
    telefono: {
      type: DataTypes.STRING(13),
      allowNull: false,
      primaryKey: true
    },
    efectivo: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false
    },
    id_tipo_telefono: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: false,
      references: {
        model: 'p_tipos_telefono',
        key: 'id_tipo_telefono'
      }
    }
  }, {
    sequelize,
    tableName: 'telefonos',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_telefonos",
        unique: true,
        fields: [
          { name: "id_deudor" },
          { name: "telefono" },
        ]
      },
    ]
  });
};

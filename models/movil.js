const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('movil', {
    id_movil: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: false,
      primaryKey: true
    },
    operadora: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    servicio: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    modalidad: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    localidad: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    quince: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    inter: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    urbano: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    desde: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    hasta: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    desdef: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    hastaf: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    desde15: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    hasta15: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    carf: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    carcel: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    fij: {
      type: DataTypes.DECIMAL(2, 0),
      allowNull: true,
    },
    cel: {
      type: DataTypes.DECIMAL(2, 0),
      allowNull: true,
    },
    empresa: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
  }, {
    sequelize,
    tableName: 'movil',
    schema: 'dbo',
    timestamps: false,
    indexes: [
    ]
  });
};
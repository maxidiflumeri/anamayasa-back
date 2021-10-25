"use strict";

const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('grupos_procesos', {
    id_grupo: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: false,
      primaryKey: true
    },
    nombre_grupo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id_rol: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: false
    },
    path: {
      type: DataTypes.STRING,
      allowNull: false
    },
    foto: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'grupos_procesos',
    schema: 'dbo',
    timestamps: false,
    indexes: [{
      name: "PK_grupos_procesos",
      unique: true,
      fields: [{
        name: "id_grupo"
      }]
    }]
  });
};
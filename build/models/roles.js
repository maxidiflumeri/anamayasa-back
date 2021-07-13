"use strict";

const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('roles', {
    id_rol: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'roles',
    schema: 'dbo',
    timestamps: false,
    indexes: [{
      name: "PK_roles",
      unique: true,
      fields: [{
        name: "id_rol"
      }]
    }]
  });
};
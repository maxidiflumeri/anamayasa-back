"use strict";

const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('p_codigos_tabla', {
    id_tabla: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: false,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'p_codigos_tabla',
    schema: 'dbo',
    timestamps: false,
    indexes: [{
      name: "PK_p_codigos_tabla",
      unique: true,
      fields: [{
        name: "id_tabla"
      }]
    }]
  });
};
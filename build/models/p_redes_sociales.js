"use strict";

const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('p_redes_sociales', {
    id_red_social: {
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
    tableName: 'p_redes_sociales',
    schema: 'dbo',
    timestamps: false,
    indexes: [{
      name: "PK_p_redes_sociales",
      unique: true,
      fields: [{
        name: "id_red_social"
      }]
    }]
  });
};
"use strict";

const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('p_template_correos', {
    id_template: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_empresa: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: false,
      references: {
        model: 'empresas',
        key: 'id_empresa'
      }
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    texto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    asunto: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'p_template_correos',
    schema: 'dbo',
    timestamps: false,
    indexes: [{
      name: "PK_p_template_correos",
      unique: true,
      fields: [{
        name: "id_template"
      }]
    }]
  });
};
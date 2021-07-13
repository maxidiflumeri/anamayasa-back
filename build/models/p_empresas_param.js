"use strict";

const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('p_empresas_param', {
    id_empresa: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'empresas',
        key: 'id_empresa'
      }
    },
    id_tabla: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'p_codigos_tabla',
        key: 'id_tabla'
      }
    },
    id_opcion: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: false,
      primaryKey: true
    },
    visible: {
      type: DataTypes.DECIMAL(1, 0),
      allowNull: false
    },
    bloqueante: {
      type: DataTypes.DECIMAL(1, 0),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'p_empresas_param',
    schema: 'dbo',
    timestamps: false,
    indexes: [{
      name: "PK_p_empresas_param",
      unique: true,
      fields: [{
        name: "id_empresa"
      }, {
        name: "id_tabla"
      }, {
        name: "id_opcion"
      }]
    }]
  });
};
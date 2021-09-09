"use strict";

const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('tareas', {
    id_tarea: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    proceso: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    destinatario1: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    destinatario2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    destinatario3: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    destinatario4: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    destinatario5: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    copia1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    copia2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    copia3: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    copia4: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    copia5: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    patron: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    asunto: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    cuerpo: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    activa: {
      type: DataTypes.DECIMAL(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tareas',
    schema: 'dbo',
    timestamps: false // indexes: [
    //   {
    //     name: "PK_roles",
    //     unique: true,
    //     fields: [
    //       { name: "id_rol" },
    //     ]
    //   },
    // ]

  });
};
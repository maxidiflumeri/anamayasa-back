"use strict";

const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('politicas', {
    id_politica: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: false,
      primaryKey: true
    },
    id_empresa: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: false,
      references: {
        model: 'empresas',
        key: 'id_empresa'
      }
    },
    descripcion: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    id_usuario: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: false
    },
    fecha_creacion: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    txt_politica1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txt_politica2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txt_politica3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txt_politica4: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txt_politica5: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txt_politica6: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txt_politica7: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txt_politica8: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txt_speech: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txt_backoffice: {
      type: DataTypes.STRING,
      allowNull: true
    },
    objetivo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    envio_mail: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    envio_sms: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    correo: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    aux1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    aux2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    aux3: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    aux4: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    aux5: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'politicas',
    schema: 'dbo',
    timestamps: false,
    indexes: [{
      name: "PK_politicas",
      unique: true,
      fields: [{
        name: "id_politica"
      }]
    }]
  });
};
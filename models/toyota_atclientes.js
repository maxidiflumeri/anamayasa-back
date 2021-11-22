const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('toyota_atclientes', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        id_llamada: {
            type: DataTypes.INTEGER,
            allowNull: false,            
            autoIncrement: false
        },
        id_gestion: {
            type: DataTypes.INTEGER,
            allowNull: false,            
            autoIncrement: false
        },
        id_deudor: {
            type: DataTypes.DECIMAL(18, 0),            
            allowNull: false,
            references: {
                model: 'deudores',
                key: 'id_deudor'
            }
        },
        id_usuario: {
            type: DataTypes.DECIMAL(18, 0),
            allowNull: false,            
            references: {
                model: 'usuarios',
                key: 'id_usuario'
            }
        },
        legajo_usuario: {
            type: DataTypes.DECIMAL(18, 0),
            allowNull: false,
        },
        fecha: {
            type: DataTypes.DATEONLY,
            allowNull: true
        }
    }, {
        sequelize,
        tableName: 'toyota_atclientes',
        schema: 'dbo',
        timestamps: false
    });
};
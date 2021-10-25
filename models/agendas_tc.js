const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('agendas_tc', {
        id_agenda: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },        
        id_deudor: {
            type: DataTypes.DECIMAL(18, 0),            
            allowNull: false,
            references: {
                model: 'deudores',
                key: 'id_deudor'
            }
        },
        telefono: {
            type: DataTypes.INTEGER,
            allowNull: false,            
            autoIncrement: false
        },
        fecha: {
            type: DataTypes.DATEONLY,
            allowNull: false           
        },
        hora: {
            type: DataTypes.STRING(5),
            allowNull: false,
        },
        estado: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        sequelize,
        tableName: 'agendas_tc',
        schema: 'dbo',
        timestamps: false
    });
};
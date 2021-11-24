const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('toyota_gestion', {
        id_gestion: {
            type: DataTypes.DECIMAL(18, 0),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        id_asignacion: {
            type: DataTypes.STRING(100),
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
        id_origen: {
            type: DataTypes.DECIMAL(18, 0),
            allowNull: false,
            references: {
                model: 'p_codigos_situacion',
                key: 'id_situacion'
            }
        },
        id_respuesta: {
            type: DataTypes.DECIMAL(18, 0),
            allowNull: false,
            references: {
                model: 'p_codigos_gestion',
                key: 'id_gestion'
            }
        },
        fecha_pago: {
            type: DataTypes.DATE,
            allowNull: true
        },
        id_entidad: {
            type: DataTypes.DECIMAL(18, 0),
            allowNull: true,
            references: {
                model: 'p_entidades_recaudadoras',
                key: 'id_banco'
            }
        },
        id_tipo_pago: {
            type: DataTypes.DECIMAL(18, 0),
            allowNull: true,
            references: {
                model: 'p_tipos_pago',
                key: 'id_tipo_pago'
            }
        },
        importe_pago: {
            type: DataTypes.DECIMAL(18, 2),
            allowNull: true
        },
        comentario: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fecha_contacto: {
            type: DataTypes.DATE,
            allowNull: true
        },
        id_usuario: {
            type: DataTypes.DECIMAL(18, 0),
            allowNull: false,
            references: {
                model: 'usuarios',
                key: 'id_usuario'
            }
        },
        fecha_informe: {
            type: DataTypes.DATE,
            allowNull: true
        }

    }, {
        sequelize,
        tableName: 'toyota_gestion',
        schema: 'dbo',
        timestamps: false
    });
};
const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuarios', {
    id_usuario: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: false,
      primaryKey: true
    },

    legajo_neotel: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: false      
    },

    id_grupo: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: true,
      references: {
        model: 'p_grupos_trabajo',
        key: 'id_grupo'
      }
    },
    nombre_completo: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    cuil: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    dni: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    hora_ingreso: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    jornada_laboral: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    break1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    break2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    break3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    break4: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    break5: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    correo: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    id_rol: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: false,
      references: {
        model: 'roles',
        key: 'id_rol'
      }
    },
    aux1: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    aux2: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    aux3: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    aux4: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    aux5: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    aux6: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    aux7: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    aux8: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    aux9: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    aux10: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'usuarios',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_usuarios",
        unique: true,
        fields: [
          { name: "id_usuario" },
        ]
      },
    ]
  });
};

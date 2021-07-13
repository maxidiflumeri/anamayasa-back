"use strict";

const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('empresas', {
    id_empresa: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: false,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    lbl_id_empresa_deu: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    lbl_id_deudor_deu: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    lbl_nro_cliente1_deu: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    lbl_nro_cliente2_deu: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    lbl_remesa_deu: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    lbl_nombre_apellido_deu: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    lbl_nombre_contacto_deu: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    lbl_tipo_doc_deu: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    lbl_nro_doc_deu: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    lbl_id_iva_deu: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    lbl_fecha_alta_deu: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    lbl_fecha_mora_deu: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    lbl_fecha_cierra_deu: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    lbl_fecha_baja_deu: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    lbl_fecha_recepcion_deu: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    lbl_fecha_agenda_deu: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    lbl_cant_cartas_deu: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    lbl_id_correo_deu: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    lbl_id_situacion_deu: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    lbl_id_gestion_deu: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    lbl_fecha_cambio_sit_deu: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    lbl_fecha_cambio_gest_deu: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    lbl_deuda_historica_deu: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    lbl_id_motivo_no_pago_deu: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    lbl_id_politica_deu: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    lbl_id_contacto_neotel_deu: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    lbl_id_base_neotel_deu: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    lbl_nro_factura_fact: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    lbl_fecha_comprobante_fact: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    lbl_fecha_vencimiento_fact: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    lbl_importe_fact: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    lbl_cant_cartas_fact: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    lbl_id_correo_fact: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    lbl_codigo_barras_fact: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    lbl_codigo_pago_fact: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    lbl_aux1_fact: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lbl_aux2_fact: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lbl_aux3_fact: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lbl_aux4_fact: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lbl_aux5_fact: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lbl_aux6_fact: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lbl_aux7_fact: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lbl_aux8_fact: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lbl_aux9_fact: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lbl_aux10_fact: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lbl_aux11_fact: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lbl_aux12_fact: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lbl_aux13_fact: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lbl_aux14_fact: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lbl_aux15_fact: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lbl_aux16_fact: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lbl_aux17_fact: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lbl_aux18_fact: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lbl_aux19_fact: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lbl_aux20_fact: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lbl_aux1_deu: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lbl_aux2_deu: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lbl_aux3_deu: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lbl_aux4_deu: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lbl_aux5_deu: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lbl_aux6_deu: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lbl_aux7_deu: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lbl_aux8_deu: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lbl_aux9_deu: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lbl_aux10_deu: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lbl_aux11_deu: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lbl_aux12_deu: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lbl_aux13_deu: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lbl_aux14_deu: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lbl_aux15_deu: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lbl_aux16_deu: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lbl_aux17_deu: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lbl_aux18_deu: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lbl_aux19_deu: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lbl_aux20_deu: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lbl_aux21_deu: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lbl_aux22_deu: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lbl_aux23_deu: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lbl_aux24_deu: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lbl_aux25_deu: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lbl_aux26_deu: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lbl_aux27_deu: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lbl_aux28_deu: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lbl_aux29_deu: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lbl_aux30_deu: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lbl_aux31_deu: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lbl_aux32_deu: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lbl_aux33_deu: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lbl_aux34_deu: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lbl_aux35_deu: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lbl_aux36_deu: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lbl_aux37_deu: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lbl_aux38_deu: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lbl_aux39_deu: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lbl_aux40_deu: {
      type: DataTypes.STRING(100),
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
    tableName: 'empresas',
    schema: 'dbo',
    timestamps: false,
    indexes: [{
      name: "PK_empresas",
      unique: true,
      fields: [{
        name: "id_empresa"
      }]
    }]
  });
};
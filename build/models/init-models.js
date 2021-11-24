"use strict";

var DataTypes = require("sequelize").DataTypes;

var _codigos_barra = require("./codigos_barra");

var _comentarios = require("./comentarios");

var _convenios = require("./convenios");

var _correos = require("./correos");

var _deudores = require("./deudores");

var _direcciones = require("./direcciones");

var _empresas = require("./empresas");

var _facturas = require("./facturas");

var _grupos_procesos = require("./grupos_procesos");

var _items_procesos = require("./items_procesos");

var _p_codigos_correo = require("./p_codigos_correo");

var _p_codigos_gestion = require("./p_codigos_gestion");

var _p_codigos_situacion = require("./p_codigos_situacion");

var _p_codigos_tabla = require("./p_codigos_tabla");

var _p_empresas_param = require("./p_empresas_param");

var _p_entidades_recaudadoras = require("./p_entidades_recaudadoras");

var _p_formas_pago = require("./p_formas_pago");

var _p_grupos_trabajo = require("./p_grupos_trabajo");

var _p_motivos_no_pago = require("./p_motivos_no_pago");

var _p_numeradores = require("./p_numeradores");

var _p_redes_sociales = require("./p_redes_sociales");

var _p_tasas_interes = require("./p_tasas_interes");

var _p_tipos_actualizacion = require("./p_tipos_actualizacion");

var _p_tipos_convenio = require("./p_tipos_convenio");

var _p_tipos_correo = require("./p_tipos_correo");

var _p_tipos_direccion = require("./p_tipos_direccion");

var _p_tipos_iva = require("./p_tipos_iva");

var _p_tipos_pago = require("./p_tipos_pago");

var _p_tipos_parentesco = require("./p_tipos_parentesco");

var _p_tipos_telefono = require("./p_tipos_telefono");

var _p_tipos_transaccion = require("./p_tipos_transaccion");

var _pagos = require("./pagos");

var _politicas = require("./politicas");

var _recibos_cab = require("./recibos_cab");

var _recibos_det = require("./recibos_det");

var _redes_sociales = require("./redes_sociales");

var _roles = require("./roles");

var _telefonos = require("./telefonos");

var _telefonos_borrados = require("./telefonos_borrados");

var _transacciones = require("./transacciones");

var _usuarios = require("./usuarios");

var _vinculos = require("./vinculos");

var _movil = require("./movil");

var _p_template_correos = require("./p_template_correos");

var _tareas = require("./tareas");

var _toyota_atclientes = require("./toyota_atclientes");

var _agendas_tc = require("./agendas_tc");

var _toyota_gestion = require("./toyota_gestion");

function initModels(sequelize) {
  var codigos_barra = _codigos_barra(sequelize, DataTypes);

  var comentarios = _comentarios(sequelize, DataTypes);

  var convenios = _convenios(sequelize, DataTypes);

  var correos = _correos(sequelize, DataTypes);

  var deudores = _deudores(sequelize, DataTypes);

  var direcciones = _direcciones(sequelize, DataTypes);

  var empresas = _empresas(sequelize, DataTypes);

  var facturas = _facturas(sequelize, DataTypes);

  var grupos_procesos = _grupos_procesos(sequelize, DataTypes);

  var items_procesos = _items_procesos(sequelize, DataTypes);

  var p_codigos_correo = _p_codigos_correo(sequelize, DataTypes);

  var p_codigos_gestion = _p_codigos_gestion(sequelize, DataTypes);

  var p_codigos_situacion = _p_codigos_situacion(sequelize, DataTypes);

  var p_codigos_tabla = _p_codigos_tabla(sequelize, DataTypes);

  var p_empresas_param = _p_empresas_param(sequelize, DataTypes);

  var p_entidades_recaudadoras = _p_entidades_recaudadoras(sequelize, DataTypes);

  var p_formas_pago = _p_formas_pago(sequelize, DataTypes);

  var p_grupos_trabajo = _p_grupos_trabajo(sequelize, DataTypes);

  var p_motivos_no_pago = _p_motivos_no_pago(sequelize, DataTypes);

  var p_numeradores = _p_numeradores(sequelize, DataTypes);

  var p_redes_sociales = _p_redes_sociales(sequelize, DataTypes);

  var p_tasas_interes = _p_tasas_interes(sequelize, DataTypes);

  var p_tipos_actualizacion = _p_tipos_actualizacion(sequelize, DataTypes);

  var p_tipos_convenio = _p_tipos_convenio(sequelize, DataTypes);

  var p_tipos_correo = _p_tipos_correo(sequelize, DataTypes);

  var p_tipos_direccion = _p_tipos_direccion(sequelize, DataTypes);

  var p_tipos_iva = _p_tipos_iva(sequelize, DataTypes);

  var p_tipos_pago = _p_tipos_pago(sequelize, DataTypes);

  var p_tipos_parentesco = _p_tipos_parentesco(sequelize, DataTypes);

  var p_tipos_telefono = _p_tipos_telefono(sequelize, DataTypes);

  var p_tipos_transaccion = _p_tipos_transaccion(sequelize, DataTypes);

  var pagos = _pagos(sequelize, DataTypes);

  var politicas = _politicas(sequelize, DataTypes);

  var recibos_cab = _recibos_cab(sequelize, DataTypes);

  var recibos_det = _recibos_det(sequelize, DataTypes);

  var redes_sociales = _redes_sociales(sequelize, DataTypes);

  var roles = _roles(sequelize, DataTypes);

  var telefonos = _telefonos(sequelize, DataTypes);

  var telefonos_borrados = _telefonos_borrados(sequelize, DataTypes);

  var transacciones = _transacciones(sequelize, DataTypes);

  var usuarios = _usuarios(sequelize, DataTypes);

  var vinculos = _vinculos(sequelize, DataTypes);

  var movil = _movil(sequelize, DataTypes);

  var p_template_correos = _p_template_correos(sequelize, DataTypes);

  var tareas = _tareas(sequelize, DataTypes);

  var toyota_atclientes = _toyota_atclientes(sequelize, DataTypes);

  var agendas_tc = _agendas_tc(sequelize, DataTypes);

  var toyota_gestion = _toyota_gestion(sequelize, DataTypes);

  deudores.belongsToMany(p_redes_sociales, {
    through: redes_sociales,
    foreignKey: "id_deudor",
    otherKey: "id_red_social"
  });
  empresas.belongsToMany(p_codigos_tabla, {
    through: p_empresas_param,
    foreignKey: "id_empresa",
    otherKey: "id_tabla"
  });
  p_codigos_tabla.belongsToMany(empresas, {
    through: p_empresas_param,
    foreignKey: "id_tabla",
    otherKey: "id_empresa"
  });
  p_redes_sociales.belongsToMany(deudores, {
    through: redes_sociales,
    foreignKey: "id_red_social",
    otherKey: "id_deudor"
  });
  codigos_barra.belongsTo(deudores, {
    as: "id_deudor_deudore",
    foreignKey: "id_deudor"
  });
  deudores.hasMany(codigos_barra, {
    as: "codigos_barras",
    foreignKey: "id_deudor"
  });
  comentarios.belongsTo(deudores, {
    as: "id_deudor_deudore",
    foreignKey: "id_deudor"
  });
  deudores.hasMany(comentarios, {
    as: "comentarios",
    foreignKey: "id_deudor"
  });
  agendas_tc.belongsTo(deudores, {
    as: "id_deudor_deudore",
    foreignKey: "id_deudor"
  });
  deudores.hasMany(agendas_tc, {
    as: "agendas_tc",
    foreignKey: "id_deudor"
  });
  toyota_atclientes.belongsTo(deudores, {
    as: "id_deudor_deudore",
    foreignKey: "id_deudor"
  });
  deudores.hasMany(toyota_atclientes, {
    as: "toyota_atclientes",
    foreignKey: "id_deudor"
  });
  toyota_gestion.belongsTo(deudores, {
    as: "id_deudor_deudore",
    foreignKey: "id_deudor"
  });
  deudores.hasMany(toyota_gestion, {
    as: "toyota_gestion",
    foreignKey: "id_deudor"
  });
  toyota_gestion.belongsTo(p_codigos_gestion, {
    as: "id_gestion_p_codigos_gestion",
    foreignKey: "id_gestion"
  });
  p_codigos_gestion.hasMany(toyota_gestion, {
    as: "toyota_gestion",
    foreignKey: "id_respuesta"
  });
  toyota_gestion.belongsTo(p_codigos_situacion, {
    as: "id_situacion_p_codigos_situacion",
    foreignKey: "id_situacion"
  });
  p_codigos_situacion.hasMany(toyota_gestion, {
    as: "toyota_gestion",
    foreignKey: "id_origen"
  });
  toyota_gestion.belongsTo(p_tipos_pago, {
    as: "id_tipo_pago_p_tipos_pago",
    foreignKey: "id_tipo_pago"
  });
  p_tipos_pago.hasMany(toyota_gestion, {
    as: "toyota_gestion",
    foreignKey: "id_tipo_pago"
  });
  toyota_gestion.belongsTo(p_entidades_recaudadoras, {
    as: "id_entidad_recaudadora_p_entidades_recaudadoras",
    foreignKey: "id_banco"
  });
  p_entidades_recaudadoras.hasMany(toyota_gestion, {
    as: "toyota_gestion",
    foreignKey: "id_entidad"
  });
  toyota_gestion.belongsTo(usuarios, {
    as: "id_usuario_usuario",
    foreignKey: "id_usuario"
  });
  usuarios.hasMany(toyota_gestion, {
    as: "toyota_gestion",
    foreignKey: "id_usuario"
  });
  convenios.belongsTo(deudores, {
    as: "id_deudor_deudore",
    foreignKey: "id_deudor"
  });
  deudores.hasMany(convenios, {
    as: "convenios",
    foreignKey: "id_deudor"
  });
  correos.belongsTo(deudores, {
    as: "id_deudor_deudore",
    foreignKey: "id_deudor"
  });
  deudores.hasMany(correos, {
    as: "correos",
    foreignKey: "id_deudor"
  });
  direcciones.belongsTo(deudores, {
    as: "id_deudor_deudore",
    foreignKey: "id_deudor"
  });
  deudores.hasMany(direcciones, {
    as: "direcciones",
    foreignKey: "id_deudor"
  });
  facturas.belongsTo(deudores, {
    as: "id_deudor_deudore",
    foreignKey: "id_deudor"
  });
  facturas.belongsTo(convenios, {
    as: "id_convenio_convenio",
    foreignKey: "id_convenio"
  });
  deudores.hasMany(facturas, {
    as: "facturas",
    foreignKey: "id_deudor"
  });
  pagos.belongsTo(deudores, {
    as: "id_deudor_deudore",
    foreignKey: "id_deudor"
  });
  deudores.hasMany(pagos, {
    as: "pagos",
    foreignKey: "id_deudor"
  });
  recibos_cab.belongsTo(deudores, {
    as: "id_deudor_deudore",
    foreignKey: "id_deudor"
  });
  deudores.hasMany(recibos_cab, {
    as: "recibos_cabs",
    foreignKey: "id_deudor"
  });
  redes_sociales.belongsTo(deudores, {
    as: "id_deudor_deudore",
    foreignKey: "id_deudor"
  });
  deudores.hasMany(redes_sociales, {
    as: "redes_sociales",
    foreignKey: "id_deudor"
  });
  telefonos.belongsTo(deudores, {
    as: "id_deudor_deudore",
    foreignKey: "id_deudor"
  });
  deudores.hasMany(telefonos, {
    as: "telefonos",
    foreignKey: "id_deudor"
  });
  transacciones.belongsTo(deudores, {
    as: "id_deudor_deudore",
    foreignKey: "id_deudor"
  });
  deudores.hasMany(transacciones, {
    as: "transacciones",
    foreignKey: "id_deudor"
  });
  vinculos.belongsTo(deudores, {
    as: "id_deudor_deudore",
    foreignKey: "id_deudor"
  });
  deudores.hasMany(vinculos, {
    as: "vinculos",
    foreignKey: "id_deudor"
  });
  convenios.belongsTo(direcciones, {
    as: "id_direccion_direccione",
    foreignKey: "id_direccion"
  });
  direcciones.hasMany(convenios, {
    as: "convenios",
    foreignKey: "id_direccion"
  });
  deudores.belongsTo(empresas, {
    as: "id_empresa_empresa",
    foreignKey: "id_empresa"
  });
  empresas.hasMany(deudores, {
    as: "deudores",
    foreignKey: "id_empresa"
  });
  p_empresas_param.belongsTo(empresas, {
    as: "id_empresa_empresa",
    foreignKey: "id_empresa"
  });
  empresas.hasMany(p_empresas_param, {
    as: "p_empresas_params",
    foreignKey: "id_empresa"
  });
  p_tasas_interes.belongsTo(empresas, {
    as: "id_empresa_empresa",
    foreignKey: "id_empresa"
  });
  empresas.hasMany(p_tasas_interes, {
    as: "p_tasas_interes",
    foreignKey: "id_empresa"
  });
  p_tipos_convenio.belongsTo(empresas, {
    as: "id_empresa_empresa",
    foreignKey: "id_empresa"
  });
  empresas.hasMany(p_tipos_convenio, {
    as: "p_tipos_convenios",
    foreignKey: "id_empresa"
  });
  politicas.belongsTo(empresas, {
    as: "id_empresa_empresa",
    foreignKey: "id_empresa"
  });
  p_template_correos.belongsTo(empresas, {
    as: "id_empresa_empresa",
    foreignKey: "id_empresa"
  });
  empresas.hasMany(politicas, {
    as: "politicas",
    foreignKey: "id_empresa"
  });
  items_procesos.belongsTo(grupos_procesos, {
    as: "id_grupo_grupos_proceso",
    foreignKey: "id_grupo"
  });
  grupos_procesos.hasMany(items_procesos, {
    as: "items_procesos",
    foreignKey: "id_grupo"
  });
  deudores.belongsTo(p_codigos_correo, {
    as: "id_correo_p_codigos_correo",
    foreignKey: "id_correo"
  });
  p_codigos_correo.hasMany(deudores, {
    as: "deudores",
    foreignKey: "id_correo"
  });
  deudores.belongsTo(p_codigos_gestion, {
    as: "id_gestion_p_codigos_gestion",
    foreignKey: "id_gestion"
  });
  p_codigos_gestion.hasMany(deudores, {
    as: "deudores",
    foreignKey: "id_gestion"
  });
  deudores.belongsTo(p_codigos_situacion, {
    as: "id_situacion_p_codigos_situacion",
    foreignKey: "id_situacion"
  });
  p_codigos_situacion.hasMany(deudores, {
    as: "deudores",
    foreignKey: "id_situacion"
  });
  p_empresas_param.belongsTo(p_codigos_tabla, {
    as: "id_tabla_p_codigos_tabla",
    foreignKey: "id_tabla"
  });
  p_codigos_tabla.hasMany(p_empresas_param, {
    as: "p_empresas_params",
    foreignKey: "id_tabla"
  });
  recibos_det.belongsTo(p_entidades_recaudadoras, {
    as: "id_banco_p_entidades_recaudadora",
    foreignKey: "id_banco"
  });
  p_entidades_recaudadoras.hasMany(recibos_det, {
    as: "recibos_dets",
    foreignKey: "id_banco"
  });
  pagos.belongsTo(p_entidades_recaudadoras, {
    as: "id_entidad_recaudadora_p_entidades_recaudadoras",
    foreignKey: "id_banco"
  });
  p_entidades_recaudadoras.hasMany(pagos, {
    as: "pagos",
    foreignKey: "id_entidad"
  });
  recibos_det.belongsTo(p_formas_pago, {
    as: "id_forma_pago_p_formas_pago",
    foreignKey: "id_forma_pago"
  });
  p_formas_pago.hasMany(recibos_det, {
    as: "recibos_dets",
    foreignKey: "id_forma_pago"
  });
  usuarios.belongsTo(p_grupos_trabajo, {
    as: "id_grupo_p_grupos_trabajo",
    foreignKey: "id_grupo"
  });
  p_grupos_trabajo.hasMany(usuarios, {
    as: "usuarios",
    foreignKey: "id_grupo"
  });
  deudores.belongsTo(p_motivos_no_pago, {
    as: "id_motivo_no_pago_p_motivos_no_pago",
    foreignKey: "id_motivo_no_pago"
  });
  p_motivos_no_pago.hasMany(deudores, {
    as: "deudores",
    foreignKey: "id_motivo_no_pago"
  });
  redes_sociales.belongsTo(p_redes_sociales, {
    as: "id_red_social_p_redes_sociale",
    foreignKey: "id_red_social"
  });
  p_redes_sociales.hasMany(redes_sociales, {
    as: "redes_sociales",
    foreignKey: "id_red_social"
  });
  convenios.belongsTo(p_tasas_interes, {
    as: "id_tasa_p_tasas_intere",
    foreignKey: "id_tasa"
  });
  p_tasas_interes.hasMany(convenios, {
    as: "convenios",
    foreignKey: "id_tasa"
  });
  deudores.belongsTo(p_tipos_actualizacion, {
    as: "id_tipo_actualizacion_p_tipos_actualizacion",
    foreignKey: "id_tipo_actualizacion"
  });
  p_tipos_actualizacion.hasMany(deudores, {
    as: "deudores",
    foreignKey: "id_tipo_actualizacion"
  });
  convenios.belongsTo(p_tipos_convenio, {
    as: "id_tipo_p_tipos_convenio",
    foreignKey: "id_tipo"
  });
  p_tipos_convenio.hasMany(convenios, {
    as: "convenios",
    foreignKey: "id_tipo"
  });
  correos.belongsTo(p_tipos_correo, {
    as: "id_tipo_correo_p_tipos_correo",
    foreignKey: "id_tipo_correo"
  });
  p_tipos_correo.hasMany(correos, {
    as: "correos",
    foreignKey: "id_tipo_correo"
  });
  direcciones.belongsTo(p_tipos_direccion, {
    as: "id_tipo_direccion_p_tipos_direccion",
    foreignKey: "id_tipo_direccion"
  });
  p_tipos_direccion.hasMany(direcciones, {
    as: "direcciones",
    foreignKey: "id_tipo_direccion"
  });
  deudores.belongsTo(p_tipos_iva, {
    as: "id_iva_p_tipos_iva",
    foreignKey: "id_iva"
  });
  p_tipos_iva.hasMany(deudores, {
    as: "deudores",
    foreignKey: "id_iva"
  });
  pagos.belongsTo(p_tipos_pago, {
    as: "id_tipo_pago_p_tipos_pago",
    foreignKey: "id_tipo_pago"
  });
  p_tipos_pago.hasMany(pagos, {
    as: "pagos",
    foreignKey: "id_tipo_pago"
  });
  vinculos.belongsTo(p_tipos_parentesco, {
    as: "id_tipo_parentesco_p_tipos_parentesco",
    foreignKey: "id_tipo_parentesco"
  });
  p_tipos_parentesco.hasMany(vinculos, {
    as: "vinculos",
    foreignKey: "id_tipo_parentesco"
  });
  telefonos.belongsTo(p_tipos_telefono, {
    as: "id_tipo_telefono_p_tipos_telefono",
    foreignKey: "id_tipo_telefono"
  });
  p_tipos_telefono.hasMany(telefonos, {
    as: "telefonos",
    foreignKey: "id_tipo_telefono"
  });
  transacciones.belongsTo(p_tipos_transaccion, {
    as: "id_tipo_transaccion_p_tipos_transaccion",
    foreignKey: "id_tipo_transaccion"
  });
  p_tipos_transaccion.hasMany(transacciones, {
    as: "transacciones",
    foreignKey: "id_tipo_transaccion"
  });
  deudores.belongsTo(politicas, {
    as: "id_politica_politica",
    foreignKey: "id_politica"
  });
  politicas.hasMany(deudores, {
    as: "deudores",
    foreignKey: "id_politica"
  });
  recibos_det.belongsTo(recibos_cab, {
    as: "id_recibo_recibos_cab",
    foreignKey: "id_recibo"
  });
  recibos_cab.hasMany(recibos_det, {
    as: "recibos_dets",
    foreignKey: "id_recibo"
  });
  usuarios.belongsTo(roles, {
    as: "id_rol_role",
    foreignKey: "id_rol"
  });
  roles.hasMany(usuarios, {
    as: "usuarios",
    foreignKey: "id_rol"
  });
  comentarios.belongsTo(usuarios, {
    as: "id_usuario_usuario",
    foreignKey: "id_usuario"
  });
  usuarios.hasMany(comentarios, {
    as: "comentarios",
    foreignKey: "id_usuario"
  });
  recibos_cab.belongsTo(usuarios, {
    as: "id_usuario_usuario",
    foreignKey: "id_usuario"
  });
  usuarios.hasMany(recibos_cab, {
    as: "recibos_cabs",
    foreignKey: "id_usuario"
  });
  telefonos_borrados.belongsTo(usuarios, {
    as: "id_usuario_usuario",
    foreignKey: "id_usuario"
  });
  usuarios.hasMany(telefonos_borrados, {
    as: "telefonos_borrados",
    foreignKey: "id_usuario"
  });
  transacciones.belongsTo(usuarios, {
    as: "id_usuario_usuario",
    foreignKey: "id_usuario"
  });
  usuarios.hasMany(transacciones, {
    as: "transacciones",
    foreignKey: "id_usuario"
  });
  return {
    codigos_barra,
    comentarios,
    convenios,
    correos,
    deudores,
    direcciones,
    empresas,
    facturas,
    grupos_procesos,
    items_procesos,
    p_codigos_correo,
    p_codigos_gestion,
    p_codigos_situacion,
    p_codigos_tabla,
    p_empresas_param,
    p_entidades_recaudadoras,
    p_formas_pago,
    p_grupos_trabajo,
    p_motivos_no_pago,
    p_numeradores,
    p_redes_sociales,
    p_tasas_interes,
    p_tipos_actualizacion,
    p_tipos_convenio,
    p_tipos_correo,
    p_tipos_direccion,
    p_tipos_iva,
    p_tipos_pago,
    p_tipos_parentesco,
    p_tipos_telefono,
    p_tipos_transaccion,
    pagos,
    politicas,
    recibos_cab,
    recibos_det,
    redes_sociales,
    roles,
    telefonos,
    telefonos_borrados,
    transacciones,
    usuarios,
    vinculos,
    movil,
    tareas,
    toyota_atclientes,
    agendas_tc,
    toyota_gestion
  };
}

module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
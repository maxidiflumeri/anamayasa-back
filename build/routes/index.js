"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressPromiseRouter = _interopRequireDefault(require("express-promise-router"));

var _roles = _interopRequireDefault(require("./roles.routes"));

var _p_tipos_telefonos = _interopRequireDefault(require("./p_tipos_telefonos.routes"));

var _p_redes_sociales = _interopRequireDefault(require("./p_redes_sociales.routes"));

var _p_tasas_interes = _interopRequireDefault(require("./p_tasas_interes.routes"));

var _p_tipos_actualizacion = _interopRequireDefault(require("./p_tipos_actualizacion.routes"));

var _p_tipos_convenio = _interopRequireDefault(require("./p_tipos_convenio.routes"));

var _p_tipos_correo = _interopRequireDefault(require("./p_tipos_correo.routes"));

var _p_tipos_direccion = _interopRequireDefault(require("./p_tipos_direccion.routes"));

var _p_tipos_iva = _interopRequireDefault(require("./p_tipos_iva.routes"));

var _p_tipos_pago = _interopRequireDefault(require("./p_tipos_pago.routes"));

var _p_tipos_parentesco = _interopRequireDefault(require("./p_tipos_parentesco.routes"));

var _p_tipos_transaccion = _interopRequireDefault(require("./p_tipos_transaccion.routes"));

var _codigos_barra = _interopRequireDefault(require("./codigos_barra.routes"));

var _comentarios = _interopRequireDefault(require("./comentarios.routes"));

var _convenios = _interopRequireDefault(require("./convenios.routes"));

var _correos = _interopRequireDefault(require("./correos.routes"));

var _deudores = _interopRequireDefault(require("./deudores.routes"));

var _direcciones = _interopRequireDefault(require("./direcciones.routes"));

var _empresas = _interopRequireDefault(require("./empresas.routes"));

var _facturas = _interopRequireDefault(require("./facturas.routes"));

var _p_codigos_correo = _interopRequireDefault(require("./p_codigos_correo.routes"));

var _p_codigos_gestion = _interopRequireDefault(require("./p_codigos_gestion.routes"));

var _p_codigos_situacion = _interopRequireDefault(require("./p_codigos_situacion.routes"));

var _p_codigos_tabla = _interopRequireDefault(require("./p_codigos_tabla.routes"));

var _p_empresas_param = _interopRequireDefault(require("./p_empresas_param.routes"));

var _p_entidades_recaudadoras = _interopRequireDefault(require("./p_entidades_recaudadoras.routes"));

var _p_formas_pago = _interopRequireDefault(require("./p_formas_pago.routes"));

var _p_grupos_trabajo = _interopRequireDefault(require("./p_grupos_trabajo.routes"));

var _p_motivos_no_pago = _interopRequireDefault(require("./p_motivos_no_pago.routes"));

var _p_numeradores = _interopRequireDefault(require("./p_numeradores.routes"));

var _pagos = _interopRequireDefault(require("./pagos.routes"));

var _politicas = _interopRequireDefault(require("./politicas.routes"));

var _recibos_cab = _interopRequireDefault(require("./recibos_cab.routes"));

var _recibos_det = _interopRequireDefault(require("./recibos_det.routes"));

var _redes_sociales = _interopRequireDefault(require("./redes_sociales.routes"));

var _telefonos = _interopRequireDefault(require("./telefonos.routes"));

var _telefonos_borrados = _interopRequireDefault(require("./telefonos_borrados.routes"));

var _transacciones = _interopRequireDefault(require("./transacciones.routes"));

var _usuarios = _interopRequireDefault(require("./usuarios.routes"));

var _vinculos = _interopRequireDefault(require("./vinculos.routes"));

var _grupos_procesos = _interopRequireDefault(require("./grupos_procesos.routes"));

var _items_procesos = _interopRequireDefault(require("./items_procesos.routes"));

var _envio_mail = _interopRequireDefault(require("./envio_mail.routes"));

var _p_template_correos = _interopRequireDefault(require("./p_template_correos.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _expressPromiseRouter.default)();
router.use('/roles', _roles.default);
router.use('/tiposTelefonos', _p_tipos_telefonos.default);
router.use('/tiposRedesSociales', _p_redes_sociales.default);
router.use('/tasasInteres', _p_tasas_interes.default);
router.use('/tiposActualizacion', _p_tipos_actualizacion.default);
router.use('/tiposConvenio', _p_tipos_convenio.default);
router.use('/tiposCorreo', _p_tipos_correo.default);
router.use('/tiposDireccion', _p_tipos_direccion.default);
router.use('/tiposIva', _p_tipos_iva.default);
router.use('/tiposPago', _p_tipos_pago.default);
router.use('/tiposParentesco', _p_tipos_parentesco.default);
router.use('/tiposTransaccion', _p_tipos_transaccion.default);
router.use('/codigosBarra', _codigos_barra.default);
router.use('/comentarios', _comentarios.default);
router.use('/convenios', _convenios.default);
router.use('/correos', _correos.default);
router.use('/deudores', _deudores.default);
router.use('/direcciones', _direcciones.default);
router.use('/empresas', _empresas.default);
router.use('/facturas', _facturas.default);
router.use('/codigosCorreo', _p_codigos_correo.default);
router.use('/codigosGestion', _p_codigos_gestion.default);
router.use('/codigosSituacion', _p_codigos_situacion.default);
router.use('/codigosTabla', _p_codigos_tabla.default);
router.use('/empresasParam', _p_empresas_param.default);
router.use('/entidadesRecaudadoras', _p_entidades_recaudadoras.default);
router.use('/formasPago', _p_formas_pago.default);
router.use('/gruposTrabajo', _p_grupos_trabajo.default);
router.use('/motivosNoPago', _p_motivos_no_pago.default);
router.use('/numeradores', _p_numeradores.default);
router.use('/pagos', _pagos.default);
router.use('/politicas', _politicas.default);
router.use('/recibosCab', _recibos_cab.default);
router.use('/recibosDet', _recibos_det.default);
router.use('/redesSociales', _redes_sociales.default);
router.use('/telefonos', _telefonos.default);
router.use('/telefonosBorrados', _telefonos_borrados.default);
router.use('/transacciones', _transacciones.default);
router.use('/usuarios', _usuarios.default);
router.use('/vinculos', _vinculos.default);
router.use('/gruposProcesos', _grupos_procesos.default);
router.use('/itemsProcesos', _items_procesos.default);
router.use('/servicio', _envio_mail.default);
router.use('/templateCorreos', _p_template_correos.default);
var _default = router;
exports.default = _default;
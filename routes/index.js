import routerx from 'express-promise-router'
import rolesRoutes from './roles.routes'
import p_tipos_telefonosRoutes from './p_tipos_telefonos.routes'
import p_redes_socialesRoutes from './p_redes_sociales.routes'
import p_tasas_interesRoutes from './p_tasas_interes.routes'
import p_tipos_actualizacionRoutes from './p_tipos_actualizacion.routes'
import p_tipos_convenioRoutes from './p_tipos_convenio.routes'
import p_tipos_correoRoutes from './p_tipos_correo.routes'
import p_tipos_direccionRoutes from './p_tipos_direccion.routes'
import p_tipos_ivaRoutes from './p_tipos_iva.routes'
import p_tipos_pagoRoutes from './p_tipos_pago.routes'
import p_tipos_parentescoRoutes from './p_tipos_parentesco.routes'
import p_tipos_transaccionRoutes from './p_tipos_transaccion.routes'
import codigos_barraRoutes from './codigos_barra.routes'
import comentariosRoutes from './comentarios.routes'
import conveniosRoutes from './convenios.routes'
import correosRoutes from './correos.routes'
import deudoresRoutes from './deudores.routes'
import direccionesRoutes from './direcciones.routes'
import empresasRoutes from './empresas.routes'
import facturasRoutes from './facturas.routes'
import p_codigos_correoRoutes from './p_codigos_correo.routes'
import p_codigos_gestionRoutes from './p_codigos_gestion.routes'
import p_codigos_situacionRoutes from './p_codigos_situacion.routes'
import p_codigos_tablaRoutes from './p_codigos_tabla.routes'
import p_empresas_paramRoutes from './p_empresas_param.routes'
import p_entidades_recaudadorasRoutes from './p_entidades_recaudadoras.routes'
import p_formas_pagoRoutes from './p_formas_pago.routes'
import p_grupos_trabajoRoutes from './p_grupos_trabajo.routes'
import p_motivos_no_pagoRoutes from './p_motivos_no_pago.routes'
import p_numeradoresRoutes from './p_numeradores.routes'
import pagosRoutes from './pagos.routes'
import politicasRoutes from './politicas.routes'
import recibos_cabRoutes from './recibos_cab.routes'
import recibos_detRoutes from './recibos_det.routes'
import redes_socialesRoutes from './redes_sociales.routes'
import telefonosRoutes from './telefonos.routes'
import telefonos_borradosRoutes from './telefonos_borrados.routes'
import transaccionesRoutes from './transacciones.routes'
import usuariosRoutes from './usuarios.routes'
import vinculosRoutes from './vinculos.routes'
import grupos_procesosRoutes from './grupos_procesos.routes'
import items_procesosRoutes from './items_procesos.routes'
import envio_mailRoutes from './envio_mail.routes'
import p_template_correos from './p_template_correos.routes'
import procesos from './procesos.routes'
import toyota_atclientes from './toyota_atclientes.routes'
import agendas_tc from './agendas_tc.routes'

const router = routerx()

router.use('/roles',  rolesRoutes)
router.use('/tiposTelefonos', p_tipos_telefonosRoutes)
router.use('/tiposRedesSociales', p_redes_socialesRoutes)
router.use('/tasasInteres', p_tasas_interesRoutes)
router.use('/tiposActualizacion', p_tipos_actualizacionRoutes)
router.use('/tiposConvenio', p_tipos_convenioRoutes)
router.use('/tiposCorreo', p_tipos_correoRoutes)
router.use('/tiposDireccion', p_tipos_direccionRoutes)
router.use('/tiposIva', p_tipos_ivaRoutes)
router.use('/tiposPago', p_tipos_pagoRoutes)
router.use('/tiposParentesco', p_tipos_parentescoRoutes)
router.use('/tiposTransaccion', p_tipos_transaccionRoutes)
router.use('/codigosBarra', codigos_barraRoutes)
router.use('/comentarios', comentariosRoutes)
router.use('/convenios', conveniosRoutes)
router.use('/correos', correosRoutes)
router.use('/deudores', deudoresRoutes)
router.use('/direcciones', direccionesRoutes)
router.use('/empresas', empresasRoutes)
router.use('/facturas', facturasRoutes)
router.use('/codigosCorreo', p_codigos_correoRoutes)
router.use('/codigosGestion', p_codigos_gestionRoutes)
router.use('/codigosSituacion', p_codigos_situacionRoutes)
router.use('/codigosTabla', p_codigos_tablaRoutes)
router.use('/empresasParam', p_empresas_paramRoutes)
router.use('/entidadesRecaudadoras', p_entidades_recaudadorasRoutes)
router.use('/formasPago', p_formas_pagoRoutes)
router.use('/gruposTrabajo', p_grupos_trabajoRoutes)
router.use('/motivosNoPago', p_motivos_no_pagoRoutes)
router.use('/numeradores', p_numeradoresRoutes)
router.use('/pagos', pagosRoutes)
router.use('/politicas', politicasRoutes)
router.use('/recibosCab', recibos_cabRoutes)
router.use('/recibosDet', recibos_detRoutes)
router.use('/redesSociales', redes_socialesRoutes)
router.use('/telefonos', telefonosRoutes)
router.use('/telefonosBorrados', telefonos_borradosRoutes)
router.use('/transacciones', transaccionesRoutes)
router.use('/usuarios', usuariosRoutes)
router.use('/vinculos', vinculosRoutes)
router.use('/gruposProcesos', grupos_procesosRoutes)
router.use('/itemsProcesos', items_procesosRoutes)
router.use('/servicio', envio_mailRoutes)
router.use('/templateCorreos', p_template_correos)
router.use('/procesos', procesos)
router.use('/toyotaAtClientes', toyota_atclientes)
router.use('/agendasTc', agendas_tc)

export default router

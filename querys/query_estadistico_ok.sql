select d.id_situacion, cs.descripcion, count(d.id_situacion) as cantidad, sum(d.deuda_historica) as deuda_historica, pagos.pagos as pagos, (pagos.pagos*100/sum(d.deuda_historica)) as prom
from deudores d
inner join p_codigos_situacion cs
on d.id_situacion = cs.id_situacion
left join (select d.id_situacion as situacion, sum(p.importe_total) as pagos
from deudores d
inner join p_codigos_situacion cs
on d.id_situacion = cs.id_situacion
inner join pagos p
on d.id_deudor = p.id_deudor
where d.remesa = 44 and d.id_empresa = 41 and p.id_tipo_pago = 1
group by d.id_situacion, cs.descripcion) as pagos
on pagos.situacion = d.id_situacion
where d.remesa = 44 and d.id_empresa = 41
group by d.id_situacion, cs.descripcion, pagos.pagos
union all 
select 100000, 'TOTALES', count(d.id_situacion) as cantidad, sum(d.deuda_historica) as deuda_historica, (select sum(p.importe_total) as pagos
from deudores d
inner join p_codigos_situacion cs
on d.id_situacion = cs.id_situacion
inner join pagos p
on d.id_deudor = p.id_deudor
where d.remesa = 44 and d.id_empresa = 41 and p.id_tipo_pago = 1) as pagos, ((select sum(p.importe_total) as pagos
from deudores d
inner join p_codigos_situacion cs
on d.id_situacion = cs.id_situacion
inner join pagos p
on d.id_deudor = p.id_deudor
where d.remesa = 44 and d.id_empresa = 41 and p.id_tipo_pago = 1)*100/sum(d.deuda_historica)) as prom
from deudores d
inner join p_codigos_situacion cs
on d.id_situacion = cs.id_situacion
where d.remesa = 44 and d.id_empresa = 41
order by d.id_situacion









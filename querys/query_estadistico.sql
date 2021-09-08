select d.id_situacion, cs.descripcion, p.id_tipo_pago, contador.situacion, contador.cantidad, contador.deuda_historica as deuda_historica, sum(p.importe_total) as pagos
from deudores d
full join pagos p
on p.id_deudor = d.id_deudor
full join p_codigos_situacion cs
on d.id_situacion = cs.id_situacion
right join (select d.id_situacion as situacion, count(d.id_situacion) as cantidad, sum(d.deuda_historica) as deuda_historica from deudores d inner join p_codigos_situacion cs on d.id_situacion = cs.id_situacion
where d.remesa = 44 and d.id_empresa = 41 group by d.id_situacion) as contador
on contador.situacion = d.id_situacion
where d.remesa = 44 and d.id_empresa = 41 and p.id_tipo_pago = 1
group by d.id_situacion, cs.descripcion, p.id_tipo_pago, contador.cantidad, contador.deuda_historica, contador.situacion




select d.id_situacion, cs.descripcion, count(d.id_situacion) as cantidad, sum(d.deuda_historica) as deuda_historica
from deudores d
inner join p_codigos_situacion cs
on d.id_situacion = cs.id_situacion
where d.remesa = 44 and d.id_empresa = 41
group by d.id_situacion, cs.descripcion
union all 
select 1000000, 'TOTAL', count(d.id_situacion) as cantidad, sum(d.deuda_historica) as deuda_historica
from deudores d
inner join p_codigos_situacion cs
on d.id_situacion = cs.id_situacion
where d.remesa = 44 and d.id_empresa = 41
order by d.id_situacion
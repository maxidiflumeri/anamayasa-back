/****** Script para el comando SelectTopNRows de SSMS  ******/
delete c from correos c inner join deudores d on c.id_deudor = d.id_deudor where d.id_empresa = 30

WITH CTE([id_factura], 
    [nro_factura], 
    id_deudor, 
    duplicatecount)
AS (SELECT [id_factura], 
           [nro_factura], 
           id_deudor, 
           ROW_NUMBER() OVER(PARTITION BY [nro_factura], 
                                          id_deudor                                          
           ORDER BY id_deudor) AS DuplicateCount
    FROM [dbo].[facturas])
DELETE FROM CTE
WHERE DuplicateCount > 1;

select * from facturas
select * from correos
select * from codigos_barra order by id_deudor
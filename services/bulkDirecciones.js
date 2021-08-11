import excelToJson from 'convert-excel-to-json'
import models from '../models/index'


export default {
    importExcelToJson: async () => {

        const resultado = excelToJson({
            sourceFile: './upload/direcciones.xlsx',
            header: { rows: 1 },
            columnToKey: {
                'A': '{{A1}}',
                'B': '{{B1}}',
                'C': '{{C1}}',
                'D': '{{D1}}',
                'E': '{{E1}}',
                'F': '{{F1}}',
                'G': '{{G1}}',
                'H': '{{H1}}',
                'I': '{{I1}}',
                'J': '{{J1}}',
                'K': '{{K1}}',
                'L': '{{L1}}'
            },
            sheets: ['direcciones']
        })

        let arrayDirecciones = resultado.direcciones
        console.log(arrayDirecciones.length)

        for (var i = 0; i < arrayDirecciones.length; i++) {
            var direccion = arrayDirecciones[i]
            if(direccion.calle){
                direccion.calle = direccion.calle.toString()
            }
            if(direccion.piso){
                direccion.piso = direccion.piso.toString()
            }
            if(direccion.departamento){
                direccion.departamento = direccion.departamento.toString()
            }
            if(direccion.entrada){
                direccion.entrada = direccion.entrada.toString()
            }
            if(direccion.escalera){
                direccion.escalera = direccion.escalera.toString()
            }
            if(direccion.cod_postal){
                direccion.cod_postal = direccion.cod_postal.toString()
            }
            if(direccion.provincia){
                direccion.provincia = direccion.provincia.toString()
            }
            if(direccion.localidad){
                direccion.localidad = direccion.localidad.toString()
            }
        }                

        let init = 0
        let fin = 15000

        let corte = parseInt(arrayDirecciones.length / 15000)+1
        console.log(corte)

        for (let i = 0; i < corte; i++) {

            let pepe = arrayDirecciones.slice(init, fin)

            console.log('pasada: ' + i)
            try {
                console.log("empieza el Bulk insert")
                await models.direcciones.bulkCreate(pepe, { validate: false, logging: false })
                console.log(`pasada ${i} finalizada ok`)              
                
            } catch (error) {
                console.log(error.message)
            }
            init = init + 15000
            fin = fin + 15000
        }

        console.log('termino todo')
    }


}
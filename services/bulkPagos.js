import excelToJson from 'convert-excel-to-json'
import models from '../models/index'


export default {
    importExcelToJson: async () => {

        const resultado = excelToJson({
            sourceFile: './upload/pagos.xlsx',
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
                'L': '{{L1}}',
                'M': '{{M1}}',
                'N': '{{N1}}',
                'O': '{{O1}}',
                'P': '{{P1}}',
                'Q': '{{Q1}}',
                'R': '{{R1}}',
                'S': '{{S1}}',
                'T': '{{T1}}',
                'U': '{{U1}}',
                'V': '{{V1}}'
            },
            sheets: ['pagos']
        })

        let arrayPagos = resultado.pagos
        console.log(arrayPagos.length) 

        for (var i = 0; i < arrayPagos.length; i++) {
            var pago = arrayPagos[i]
            if (pago.fecha_pago == '/  /') {
                pago.fecha_pago = null
            }
            if (pago.fecha_aplicacion == '/  /') {
                pago.fecha_aplicacion = null
            }
            if (pago.fecha_rendicion == '/  /') {
                pago.fecha_rendicion = null
            }
            if (pago.fecha_registro == '/  /') {
                pago.fecha_registro = null
            }
            if (pago.aux1) {
                pago.aux1 = pago.aux1.toString()
            }
            if (pago.aux2) {
                pago.aux2 = pago.aux2.toString()
            }
            if (pago.aux3) {
                pago.aux3 = pago.aux3.toString()
            }
            if (pago.aux4) {
                pago.aux4 = pago.aux4.toString()
            }
            if (pago.aux5) {
                pago.aux5 = pago.aux5.toString()
            }
            if (pago.aux6) {
                pago.aux6 = pago.aux6.toString()
            }
            if (pago.aux7) {
                pago.aux7 = pago.aux7.toString()
            }
            if (pago.aux8) {
                pago.aux8 = pago.aux8.toString()
            }
            if (pago.aux9) {
                pago.aux9 = pago.aux9.toString()
            }
            if (pago.aux10) {
                pago.aux10 = pago.aux10.toString()
            }           
        }
        
        let init = 0
        let fin = 5000

        let corte = parseInt(arrayPagos.length / 5000)+1
        console.log(corte)

        for(let i = 0; i < corte; i++){
            
            let pepe = arrayPagos.slice(init,fin)
            console.log(pepe.length)  
            
            console.log('pasada: ' + i)
            try {
                console.log("empieza el bulk insert")
                await models.pagos.bulkCreate(pepe,{validate: false, logging: false})
                console.log("termino ok")
            } catch (error) {
                console.log(error.message)
            }
            init = init + 5000
            fin = fin + 5000
        }

        console.log("termino todo")

    }


}
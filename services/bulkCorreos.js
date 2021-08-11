import excelToJson from 'convert-excel-to-json'
import models from '../models/index'


export default {
    importExcelToJson: async () => {

        const resultado = excelToJson({
            sourceFile: './upload/correos.xlsx',
            header: { rows: 1 },
            columnToKey: {
                'A': '{{A1}}',
                'B': '{{B1}}',
                'C': '{{C1}}',
                'D': '{{D1}}'
            },
            sheets: ['correos']
        })

        let arrayCorreos = resultado.correos
        console.log(arrayCorreos.length)
        //console.log(arrayCorreos)

        for (var i = 0; i < arrayCorreos.length; i++) {            
            var correo = arrayCorreos[i]
            try {
                await models.correos.create(correo)
                console.log('se agrego el registro: '+ i)

            } catch (error) {
                console.log('error en registro: '+i)                  
            }
        }


        // let init = 0
        // let fin = 15000

        // let corte = parseInt(arrayCorreos.length / fin)+1
        // console.log(corte)

        // for (let i = 0; i < corte; i++) {

        //     let pepe = arrayCorreos.slice(init, fin)

        //     console.log('pasada: ' + i)
        //     try {
        //         console.log("empieza el bulk insert")
        //         await models.correos.bulkCreate(pepe, { validate: false, logging: false })
        //         console.log("termino ok")
        //     } catch (error) {
        //         console.log(error.message)
        //     }
        //     init = init + 15000
        //     fin = fin + 15000
        // }
    }


}
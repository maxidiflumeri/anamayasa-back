import excelToJson from 'convert-excel-to-json'
import models from '../models/index'


export default {
    importExcelToJson: async () => {

        const resultado = excelToJson({
            sourceFile: './upload/telefonos.xlsx',
            header: { rows: 1 },
            columnToKey: {
                'A': '{{A1}}',
                'B': '{{B1}}',
                'C': '{{C1}}',              
                'D': '{{D1}}'
            },
            sheets: ['telefonos']
        })

        let arrayTelefonos = resultado.telefonos


        
        // let init = 0
        // let fin = 15000
        // let corte = parseInt(arrayTelefonos.length / fin)+1
        // console.log(corte)

        // for(let i = 0; i < corte; i++){
            
        //     let pepe = arrayTelefonos.slice(init,fin)
        //     console.log(pepe.length)  
            
        //     console.log('pasada: ' + i)
        //     try {
        //         console.log("empieza el bulk insert")
        //         await models.telefonos.bulkCreate(pepe,{validate: false, logging: false})
        //         console.log("termino ok")
        //     } catch (error) {
        //         console.log(error.message)
        //     }
        //     init = init + 15000
        //     fin = fin + 15000
        // }
        
        for (var i = 0; i < arrayTelefonos.length; i++) {            
            var telefono = arrayTelefonos[i]
            try {
                await models.telefonos.create(telefono)
                console.log('se agrego el registro: '+ i)

            } catch (error) {
                console.log('error en registro: '+i)                  
            }
        }

    }


}



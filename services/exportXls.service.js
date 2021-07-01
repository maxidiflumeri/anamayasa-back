import xlsx from 'xlsx'
import path from 'path'

function crearHoja(workSheetColumnName, data){        
    const workSheetData = [
        data,
        workSheetColumnName
    ]
    const workSheet = xlsx.utils.aoa_to_sheet(workSheetData)
    return workSheet       
}

function exportarExcel(workSheetName, workSheetColumnName, data, filePath){    
    const workBook = xlsx.utils.book_new()
    for (let index = 0; index < data.length; index++) {
        const objeto = data[index];
        const columns = workSheetColumnName[index]
        const sheetName = workSheetName[index]
        let workSheet = crearHoja(objeto, columns)
        xlsx.utils.book_append_sheet(workBook, workSheet, sheetName)        
    }    
    xlsx.writeFile(workBook, path.resolve(filePath))    
}


export default {
    exportarExcel
}
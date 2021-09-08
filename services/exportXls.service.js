import xlsx from 'xlsx'
import path from 'path'

function exportarExcel(workSheetName, data, filePath){    
    const workBook = xlsx.utils.book_new()
    for (let index = 0; index < data.length; index++) {
        const objeto = data[index];                              
        const sheetName = workSheetName[index]                
        const workSheet = xlsx.utils.json_to_sheet(objeto)
        xlsx.utils.book_append_sheet(workBook, workSheet, sheetName)        
    }    
    xlsx.writeFile(workBook, path.resolve(filePath))    
}


export default {
    exportarExcel
}
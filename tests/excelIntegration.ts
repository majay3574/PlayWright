import * as ExcelJS from 'exceljs';

async function main() {
    const workbook = new ExcelJS.Workbook();

    await workbook.xlsx.readFile('../tests/Book1.xlsx');
    const worksheet = workbook.getWorksheet();
    //console.log(worksheet);

    worksheet!.eachRow(async (row, rowNumber) => {
        row.eachCell(async (cell, colNumber) => {
            const cellValue = cell.value;
            console.log(`Cell(${rowNumber}, ${colNumber}): ${cellValue}`);
        });
    });
}


async function main2() {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile('../tests/Book1.xlsx');
    let worksheet = workbook.getWorksheet();

    const cellA2 = worksheet!.getCell('A2').value;
    const cellB2 = worksheet!.getCell('B2').value;
    const cellC2 = worksheet?.getCell('C2').value;


    console.log(`Data from cell A1: ${cellA2}`);
    console.log(`Data from cell B2: ${cellB2}`);
    console.log(`Data from cell C3: ${cellC2}`);


}

//main2()


async function getCellValue(cellReference: string): Promise<any> {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile('../tests/Book1.xlsx');
    const worksheet = workbook.getWorksheet();
    
    const cellValue = worksheet!.getCell(cellReference).value;
    return cellValue;
}

getCellValue('A2')
    .then(cellValue => {
        console.log('Cell A1 Value:', cellValue);
    })
    .catch(error => {
        console.log('Error:', error);
    });

 
getCellValue('B3')
    

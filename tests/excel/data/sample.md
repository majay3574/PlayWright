// utils/excelReader.ts
1)
import * as XLSX from 'xlsx';

export class ExcelReader {
    private filePath: string;

    constructor(filePath: string) {
        this.filePath = filePath;
    }

    // Method to read a specific cell value
    public readCell(sheetIndexOrName: number | string, rowIndex: number, colIndex: number): any | null {
        try {
            const workbook = XLSX.readFile(this.filePath);

            let sheetName: string;
            if (typeof sheetIndexOrName === 'number') {
                if (sheetIndexOrName >= workbook.SheetNames.length) {
                    console.error(`Sheet index ${sheetIndexOrName} out of range. Max index: ${workbook.SheetNames.length - 1}`);
                    return null;
                }
                sheetName = workbook.SheetNames[sheetIndexOrName];
            } else if (typeof sheetIndexOrName === 'string') {
                if (!workbook.SheetNames.includes(sheetIndexOrName)) {
                    console.error(`Sheet name "${sheetIndexOrName}" not found in the workbook.`);
                    return null;
                }
                sheetName = sheetIndexOrName;
            } else {
                console.error('Invalid sheet index or name');
                return null;
            }

            const worksheet = workbook.Sheets[sheetName];

            // Get the cell address in A1 notation
            const cellAddress = XLSX.utils.encode_cell({ r: rowIndex, c: colIndex });

            // Get the cell value
            const cell = worksheet[cellAddress];
            return cell ? cell.v : null; // Return the value if cell exists, else null
        } catch (error) {
            console.error('Error reading the Excel file:', error);
            return null;
        }
    }
}

// Usage of ExcelReader
const reader = new ExcelReader('./data/book1.xlsx');


const cellValue = reader.readCell('Sheet2', 1, 1); // 'Sheet2', second row, second column
console.log('Cell Value:', cellValue); // Output: Value from specified cell



2) // utils/excelReader.ts
import * as XLSX from 'xlsx';

export class ExcelReader {
    private filePath: string;

    constructor(filePath: string) {
        this.filePath = filePath;
    }

    public readExcel(sheetIndex: number = 0): any[] | null {
        try {
            const workbook = XLSX.readFile(this.filePath);

            if (sheetIndex >= workbook.SheetNames.length) {
                console.error(`Sheet index ${sheetIndex} out of range. Max index: ${workbook.SheetNames.length - 1}`);
                return null;
            }

            const sheetName = workbook.SheetNames[sheetIndex];
            const worksheet = workbook.Sheets[sheetName];

            // Parse data into an array of objects using the first row as headers
            const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

            // Convert the first row into headers, and map the remaining rows to objects
            const headers = data[0] as string[]; // First row as headers
            const rows = data.slice(1) as any[]; // Remaining rows as data

            // Return an array of objects where each row is an object with header keys
            const formattedData = rows.map((row: any[]) => {
                const rowObject: any = {};
                headers.forEach((header: string, index: number) => {
                    rowObject[header] = row[index];
                });
                return rowObject;
            });

            return formattedData;
        } catch (error) {
            console.error('Error reading the Excel file:', error);
            return null;
        }
    }
}

// Usage of ExcelReader
const reader = new ExcelReader('./data/book1.xlsx');
const data = reader.readExcel(0);

if (data) {
    // Access "fname" column directly
    const firstName = data[1]?.fname;
    const lastName = data[1]?.lname
    const age = data[]?.age// Assuming 'fname' is the header in the Excel file
    console.log('First Name:', firstName); // Output: Ajay
    console.log(lastName);
    console.log(age);


    // Optional: Print the entire data if needed
    // console.log('Excel Data:', data);
} else {
    console.error('Failed to read Excel data');
}


3) // utils/excelReader.ts
import * as XLSX from 'xlsx';

export class ExcelReader {
    private filePath: string;

    constructor(filePath: string) {
        this.filePath = filePath;
    }

    // Method to read the entire sheet into an array of objects
    public readExcel(sheetIndexOrName: number | string = 0): any[] | null {
        try {
            const workbook = XLSX.readFile(this.filePath);

            let sheetName: string;
            if (typeof sheetIndexOrName === 'number') {
                if (sheetIndexOrName >= workbook.SheetNames.length) {
                    console.error(`Sheet index ${sheetIndexOrName} out of range. Max index: ${workbook.SheetNames.length - 1}`);
                    return null;
                }
                sheetName = workbook.SheetNames[sheetIndexOrName];
            } else if (typeof sheetIndexOrName === 'string') {
                if (!workbook.SheetNames.includes(sheetIndexOrName)) {
                    console.error(`Sheet name "${sheetIndexOrName}" not found in the workbook.`);
                    return null;
                }
                sheetName = sheetIndexOrName;
            } else {
                console.error('Invalid sheet index or name');
                return null;
            }

            const worksheet = workbook.Sheets[sheetName];

            // Convert sheet data to an array of objects
            const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

            if (data.length === 0) {
                return []; // Return an empty array if there is no data
            }

            // Convert the first row into headers and map the rest into objects
            const headers = data[0] as string[]; // First row as headers
            const rows = data.slice(1) as any[]; // Remaining rows as data

            return rows.map((row: any[]) => {
                const rowObject: any = {};
                headers.forEach((header: string, index: number) => {
                    rowObject[header] = row[index];
                });
                return rowObject;
            });
        } catch (error) {
            console.error('Error reading the Excel file:', error);
            return null;
        }
    }
}

// Example usage of ExcelReader
const reader = new ExcelReader('./data/book1.xlsx');
const data = reader.readExcel('Sheet2'); // Use sheet name 'Sheet2'

if (data) {
    // Assuming that data[0] exists and contains the fields 'name', 'age'
    const firstName = data[0]?.name; // Adjust property name based on actual header
    const age = data[0]?.age; // Adjust property name based on actual header

    console.log('First Name:', firstName);
    console.log('Age:', age);
} else {
    console.error('Failed to read Excel data');
}


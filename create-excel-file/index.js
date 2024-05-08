const ExcelJS = require('exceljs/dist/es5');
const workbook = new ExcelJS.Workbook();
workbook.creator = 'Me';
workbook.lastModifiedBy = 'Her';
workbook.created = new Date(1985, 8, 30);
workbook.modified = new Date();
workbook.lastPrinted = new Date(2016, 9, 27);

// create new sheet with pageSetup settings for A4 - landscape
const worksheet = workbook.addWorksheet('My Sheet', {
    pageSetup: { paperSize: 9, orientation: 'landscape' }
});

worksheet.columns = [
    { header: 'Id', key: 'id', width: 10 },
    { header: 'Name', key: 'name', width: 32 },
    { header: 'D.O.B.', key: 'DOB', width: 10, outlineLevel: 1 }
];

worksheet.addRow({ id: 1, name: 'John Doe', dob: new Date(1970, 1, 1) });
worksheet.addRow({ id: 2, name: 'Jane Doe', dob: new Date(1965, 1, 7) });


(async () => {
    let filename = './MyExcel.csv';
    await workbook.csv.writeFile(filename, {});

})()
// Kode untuk Google Apps Script (Extensions -> Apps Script pada Google Sheets)
// 1. Paste kode ini.
// 2. Klik Deploy -> New Deployment.
// 3. Select type: Web app.
// 4. Execute as: Me. Who has access: Anyone.
// 5. Copy Web App URL dan masukkan ke file script.js di frontend.

const SPREADSHEET_ID = "YOUR_SPREADSHEET_ID_HERE"; // Ganti dengan ID Spreadsheet Anda (opsional jika script menempel pada file)

function doGet(e) {
  try {
    // Ambil spreadsheet yang aktif (jika script ini terikat dengan sheet)
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Atau, jika script terpisah, gunakan ini:
    // const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getActiveSheet();

    const data = sheet.getDataRange().getValues();
    const headers = data[0];
    const rows = data.slice(1);
    
    // Konversi array 2D menjadi array of objects
    const jsonData = rows.map((row) => {
      const obj = {};
      headers.forEach((header, index) => {
        // Asumsi nama kolom di baris 1: Nama, Jabatan, NISN, Foto_URL, Instagram
        obj[header] = row[index]; 
      });
      return obj;
    });

    // Kembalikan response JSON
    return ContentService.createTextOutput(JSON.stringify({ status: "success", data: jsonData }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

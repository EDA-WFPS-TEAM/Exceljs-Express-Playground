const express = require("express");
const ExcelJS = require("exceljs");
const cors = require("cors");

const app = express();
const PORT = 3001;

// Enable CORS for all routes
app.use(cors());

app.get("/api/export-data", async (req, res) => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Sample Data");

  // Define columns
  worksheet.columns = [
    { header: "ID", key: "id", width: 10 },
    { header: "Name", key: "name", width: 30 },
    { header: "Age", key: "age", width: 10 },
  ];

  // Add rows
  worksheet.addRow({ id: 1, name: "John Doe", age: 28 });
  worksheet.addRow({ id: 2, name: "Jane Smith", age: 34 });

  // Set headers for download
  res.setHeader(
    "Content-Type",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  );
  res.setHeader("Content-Disposition", "attachment; filename=data.xlsx");

  // Write to response stream
  await workbook.xlsx.write(res);
  res.end();
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

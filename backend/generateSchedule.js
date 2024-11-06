const ExcelJS = require("exceljs");

const applications = [
  {
    organization: "WF Heat",
    event: "Boys Basketball Practice",
    location: "Legacy Elementary School",
    days: ["Monday", "Thursday"],
    time: "7:00 PM - 8:00 PM",
    month: "January",
  },
  {
    organization: "West Fargo Wolfpack",
    event: "Weekly Practice",
    location: "Liberty Middle School",
    days: ["Monday", "Thursday"],
    time: "8:00 PM - 9:00 PM",
    month: "January",
  },
  {
    organization: "Red River Infinity Volleyball",
    event: "Practice",
    location: "Liberty Middle School",
    days: ["Monday", "Thursday"],
    time: "6:00 PM - 7:00 PM",
    month: "January",
  },
  {
    organization: "West Fargo Knights",
    event: "Basketball Training",
    location: "Brooks Harbor Elementary School",
    days: ["Tuesday", "Friday"],
    time: "5:00 PM - 6:00 PM",
    month: "January",
  },
];

async function generateSchedule() {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Gym Schedule - January");

  // Set up column headers with styling
  worksheet.columns = [
    { header: "Time Slot", key: "time", width: 15 },
    { header: "Aurora ES", key: "aurora", width: 30 },
    { header: "Brooks Harbor ES", key: "brooksHarbor", width: 30 },
    { header: "Deer Creek ES", key: "deerCreek", width: 30 },
    { header: "Eastwood ES", key: "eastwood", width: 30 },
    { header: "Freedom ES", key: "freedom", width: 30 },
    { header: "Harwood ES", key: "harwood", width: 30 },
    { header: "Horace ES", key: "horace", width: 30 },
    { header: "Independence ES", key: "independence", width: 30 },
    { header: "L.E. Berger ES", key: "leBerger", width: 30 },
    { header: "Legacy ES", key: "legacy", width: 30 },
    { header: "Osgood ES", key: "osgood", width: 30 },
    { header: "South ES", key: "south", width: 30 },
    { header: "Westside ES", key: "westside", width: 30 },
    { header: "Willow Park ES", key: "willowPark", width: 30 },
  ];

  // Style headers
  worksheet.getRow(1).font = { bold: true, color: { argb: "FFFFFF" } };
  worksheet.getRow(1).fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "4F81BD" },
  };
  worksheet.getRow(1).border = {
    bottom: { style: "thin" },
  };

  // Populate schedule with sample data and add formatting
  applications.forEach((app) => {
    app.days.forEach((day) => {
      const row = worksheet.addRow({
        time: `${app.time} (${day})`,
        [app.location
          .split(" ")[0]
          .toLowerCase()]: `${app.organization} (${app.event})`,
      });

      // Style time slot column
      row.getCell("time").font = { bold: true, color: { argb: "1F497D" } };
      row.getCell("time").fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "DCE6F1" },
      };

      // Style organization/event columns
      Object.keys(row.values).forEach((key, index) => {
        if (index > 1) {
          // Skip the first cell (time slot)
          row.getCell(index).font = { italic: true, color: { argb: "4BACC6" } };
          row.getCell(index).alignment = {
            vertical: "middle",
            horizontal: "center",
          };
        }
      });

      // Add borders to each cell in the row
      row.eachCell({ includeEmpty: true }, (cell) => {
        cell.border = {
          top: { style: "thin" },
          bottom: { style: "thin" },
          left: { style: "thin" },
          right: { style: "thin" },
        };
      });
    });
  });

  await workbook.xlsx.writeFile("Gym_Schedule_Output.xlsx");
  console.log("Styled schedule generated: Gym_Schedule_Output.xlsx");
}

// Run the script
generateSchedule();

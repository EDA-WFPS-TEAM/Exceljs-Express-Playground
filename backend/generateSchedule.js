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
  {
    organization: "Deer Creek Warriors",
    event: "Youth Volleyball",
    location: "Deer Creek Elementary School",
    days: ["Wednesday"],
    time: "6:30 PM - 8:00 PM",
    month: "January",
  },
  {
    organization: "Aurora Stars",
    event: "Basketball Camp",
    location: "Aurora Elementary School",
    days: ["Saturday"],
    time: "9:00 AM - 11:00 AM",
    month: "January",
  },
  {
    organization: "Freedom Flyers",
    event: "Junior Basketball",
    location: "Freedom Elementary School",
    days: ["Monday", "Wednesday"],
    time: "6:00 PM - 7:30 PM",
    month: "January",
  },
  {
    organization: "Harwood Hawks",
    event: "Volleyball Practice",
    location: "Harwood Elementary School",
    days: ["Thursday"],
    time: "4:00 PM - 5:30 PM",
    month: "January",
  },
  {
    organization: "Legacy Lions",
    event: "Soccer Practice",
    location: "Legacy Elementary School",
    days: ["Friday"],
    time: "7:00 PM - 8:30 PM",
    month: "January",
  },
  // Add more entries if needed
];

async function generateSchedule() {
  // Create a new workbook and worksheet for the schedule
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Gym Schedule - January");

  // Set up column headers based on the observed structure
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

  // Populate schedule based on sample data
  applications.forEach((app) => {
    app.days.forEach((day) => {
      worksheet.addRow({
        time: `${app.time} (${day})`,
        [app.location
          .split(" ")[0]
          .toLowerCase()]: `${app.organization} (${app.event})`,
      });
    });
  });

  // Save the workbook to a file
  await workbook.xlsx.writeFile("Gym_Schedule_Output.xlsx");
  console.log("Schedule generated: Gym_Schedule_Output.xlsx");
}

// Run the script
generateSchedule();

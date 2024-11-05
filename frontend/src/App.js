import React from "react";
import axios from "axios";

function App() {
  const downloadExcel = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/api/export-data",
        {
          responseType: "blob",
        }
      );
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "data.xlsx");
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Error downloading the Excel file", error);
    }
  };

  return (
    <div className="App">
      <h1>Excel Playground</h1>
      <button onClick={downloadExcel}>Download Excel</button>
    </div>
  );
}

export default App;

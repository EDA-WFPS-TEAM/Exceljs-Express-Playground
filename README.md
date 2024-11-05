# Excel Playground Project

This project is a playground environment to demonstrate Excel file generation using a Node.js backend (with Express) and a React frontend. The backend generates Excel files with sample data, and the frontend allows users to download these files.

## Table of Contents

1. [Project Structure](#project-structure)
2. [Setup Instructions](#setup-instructions)
3. [Running the Project](#running-the-project)
4. [Testing the Excel Download](#testing-the-excel-download)
5. [Tech Stack](#tech-stack)

---

## Project Structure

```plaintext
EXCELJS-EXPRESS-PLAYGROUND/
├── backend/               # Node.js + Express backend
│   ├── index.js           # Main server file
│   ├── package.json       # Backend dependencies
│   └── .env               # Environment variables (optional)
├── frontend/              # React frontend
│   ├── src/               # React source files
│   ├── public/            # Static assets
│   ├── package.json       # Frontend dependencies
│   └── .env               # Environment variables for frontend
└── README.md              # Project documentation
└── .gitignore             # Git ignore file
```

## Setup Instructions

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v14 or newer)
- **npm** (comes with Node.js)

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone <repository-url>
cd excel-playground
```

### 2. Install Dependencies

Backend
Navigate to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
Frontend
```

Navigate to the frontend directory:

```bash
cd ../frontend
```

Install dependencies:

```bash
npm install
```

### Running the Project

Backend (Express Server)
In the backend directory, start the server:

```bash
node index.js
```

The backend server will start on http://localhost:3001.

Frontend (React App)
Open a new terminal window. In the frontend directory, start the React app:

```bash
npm start
```

The React app will start on http://localhost:3000.

Environment Variables (Optional)
If your setup requires environment variables, you can create .env files in both the backend and frontend folders.

For example:

#### Backend (backend/.env):

PORT=3001

#### Frontend (frontend/.env):

REACT_APP_API_URL=http://localhost:3001

#### Testing the Excel Download:

Visit the React app at http://localhost:3000.

Click the Download Excel button.

An Excel file (data.xlsx) containing sample data should download automatically.

### Tech Stack

Backend: Node.js, Express, ExcelJS
Frontend: React, Axios
Other: CORS middleware for cross-origin support

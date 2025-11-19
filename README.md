# Task Management App

A simple **Task Management** application built using the **MERN stack** (MongoDB, Express, React, Node.js).  
This project allows users to **create, read, update, and delete tasks** with a clean and functional interface.

---

## 🛠 Tech Stack

- **Frontend:** React (Vite)  
- **Backend:** Node.js + Express  
- **Database:** MongoDB Atlas  
- **Others:** Axios, dotenv, CORS, Mongoose

---

## 🔹 Features

- Add new tasks  
- View all tasks  
- Update existing tasks  
- Delete tasks  
- Fully RESTful API  
- JSON-based API responses  
- Cross-Origin enabled (CORS)  

---

## ⚡ Project Structure

Task-Management/
│
├── backend/ # Express server, APIs, MongoDB connection
│ ├── config/
│ │ └── db.js # MongoDB connection
│ ├── controllers/ # Business logic
│ ├── models/ # Mongoose schemas
│ ├── routes/ # API routes
│ ├── server.js # Entry point
│ └── .env # Environment variables (ignored)
│
├── frontend/ # React Vite frontend
│ ├── src/
│ ├── public/
│ ├── package.json
│ └── .env # Environment variables (ignored)
│
├── .gitignore
└── README.md

yaml
Copy code

---

## ⚙️ Installation

### 1. Clone the repo
```bash
git clone https://github.com/venkataraju0707/Task-Management.git
cd Task-Management
2. Setup Backend
bash
Copy code
cd backend
npm install
Create a .env file:

ini
Copy code
MONGO_URI=your_mongodb_connection_string
PORT=5000
NODE_ENV=development
Start the backend server:

bash
Copy code
npm run dev
The backend runs on: http://localhost:5000

3. Setup Frontend
bash
Copy code
cd ../frontend
npm install
npm run dev
Frontend runs on: http://localhost:5173 (or Vite's default port)

📦 API Routes (Backend)
Method	Route	Description
GET	/api/tasks	Get all tasks
POST	/api/tasks	Create a new task
GET	/api/tasks/:id	Get a single task
PUT	/api/tasks/:id	Update a task
DELETE	/api/tasks/:id	Delete a task

🔐 Environment Variables
Create .env in backend:

ini
Copy code
MONGO_URI=your_mongodb_connection_string
PORT=5000
NODE_ENV=development
Never push your .env to GitHub.

💡 Notes
Make sure your MongoDB Atlas IP is whitelisted.

Frontend uses Axios to communicate with backend APIs.

.gitignore ensures node_modules and .env files are not uploaded.

📌 License
This project is licensed under the MIT License.

yaml
Copy code

---

If you want, I can also make a **shorter version with badges and prettier formatting** suitable for GitHub. It will look very professional.  

Do you want me to do that?

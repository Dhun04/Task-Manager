# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



Overview

The MERN Task Manager is a full-stack web application built using the MERN (MongoDB, Express.js, React.js, and Node.js) stack. It allows users to manage their tasks efficiently with features such as authentication, task assignment, priority levels, and due dates. The app also includes OAuth login and image storage with Cloudinary.

Features

1. User Authentication: Sign up, login/logout, JWT authentication, OAuth (Google login)

2. Task Management:

   -Create, read, update, and delete (CRUD) tasks
   
   -Assign tasks to users
   
   -Set task priorities (High, Medium, Low)
   
   -Add due dates and reminders
   
   -Label tasks and track status

4. Collaboration: Admins can assign tasks to multiple users

5. Image Storage: Upload images using Cloudinary

6. State Management: Redux Toolkit & Context API

7. Navigation: React Router for frontend navigation

8. Deployment: Hosted on Vercel (Frontend) and Render/Heroku (Backend)

Tech Stack

Frontend:

-React.js (with Vite)

-Redux Toolkit.

-Tailwind CSS & Material UI

-React Router

Backend:

-Node.js & Express.js

-MongoDB (with Mongoose)

-JWT Authentication

-Passport.js (for OAuth)

-Cloudinary (for image storage)

-Nodemailer (for email notifications)




👨‍💻 Contributors

Your Name (Replace with actual contributor names)

🛠️ Installation Guide

Follow these steps to set up and run the project on your local machine.

1️⃣ Clone the Repository

git clone https://github.com/your-repo/mern-signup-system.git
cd mern-signup-system

2️⃣ Setup Backend

Navigate to the backend folder and install dependencies:

cd backend
npm install

Create a .env file in the backend directory:

MONGO_URI=mongodb+srv://your-mongodb-url
JWT_SECRET=your-secret-key

Start the Backend Server

node server.js

3️⃣ Setup Frontend

Navigate to the frontend folder and install dependencies:

cd ../frontend
npm install

Start the React App

npm start

4️⃣ Open the Application

Visit http://localhost:3000 in your browser.

📜 API Endpoints

Method

Endpoint

Description

POST

/signup

Register a new user

📷 Screenshots

(Add screenshots of the app here)

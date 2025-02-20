# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



Overview

The MERN Task Manager is a full-stack web application built using the MERN (MongoDB, Express.js, React.js, and Node.js) stack. It allows users to manage their tasks efficiently with features such as authentication, task assignment, priority levels, and due dates. The app also includes OAuth login and image storage with Cloudinary.

Features

User Authentication: Sign up, login/logout, JWT authentication, OAuth (Google login)

Task Management:

Create, read, update, and delete (CRUD) tasks

Assign tasks to users

Set task priorities (High, Medium, Low)

Add due dates and reminders

Label tasks and track status

Collaboration: Admins can assign tasks to multiple users

Image Storage: Upload images using Cloudinary

State Management: Redux Toolkit & Context API

Navigation: React Router for frontend navigation

Deployment: Hosted on Vercel (Frontend) and Render/Heroku (Backend)

Tech Stack

Frontend:

React.js (with Vite)

Redux Toolkit

Tailwind CSS & Material UI

React Router

Backend:

Node.js & Express.js

MongoDB (with Mongoose)

JWT Authentication

Passport.js (for OAuth)

Cloudinary (for image storage)

Nodemailer (for email notifications)

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'; // Import Tailwind CSS styles
import LoginPage from './pages/LoginPage';
import TaskFormPage from './pages/TaskFormPage';
import HomePage from './pages/HomePage';

const MainApp = () => { // Renamed the local App component to MainApp
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/add-task" element={<TaskFormPage />} />
      </Routes>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainApp /> {/* Use the renamed MainApp component */}
  </React.StrictMode>
);

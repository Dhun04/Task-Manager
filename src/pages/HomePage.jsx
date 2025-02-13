import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white relative">
      {/* Header with Black Background */}
      <div className="w-full bg-black text-white py-6 shadow-lg flex justify-center">
        <h1 className="text-4xl font-extrabold animate-fadeInDown">🚀 Task Manager</h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-grow animate-fadeIn">
        <p className="text-lg mb-6 opacity-90">Organize your tasks effortlessly!</p>

        <div className="flex space-x-6">
          <Link
            to="/login"
            className="px-8 py-3 bg-white text-purple-600 font-bold rounded-xl shadow-lg transform transition-all duration-300 hover:scale-110 hover:bg-purple-100 hover:shadow-2xl focus:ring-4 focus:ring-purple-300 animate-bounce"
          >
            🔑 Login
          </Link>

          <Link
            to="/signup"
            className="px-8 py-3 bg-white text-blue-600 font-bold rounded-xl shadow-lg transform transition-all duration-300 hover:scale-110 hover:bg-blue-100 hover:shadow-2xl focus:ring-4 focus:ring-blue-300 animate-bounce delay-200"
          >
            📝 Sign Up
          </Link>

          <Link
            to="/add-task"
            className="px-8 py-3 bg-white text-green-600 font-bold rounded-xl shadow-lg transform transition-all duration-300 hover:scale-110 hover:bg-green-100 hover:shadow-2xl focus:ring-4 focus:ring-green-300 animate-bounce delay-400"
          >
            ➕ Add Task
          </Link>
        </div>
      </div>

      {/* Floating Footer */}
      <p className="absolute bottom-6 text-sm opacity-80 animate-fadeInUp">
        Manage your tasks efficiently with ease. ✨
      </p>
    </div>
  );
};

export default HomePage;

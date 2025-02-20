import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <header className="bg-black text-white py-4 text-center text-4xl font-bold">
        TASK MANAGER
      </header>

      {/* Main Content Section */}
      <div className="flex flex-col items-center justify-center flex-grow bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-10">
        <motion.h1
          className="text-5xl font-extrabold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Organize Your Tasks Efficiently
        </motion.h1>

        <motion.p
          className="text-lg text-center mb-6 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Stay on top of your to-dos with our easy-to-use task management tool.
          Assign priorities, set deadlines, and collaborate with ease.
        </motion.p>

        <motion.div
          className="flex space-x-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <Link to="/tasks">
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
              View Tasks
            </button>
          </Link>
          <Link to="/taskform">
            <button className="bg-black text-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-gray-800 transition">
              Add Task
            </button>
          </Link>
          <Link to="/login">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-blue-700 transition">
              Login
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;

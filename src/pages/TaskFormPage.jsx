import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const TaskFormPage = () => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("medium");
  const [dueDate, setDueDate] = useState("");
  const [setAlarm, setSetAlarm] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) {
      setError("Task name is required!");
      return;
    }
    if (!dueDate) {
      setError("Please select a due date!");
      return;
    }
    
    console.log("Task Added:", { task, priority, dueDate, setAlarm });

    // Clear fields
    setTask("");
    setPriority("medium");
    setDueDate("");
    setSetAlarm(false);
    setError("");

    // Navigate to Task List
    navigate("/tasks");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-blue-800 to-gray-900 text-white p-6 relative">
      {/* Task Form Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-lg text-gray-900 mt-6"
      >
        <h2 className="text-3xl font-extrabold text-center text-blue-800 mb-6">Add Task</h2>

        {error && <p className="text-red-600 text-center mb-4 font-semibold">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Task Name Input */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">Task Name📝</label>
            <input
              type="text"
              className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              required
            />
          </div>

          {/* Priority Selection */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">Priority📌</label>
            <select
              className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="low">🟢Low</option>
              <option value="medium">🟡Medium</option>
              <option value="high">🟠High</option>
            </select>
          </div>

          {/* Due Date Input */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">Due Date📅</label>
            <input
              type="date"
              className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              required
            />
          </div>

          {/* Set Alarm Checkbox */}
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="setAlarm"
              checked={setAlarm}
              onChange={(e) => setSetAlarm(e.target.checked)}
              className="w-5 h-5 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
            />
            <label htmlFor="setAlarm" className="font-semibold text-gray-700">Set Alarm⏰</label>
          </div>

          {/* Submit Button */}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-3 rounded-lg shadow-md transition"
          >
            Add Task
          </motion.button>
        </form>
      </motion.div>

      {/* View Tasks Button at Bottom Right */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 bg-purple-500 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition"
        onClick={() => navigate("/tasks")}
      >
        View Tasks
      </motion.button>
    </div>
  );
};

export default TaskFormPage;

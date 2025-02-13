import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addTask } from "../api"; // Import API function

const TaskFormPage = () => {
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    priority: "Medium",
    dueDate: "",
    wantAlarm: false,
  });

  const navigate = useNavigate();
  const [error, setError] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTaskData({
      ...taskData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle task submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const userId = localStorage.getItem("userId"); // Get userId from storage
      if (!userId) {
        setError("User not authenticated!");
        return;
      }

      const response = await addTask({ ...taskData, userId });
      console.log("Task added successfully:", response);
      navigate("/tasks"); // Redirect to tasks list
    } catch (err) {
      setError(err.response?.data?.error || "Failed to add task.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">Create Task</h2>

      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <input
          type="text"
          name="title"
          placeholder="Task Title"
          className="border rounded p-2 w-full mb-2"
          value={taskData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Task Description"
          className="border rounded p-2 w-full mb-2"
          value={taskData.description}
          onChange={handleChange}
          required
        />
        <select
          name="priority"
          className="border rounded p-2 w-full mb-2"
          value={taskData.priority}
          onChange={handleChange}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <input
          type="date"
          name="dueDate"
          className="border rounded p-2 w-full mb-2"
          value={taskData.dueDate}
          onChange={handleChange}
          required
        />
        <label className="flex items-center space-x-2 mb-4">
          <input type="checkbox" name="wantAlarm" checked={taskData.wantAlarm} onChange={handleChange} />
          <span>Set Reminder</span>
        </label>

        <button type="submit" className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700 w-full">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskFormPage;

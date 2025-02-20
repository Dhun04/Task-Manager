import React, { useState } from "react";

const TaskFormPage = () => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("medium");
  const [dueDate, setDueDate] = useState("");
  const [alarmTime, setAlarmTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Task Added:", { task, priority, dueDate, alarmTime });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-700 text-white">


      <div className="bg-white p-8 rounded-lg shadow-lg w-96 text-gray-900">
        <h2 className="text-3xl font-bold text-center">Add Task</h2>
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <label className="block mb-1 font-medium">Task Name</label>
            <input
              type="text"
              className="w-full p-3 rounded-md bg-gray-200 focus:ring-2 focus:ring-purple-500"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Priority</label>
            <select
              className="w-full p-3 rounded-md bg-gray-200 focus:ring-2 focus:ring-purple-500"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Due Date</label>
            <input
              type="date"
              className="w-full p-3 rounded-md bg-gray-200 focus:ring-2 focus:ring-purple-500"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Set Alarm</label>
            <input
              type="time"
              className="w-full p-3 rounded-md bg-gray-200 focus:ring-2 focus:ring-purple-500"
              value={alarmTime}
              onChange={(e) => setAlarmTime(e.target.value)}
            />
          </div>
          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-md transition">
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskFormPage;

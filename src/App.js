import React, { useState } from "react";
import "./App.css"; // Make sure this file exists for styling.

const App = () => {
  // Mock Data
  const [tasks, setTasks] = useState([
    { id: 1, name: "Buy groceries", status: "Pending" },
    { id: 2, name: "Complete homework", status: "Completed" },
    { id: 3, name: "Walk the dog", status: "Pending" },
  ]);

  const [filter, setFilter] = useState("All"); // All, Pending, Completed

  // Toggle Task Status
  const toggleTaskStatus = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, status: task.status === "Pending" ? "Completed" : "Pending" }
          : task
      )
    );
  };

  // Filter Tasks Based on Status
  const filteredTasks =
    filter === "All" ? tasks : tasks.filter((task) => task.status === filter);

  return (
    <div className="container">
      <h1>To-Do Application</h1>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        <button
          className={filter === "All" ? "active" : ""}
          onClick={() => setFilter("All")}
        >
          All
        </button>
        <button
          className={filter === "Pending" ? "active" : ""}
          onClick={() => setFilter("Pending")}
        >
          Pending
        </button>
        <button
          className={filter === "Completed" ? "active" : ""}
          onClick={() => setFilter("Completed")}
        >
          Completed
        </button>
      </div>

      {/* To-Do List */}
      <ul className="todo-list">
        {filteredTasks.map((task) => (
          <li key={task.id} className={`todo-item ${task.status.toLowerCase()}`}>
            <span>{task.name}</span>
            <button onClick={() => toggleTaskStatus(task.id)}>
              {task.status === "Pending" ? "Mark as Completed" : "Mark as Pending"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

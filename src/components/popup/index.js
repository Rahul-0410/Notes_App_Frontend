import React, { useState } from "react";
import "./TaskPopup.css";
import { addTask } from "../../apis/task-api";

const TaskPopup = ({ isOpen, onClose, onSubmit }) => {
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async () => {
    if (!description.trim()) {
      alert("Please enter a task description");
      return;
    }

    setIsLoading(true);
    try {
      const result = await addTask({ description });
      console.log("Task added:", result);
      // onSubmit(result);
      setDescription("");
      onClose();
    } catch (error) {
      console.error("Error adding task:", error);
      alert("Failed to add task. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="task-popup-overlay">
      <div className="task-popup-card">
        <h2 className="add">Add New Task</h2>
        <textarea
          className="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter your task..."
          rows="3"
          disabled={isLoading}
        />
        <div className="task-popup-buttons">
          <button className="btn" onClick={handleSubmit} disabled={isLoading}>
            {isLoading ? "Submitting..." : "Submit"}
          </button>
          <button className="btn" onClick={onClose} disabled={isLoading}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskPopup;

import React, { useState } from "react";
import "./TodoApp.css";

export default function TodoApp() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (!todo.trim()) return; 
    setTodos([...todos, todo]);
    setTodo("");
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((ele, i) => i !== index));
  };

  return (
    <div className="todo-container">
      <h2 className="todo-title">📝 My To-Do List</h2>

      <div className="todo-input-section">
        <input
          type="text"
          placeholder="Add a new task..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="todo-input"
        />
        <button onClick={handleAddTodo} className="todo-add-btn">
          Add
        </button>
      </div>

      <ul className="todo-list">
        {todos.map((t, index) => (
          <li key={index} className="todo-item">
            <span>{t}</span>
            <button
              onClick={() => handleDeleteTodo(index)}
              className="todo-delete-btn"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

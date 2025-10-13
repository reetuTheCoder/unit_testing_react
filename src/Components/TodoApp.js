import React, { useState } from "react";
import "./TodoApp.css";

export default function TodoApp() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleAddTodo = () => {
    if (!todo.trim()) return;

    if (isEditing) {
      // update existing todo
      const updatedTodos = [...todos];
      console.log("updatedTodos", updatedTodos); // here will be todo old value

      updatedTodos[currentIndex] = todo;

      console.log("updatedTodos new", updatedTodos[currentIndex]); // here will be todo updated value
      setTodos(updatedTodos);
      setIsEditing(false);
      setCurrentIndex(null);
    } else {
      // add new todo
      setTodos([...todos, todo]);
    }

    setTodo("");
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
    // if deleting the item being edited, reset edit state
    if (isEditing && index === currentIndex) {
      setIsEditing(false);
      setTodo("");
      setCurrentIndex(null);
    }
  };

  const handleEditTodo = (index) => {
    setTodo(todos[index]);
    setIsEditing(true);
    setCurrentIndex(index);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setTodo("");
    setCurrentIndex(null);
  };

  return (
    <div className="todo-container">
      <h2 className="todo-title">📝 My To-Do List</h2>

      <div className="todo-input-section">
        <input
          type="text"
          placeholder="Add or edit task..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="todo-input"
        />
        <button onClick={handleAddTodo} className="todo-add-btn">
          {isEditing ? "Save" : "Add"}
        </button>
         {isEditing && (
          <button onClick={handleCancelEdit} className="todo-cancel-btn">
            Cancel
          </button>
        )}
      </div>

      <ul className="todo-list">
        {todos.map((t, index) => (
          <li key={index} className="todo-item">
            <span>{t}</span>
            <div className="todo-actions">
              <button
                onClick={() => handleEditTodo(index)}
                className="todo-edit-btn"
              >
                ✏️
              </button>
              <button
                onClick={() => handleDeleteTodo(index)}
                className="todo-delete-btn"
              >
                ❌
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

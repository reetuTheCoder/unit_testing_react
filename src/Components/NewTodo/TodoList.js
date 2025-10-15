import React from "react";

function TodoList({ todos, toggleComplete, deleteTodo }) {
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <li key={index} className="todo-item">
          <span
            onClick={() => toggleComplete(index)}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {todo.text}
          </span>
          <button onClick={() => deleteTodo(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;

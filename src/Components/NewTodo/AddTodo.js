import React, { useState } from "react";
import TodoList from "./TodoList";
import CompletedCounter from "./CompletedCounter";

function AddTodo() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (task.trim() !== "") {
      setTodos([...todos, { text: task, completed: false }]);
      setTask("");
    }
  };

  const toggleComplete = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const completedCount = todos.filter((t) => t.completed).length;

  return (
    <div>
      <div className="input-section">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
      <CompletedCounter completedCount={completedCount} total={todos.length} />
    </div>
  );
}

export default AddTodo;

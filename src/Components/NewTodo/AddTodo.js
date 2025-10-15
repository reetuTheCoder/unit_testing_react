import React, { useState } from "react";
import TodoList from "./TodoList";
import CompletedCounter from "./CompletedCounter";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, setTask, setTodos,deleteTodo, toggleComplete } from "../../redux/actions/todoActions";

function AddTodo() {
  const dispatch = useDispatch();
  const { task, todos } = useSelector((state) => state.todo);

  const completedCount = todos.filter((t) => t.completed).length;

  return (
    <div>
      <div className="input-section">
        <input
          type="text"
          value={task}
          onChange={(e) => dispatch(setTask(e.target.value))}
          placeholder="Add a new task"
        />
        <button onClick={() => dispatch(addTodo())}>Add</button>
      </div>

      <TodoList todos={todos} toggleComplete={(i) => dispatch(toggleComplete(i))} deleteTodo={(i) => dispatch(deleteTodo(i))} />
      <CompletedCounter completedCount={completedCount} total={todos.length} />
    </div>
  );
}

export default AddTodo;
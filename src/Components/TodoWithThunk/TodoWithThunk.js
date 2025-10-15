import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, fetchTodos } from "../../redux/actions/todoActions";

function TodoWithThunk() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Plain Redux Todo App</h2>

      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={() => dispatch(addTodo(task))}>Add</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {list.map((todo) => (
          <li key={todo.id}>
            {todo.title || todo.text}
            <button onClick={() => dispatch(deleteTodo(todo.id))}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoWithThunk;

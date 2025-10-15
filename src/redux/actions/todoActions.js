export const fetchTodos = () => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_TODOS_REQUEST" });
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
      const data = await res.json();
      dispatch({ type: "FETCH_TODOS_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_TODOS_FAILURE", payload: error.message });
    }
  };
};

// ✅ Sync Actions
export const addTodo = (text) => ({
  type: "ADD_TODO",
  payload: text,
});

export const deleteTodo = (id) => ({
  type: "DELETE_TODO",
  payload: id,
});

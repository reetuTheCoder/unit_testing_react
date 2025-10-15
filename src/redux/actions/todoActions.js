export const ADD_TODO = "ADD_TODO";
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";
export const DELETE_TODO = "DELETE_TODO";
export const SET_TASK = "SET_TASK";

export const setTask = (task) => ({
  type: SET_TASK,
  payload: task,
});

export const addTodo = () => ({
  type: ADD_TODO,
});

export const toggleComplete = (index) => ({
  type: TOGGLE_COMPLETE,
  payload: index,
});

export const deleteTodo = (index) => ({
  type: DELETE_TODO,
  payload: index,
});

import { ADD_TODO, TOGGLE_COMPLETE, DELETE_TODO, SET_TASK } from "../actions/todoActions";

const initialState = {
  task: "",
  todos: [],
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TASK:
      return { ...state, task: action.payload };

    case ADD_TODO:
      if (!state.task.trim()) return state; 
      return {
        ...state,
        todos: [...state.todos, { text: state.task, completed: false }],
        task: "",
      };

    case TOGGLE_COMPLETE:
      return {
        ...state,
        todos: state.todos.map((todo, i) =>
          i === action.payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((_, i) => i !== action.payload),
      };

    default:
      return state;
  }
}

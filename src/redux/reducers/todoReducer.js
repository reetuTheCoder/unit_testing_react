const initialState = {
  list: [],
  loading: false,
  error: null,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TODOS_REQUEST":
      return { ...state, loading: true };

    case "FETCH_TODOS_SUCCESS":
      return { ...state, loading: false, list: action.payload };

    case "FETCH_TODOS_FAILURE":
      return { ...state, loading: false, error: action.payload };

    case "ADD_TODO":
      return { ...state, list: [...state.list, { id: Date.now(), text: action.payload }] };

    case "DELETE_TODO":
      return { ...state, list: state.list.filter((todo) => todo.id !== action.payload) };

    default:
      return state;
  }
};

export default todoReducer;

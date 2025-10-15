import { createStore, combineReducers } from "redux";
import contactReducer from "./reducers/contactReducer";
import todoReducer from "./reducers/todoReducer";

const rootReducer = combineReducers({
  contact: contactReducer,
  todo: todoReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

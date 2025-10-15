import { createStore, combineReducers } from "redux";
import contactReducer from "./reducers/contactReducer";

const rootReducer = combineReducers({
  contact: contactReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

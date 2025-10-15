import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk"; 
import todoReducer from "./reducers/todoReducer";

const rootReducer = combineReducers({
  todos: todoReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
// console.log("fdsfn", store);
console.log("store.getState",store.getState());


export default store;

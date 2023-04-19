import { combineReducers, createStore } from "redux";

const reducer = combineReducers({
  getProducts: getProductReducer,
});

const store = createStore({
  reducer,
});

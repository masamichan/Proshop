import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({});
const initialstate = {};
const applyMiddleware = [thunk];
const store = createStore(
  reducer,
  initialstate,
  composeWithDevTools(...applyMiddleware(thunk))
);

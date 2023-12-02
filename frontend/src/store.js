import { combineReducers, applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productListReducers } from "./reducers/productReducers";

const reducer = combineReducers({
  productsList: productListReducers,
});
const initialstate = {};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialstate,
  composeWithDevTools(...applyMiddleware(thunk))
);

export default store;

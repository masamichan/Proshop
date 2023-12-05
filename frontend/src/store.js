import { combineReducers, applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productListReducers,
  productDetailsReducers,
} from "./reducers/productReducers";
import { cartReducers } from "./reducers/cartReducers";

const reducer = combineReducers({
  productsList: productListReducers,
  productDetails: productDetailsReducers,
  cart: cartReducers,
});

const cartItemsStorage = localStorage.get(Item)("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const initialState = { cart: { cartItems: cartItemsStorage } };
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

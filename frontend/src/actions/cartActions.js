import axios from "axios";
import { CART_ADD_ITEM } from "../constants/cartConstance";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      data: data_.id,
      name: data.name,
      price: data.image,
      countInStock: data.countInStock,
    },
  });
  localStorage.setItem("cartItems", Json.stringify(getState().cartItem));
};

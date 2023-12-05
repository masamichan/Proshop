import { CART_ADD_ITEM } from "../constants/cartConstance";

export const cartReducers = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const exitItem = state.cartItems.find((x) => x.product === item.product);

      if (exitItem) {
        return {
          ...state,
          cartItems: start.cartItems.map((x) =>
            state.product === exitItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    default:
      return state;
  }
};

import { setCartItems } from "./cartSlice";

export const cartAction = (product) => async (dispatch) => {
  dispatch(setCartItems(product));
};

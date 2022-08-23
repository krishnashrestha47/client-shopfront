import { setCartItems } from "./cartSlice";

export const addToCartAction = (productObj) => (dispatch) => {
  dispatch(setCartItems(productObj));
};

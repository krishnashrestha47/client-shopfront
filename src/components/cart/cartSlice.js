import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItems: (state, { payload }) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === payload._id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].qty += 1;
      } else {
        const tempProduct = { ...payload, qty: 1 };
        state.cartItems.push(tempProduct);
      }
    },
    reduceCartItem: (state, { payload }) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === payload._id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].qty -= 1;
      }
      const newCartItem = state.cartItems.filter(
        (item) => item._id !== payload._id
      );
      if (state.cartItems[itemIndex].qty <= 0) {
        state.cartItems = newCartItem;
      }
    },
    removeCartItem: (state, { payload }) => {
      const newCartItem = state.cartItems.filter(
        (item) => item._id !== payload._id
      );
      state.cartItems = newCartItem;
    },
  },
});

const { reducer, actions } = cartSlice;

export const { setCartItems, reduceCartItem, removeCartItem } = actions;

export default reducer;

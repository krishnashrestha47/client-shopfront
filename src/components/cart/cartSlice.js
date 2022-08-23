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

      // state.cartItems = [...state.cartItems, payload];
      // const lastProduct = state.cartItems.filter(
      //   (item) => item._id === payload._id
      // );
      // if (lastProduct) {
      //   const newArg = state.cartItems.map((item) => {
      //     if (item._id === payload._id) {
      //       item.qty = item.qty + 1;
      //     }
      //     return item;
      //   });
      //   state.cartItems = newArg;
      // } else {
      //   state.cartItems = [...state.cartItems, payload];
      // }
    },
  },
});

const { reducer, actions } = cartSlice;

export const { setCartItems } = actions;

export default reducer;

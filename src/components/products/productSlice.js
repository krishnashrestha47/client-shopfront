import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getAllProducts: (state, { payload }) => {
      state.products = payload;
    },
  },
});

const { reducer, actions } = productSlice;

export const { getAllProducts } = actions;

export default reducer;

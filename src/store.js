import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../src/components/cart/cartSlice";
import productReducer from "../src/components/products/productSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../src/components/cart/cartSlice";
import productReducer from "../src/components/products/productSlice";
import categoryReducer from "../src/components/category-layout/categorySlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    category: categoryReducer,
  },
});

export default store;

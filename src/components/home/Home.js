import React, { useEffect } from "react";
import Carousels from "../carousel/Carousels.js";
import CategoryLayout from "../category-layout/CategoryLayout.js";
import { Products } from "../products/Products.js";
import "./Home.css";

import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAction } from "../products/productAction.js";
import { fetchCategoriesAction } from "../category-layout/categoryAction.js";

const Home = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProductsAction());
    dispatch(fetchCategoriesAction());
  }, [dispatch]);

  return (
    <div className="container">
      <Carousels />
      <CategoryLayout />
      <Products />
    </div>
  );
};

export default Home;

import React from "react";
import Carousels from "../carousel/Carousels.js";
import CategoryLayout from "../category-layout/CategoryLayout.js";
import { Products } from "../products/Products.js";
import "./Home.css";

const Home = ({ bikes }) => {
  return (
    <div className="main">
      <Carousels />
      <CategoryLayout />
      <Products bikes={bikes} />
    </div>
  );
};

export default Home;

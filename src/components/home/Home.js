import React from "react";
import Carousels from "../carousel/Carousels.js";
import { Products } from "../products/Products.js";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Carousels />
      <Products />
    </div>
  );
};

export default Home;

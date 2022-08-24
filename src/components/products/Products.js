import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CustomCard from "../custom-card/CustomCard";

export const Products = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.product);

  console.log(products);

  return (
    <>
      <h1 className="text-center">Products</h1>
      <div className="d-flex justify-content-between flex-wrap mt-5">
        {products.map((item, i) => (
          <Link
            key={i}
            className="nav-link"
            to={`/product-landing-page/${item._id}`}
          >
            <CustomCard
              productImageStyle={{ height: "10rem", padding: "10px" }}
              productCardSize={{ width: "18rem", height: "18rem" }}
              item={item}
              f-size={"fs-4"}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

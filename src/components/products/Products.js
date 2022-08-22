import React from "react";
import { Link } from "react-router-dom";
import bike1 from "../../assets/bike1.png";
import CustomCard from "../custom-card/CustomCard";

export const Products = () => {
  const bikes = [
    {
      img: bike1,
      _id: 1,
      name: "Trek SLR6",
      description:
        "The Émonda SLR 6 eTap is an ultra-light, aerodynamic carbon road bike that's designed and built to be the fastest climbing bike we’ve ever made.",
    },
    {
      img: bike1,
      _id: 2,
      name: "Trek SLR6",
      description:
        "The Émonda SLR 6 eTap is an ultra-light, aerodynamic carbon road bike that's designed and built to be the fastest climbing bike we’ve ever made.",
    },
    {
      img: bike1,
      _id: 3,
      name: "Trek SLR6",
      description:
        "The Émonda SLR 6 eTap is an ultra-light, aerodynamic carbon road bike that's designed and built to be the fastest climbing bike we’ve ever made.",
    },
    {
      img: bike1,
      _id: 4,
      name: "Trek SLR6",
      description:
        "The Émonda SLR 6 eTap is an ultra-light, aerodynamic carbon road bike that's designed and built to be the fastest climbing bike we’ve ever made.",
    },
    {
      img: bike1,
      _id: 5,
      name: "Trek SLR6",
      description:
        "The Émonda SLR 6 eTap is an ultra-light, aerodynamic carbon road bike that's designed and built to be the fastest climbing bike we’ve ever made.",
    },
    {
      img: bike1,
      _id: 6,
      name: "Trek SLR6",
      description:
        "The Émonda SLR 6 eTap is an ultra-light, aerodynamic carbon road bike that's designed and built to be the fastest climbing bike we’ve ever made.",
    },
    {
      img: bike1,
      _id: 7,
      name: "Trek SLR6",
      description:
        "The Émonda SLR 6 eTap is an ultra-light, aerodynamic carbon road bike that's designed and built to be the fastest climbing bike we’ve ever made.",
    },
    {
      img: bike1,
      _id: 8,
      name: "Trek SLR6",
      description:
        "The Émonda SLR 6 eTap is an ultra-light, aerodynamic carbon road bike that's designed and built to be the fastest climbing bike we’ve ever made.",
    },
    {
      img: bike1,
      _id: 9,
      name: "Trek SLR6",
      description:
        "The Émonda SLR 6 eTap is an ultra-light, aerodynamic carbon road bike that's designed and built to be the fastest climbing bike we’ve ever made.",
    },
  ];

  return (
    <div className="d-flex justify-content-between flex-wrap mt-5">
      {bikes.map((item, i) => (
        <Link
          key={i}
          className="nav-link"
          to={`/product-landing-page/${item._id}`}
        >
          <CustomCard item={item} size={"fs-4"} />
        </Link>
      ))}
    </div>
  );
};

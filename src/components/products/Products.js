import React from "react";
import bike1 from "../../assets/bike1.png";
import CustomCard from "../custom-card/CustomCard";

export const Products = () => {
  const bikes = [
    {
      img: bike1,
      name: "Trek SLR6",
      description:
        "The Émonda SLR 6 eTap is an ultra-light, aerodynamic carbon road bike that's designed and built to be the fastest climbing bike we’ve ever made.",
    },
    {
      img: bike1,
      name: "Trek SLR6",
      description:
        "The Émonda SLR 6 eTap is an ultra-light, aerodynamic carbon road bike that's designed and built to be the fastest climbing bike we’ve ever made.",
    },
    {
      img: bike1,
      name: "Trek SLR6",
      description:
        "The Émonda SLR 6 eTap is an ultra-light, aerodynamic carbon road bike that's designed and built to be the fastest climbing bike we’ve ever made.",
    },
    {
      img: bike1,
      name: "Trek SLR6",
      description:
        "The Émonda SLR 6 eTap is an ultra-light, aerodynamic carbon road bike that's designed and built to be the fastest climbing bike we’ve ever made.",
    },
    {
      img: bike1,
      name: "Trek SLR6",
      description:
        "The Émonda SLR 6 eTap is an ultra-light, aerodynamic carbon road bike that's designed and built to be the fastest climbing bike we’ve ever made.",
    },
    {
      img: bike1,
      name: "Trek SLR6",
      description:
        "The Émonda SLR 6 eTap is an ultra-light, aerodynamic carbon road bike that's designed and built to be the fastest climbing bike we’ve ever made.",
    },
    {
      img: bike1,
      name: "Trek SLR6",
      description:
        "The Émonda SLR 6 eTap is an ultra-light, aerodynamic carbon road bike that's designed and built to be the fastest climbing bike we’ve ever made.",
    },
    {
      img: bike1,
      name: "Trek SLR6",
      description:
        "The Émonda SLR 6 eTap is an ultra-light, aerodynamic carbon road bike that's designed and built to be the fastest climbing bike we’ve ever made.",
    },
    {
      img: bike1,
      name: "Trek SLR6",
      description:
        "The Émonda SLR 6 eTap is an ultra-light, aerodynamic carbon road bike that's designed and built to be the fastest climbing bike we’ve ever made.",
    },
  ];

  return (
    <div className="d-flex justify-content-between flex-wrap mt-5">
      {bikes.map((item, i) => (
        <CustomCard item={item} />
      ))}
    </div>
  );
};

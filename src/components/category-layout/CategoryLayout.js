import React from "react";
import bike1 from "../../assets/bike1.png";
import CustomCard from "../custom-card/CustomCard";

const CategoryLayout = () => {
  const categories = [
    {
      img: bike1,
      name: "Mountain Bikes",
    },
    {
      img: bike1,
      name: "Road Bikes",
    },
    {
      img: bike1,
      name: "City Bikes",
    },
    {
      img: bike1,
      name: "E Bikes",
    },
    {
      img: bike1,
      name: "Kids Bikes",
    },
    {
      img: bike1,
      name: "Accessories",
    },
  ];

  return (
    <div className="mt-5">
      <h1 className="text-center">
        <i className="fa-solid fa-bicycle"></i> Shop By Category
      </h1>
      <div className="d-flex justify-content-between flex-wrap mt-5">
        {categories.map((item, i) => (
          <CustomCard item={item} size={"fs-2"} />
        ))}
      </div>
    </div>
  );
};

export default CategoryLayout;

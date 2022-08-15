import React from "react";
import { Card } from "react-bootstrap";
import bike1 from "../../assets/bike1.png";

import "./categoryLayout.css";

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
          <Card
            className="category__card mb-5 text-center"
            style={{ width: "18rem" }}
          >
            <Card.Img variant="top" src={item.img} />
            <Card.Body>
              <Card.Title className="fs-2">{item.name}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CategoryLayout;

import React from "react";
import { Card } from "react-bootstrap";
import bike1 from "../../assets/bike1.png";

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
        <Card className="mb-5" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={item.img} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

import React from "react";
import { Card } from "react-bootstrap";

const CustomCard = ({ item }) => {
  return (
    <Card
      className="category__card mb-5 text-center"
      style={{ width: "18rem" }}
    >
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title className="fs-2">{item.name}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;

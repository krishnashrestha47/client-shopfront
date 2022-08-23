import React from "react";
import { Card } from "react-bootstrap";
import "./customCard.css";

const CustomCard = ({ item, size }) => {
  return (
    <Card
      className="custom__card mb-5 text-center"
      style={{ width: "18rem", height: "22rem" }}
    >
      <Card.Img
        style={{ height: "10rem", padding: "10px" }}
        variant="top"
        src={item.img || item.src[0]}
      />
      <Card.Body>
        <Card.Title className={size}>{item.name}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;

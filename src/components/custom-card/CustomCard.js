import React from "react";
import { Card } from "react-bootstrap";
import "./customCard.css";

const CustomCard = ({ productImageStyle, productCardSize, item, size }) => {
  return (
    <Card
      className="custom__card mb-5 text-center"
      style={productCardSize || { width: "18rem" }}
    >
      <Card.Img
        style={productImageStyle}
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

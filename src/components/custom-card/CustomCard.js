import React from "react";
import { Card } from "react-bootstrap";
import "./customCard.css";

const CustomCard = ({ productImageStyle, productCardSize, item, size }) => {
  console.log(item.images);
  const url = "http://localhost:8001/";
  return (
    <Card
      className="custom__card mb-5 text-center"
      style={productCardSize || { width: "18rem" }}
    >
      <Card.Img
        style={productImageStyle}
        variant="top"
        crossorigin="anonymous"
        src={`${url + item?.images[0].substr(7)}`}
      />
      <Card.Body>
        <Card.Title className={size}>{item.name}</Card.Title>
        {/* <Card.Name>{item.ratings}</Card.Name> */}
      </Card.Body>
    </Card>
  );
};

export default CustomCard;

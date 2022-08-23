import React from "react";
import { Carousel } from "react-bootstrap";
import slider1 from "../../assets/slider1.png";
import slider2 from "../../assets/slider2.png";
import slider3 from "../../assets/slider3.png";
import "./carousels.css";

const Carousels = () => {
  return (
    <Carousel className="mt-2 container" variant="light">
      <Carousel.Item>
        <img
          className="d-block"
          src="https://cdn.mos.cms.futurecdn.net/5KM387fgzNZecZSMP5Gx8j-1200-80.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://images.giant-bicycles.com/b_white,c_crop,h_600,q_70,w_1920/y11muho9u62fvrlguezt/giant_mtb_banner_navi21.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="text-warning">second slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://outdoorgearlab-mvnab3pwrvp3t0.stackpathdns.com/photos/21/90/340514_1232_XL.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="text-dark">Third slide label</h3>
          <p className="text-primary">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousels;

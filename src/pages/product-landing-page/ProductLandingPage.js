import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { DefaultLayout } from "../layout/DefaultLayout";

import { useDispatch, useSelector } from "react-redux";

import "./productLandingPage.css";
import { setCartItems } from "../../components/cart/cartSlice";
import { useParams } from "react-router-dom";

export const ProductLandingPage = ({ bikes }) => {
  const dispatch = useDispatch();

  const [imageIndex, setImageIndex] = useState(0);

  // const { cart } = useSelector((state) => state.cart);

  const handleOnAddToCart = (bike) => {
    dispatch(setCartItems(bike));
  };

  const handleTab = (i) => {
    setImageIndex(i);
  };
  const { _id } = useParams();

  const bike = bikes.filter((item) => item._id === _id);

  return (
    <DefaultLayout className="prodView">
      <Container>
        {bike.map((item, i) => (
          <div key={i} className="item-display">
            <div className="images">
              <div className="large_images">
                <img src={item.src[imageIndex]} alt="bikes" />
              </div>
              <div className="thumbnail">
                {item.src.map((img, i) => (
                  <img src={img} alt="" key={i} onClick={() => handleTab(i)} />
                ))}
              </div>
            </div>
            <div className="details">
              <div className="row">
                <h2>{item.name}</h2>
                <span>${item.price}</span>
              </div>

              <p>{item.description}</p>

              <div className="quantity fs-4">
                Quantity: <input type="number" />
              </div>

              <button
                className="add-to-cart"
                onClick={() => handleOnAddToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </Container>
    </DefaultLayout>
  );
};

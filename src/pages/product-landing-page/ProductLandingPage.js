import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { DefaultLayout } from "../layout/DefaultLayout";

import { useDispatch, useSelector } from "react-redux";

import "./productLandingPage.css";
import { setCartItems } from "../../components/cart/cartSlice";

const products = [
  {
    _id: "1",
    title:
      "Norco Fluid FS 2 29'' Dual Suspension Mountain Bike Orange/Charcoal (2022) Euro Spec",
    src: [
      "https://www.99bikes.com.au/media/catalog/product/2/1/21norcofluidfs229orangecharcoalv2.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      "https://www.99bikes.com.au/media/catalog/product/2/1/21norcofluidfs229orangecharcoalv2_6.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      "https://www.99bikes.com.au/media/catalog/product/2/1/21norcofluidfs229orangecharcoalv2_4.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      "https://www.99bikes.com.au/media/catalog/product/2/1/21norcofluidfs229orangecharcoalv2_2.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      "https://www.99bikes.com.au/media/catalog/product/2/1/21norcofluidfs229orangecharcoalv2_7.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
    ],
    description:
      "The Norco Fluid FS 2 is a dynamic dual suspension mountain bike that is incredibly capable for a short travel MTB. This Dual-Suspension rig rolls with a durable alloy frame that is paired with a RockShox Deluxe Select Rear Shock and RockShox 35 Silver Fork with 130mm travel for an aggressively fun ride.",
    price: 3999,
  },
];

export const ProductLandingPage = () => {
  const dispatch = useDispatch();

  const [imageIndex, setImageIndex] = useState(0);

  // const { cart } = useSelector((state) => state.cart);

  const handleOnAddToCart = (product) => {
    dispatch(setCartItems(product));
  };

  const handleTab = (i) => {
    setImageIndex(i);
  };

  return (
    <DefaultLayout className="prodView">
      <Container>
        {products.map((item, i) => (
          <div className="item-display">
            <div className="images" key={item._id}>
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
                <h2>{item.title}</h2>
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

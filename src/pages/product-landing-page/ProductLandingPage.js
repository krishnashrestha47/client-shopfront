import React from "react";
import { Button, Container } from "react-bootstrap";
import { DefaultLayout } from "../layout/DefaultLayout";

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
  // const [imageIndex, setImageIndex] = useState(0);

  return (
    <DefaultLayout>
      <Container>
        {products.map((item, i) => (
          <div>
            <div className="images">
              <div className="large_images">
                <img src={item.src} alt="bikes" />
              </div>
              <div className="thumbnail">
                ""
                {item.src.map((img, i) => (
                  <img src={img} alt="" />
                ))}
              </div>
            </div>
            <div className="details">
              <div className="row">
                <h2>{item.title}</h2>
                <span>${item.price}</span>
              </div>

              <p>{item.description}</p>
              <Button className="cart">Add to Cart</Button>
            </div>
          </div>
        ))}
      </Container>
    </DefaultLayout>
  );
};

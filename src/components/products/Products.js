import React from "react";
import { Link } from "react-router-dom";
import bike1 from "../../assets/bike1.png";
import CustomCard from "../custom-card/CustomCard";

export const Products = ({ bikes }) => {
  // const bikes = [
  //   {
  //     _id: "1",
  //     name: "Norco Fluid FS 2 29'' Dual Suspension Mountain Bike Orange/Charcoal (2022) Euro Spec",
  //     src: [
  //       "https://www.99bikes.com.au/media/catalog/product/2/1/21norcofluidfs229orangecharcoalv2.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
  //       "https://www.99bikes.com.au/media/catalog/product/2/1/21norcofluidfs229orangecharcoalv2_6.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
  //       "https://www.99bikes.com.au/media/catalog/product/2/1/21norcofluidfs229orangecharcoalv2_4.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
  //       "https://www.99bikes.com.au/media/catalog/product/2/1/21norcofluidfs229orangecharcoalv2_2.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
  //       "https://www.99bikes.com.au/media/catalog/product/2/1/21norcofluidfs229orangecharcoalv2_7.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
  //     ],
  //     description:
  //       "The Norco Fluid FS 2 is a dynamic dual suspension mountain bike that is incredibly capable for a short travel MTB. This Dual-Suspension rig rolls with a durable alloy frame that is paired with a RockShox Deluxe Select Rear Shock and RockShox 35 Silver Fork with 130mm travel for an aggressively fun ride.",
  //     price: 3999,
  //   },
  //   {
  //     _id: "2",
  //     name: "Silverback Stride SE 27.5 Mountain Bike Orange/Black (2022)",
  //     src: [
  //       "https://www.99bikes.com.au/media/catalog/product/i/m/img_0030_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=700&canvas=700:560&dpr=2%202x",
  //       "https://www.99bikes.com.au/media/catalog/product/i/m/img_0198_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=700&canvas=700:560&dpr=2%202x",
  //       "https://www.99bikes.com.au/media/catalog/product/i/m/img_0733_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=700&canvas=700:560&dpr=2%202x",
  //       "https://www.99bikes.com.au/media/catalog/product/i/m/img_0691_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=700&canvas=700:560&dpr=2%202x",
  //       "https://www.99bikes.com.au/media/catalog/product/i/m/img_0666_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=700&canvas=700:560&dpr=2%202x",
  //     ],
  //     description:
  //       "The Silverback Stride SE 27.5 is a hardtail mountain bike for the entry level ride that wants to head off the footpath for capable tyres and some added suspension. The Stride SE has a hydro-formed alloy 6061 frame with Silverback's own POP Geometry that puts you in a balanced position for better traction and control.",
  //     price: 524,
  //   },
  // ];
  // {
  //   img: bike1,
  //   _id: 1,
  //   name: "Trek SLR6",
  //   description:
  //     "The Émonda SLR 6 eTap is an ultra-light, aerodynamic carbon road bike that's designed and built to be the fastest climbing bike we’ve ever made.",
  // },
  // {
  //   img: bike1,
  //   _id: 2,
  //   name: "Trek SLR6",
  //   description:
  //     "The Émonda SLR 6 eTap is an ultra-light, aerodynamic carbon road bike that's designed and built to be the fastest climbing bike we’ve ever made.",
  // },
  // {
  //   img: bike1,
  //   _id: 3,
  //   name: "Trek SLR6",
  //   description:
  //     "The Émonda SLR 6 eTap is an ultra-light, aerodynamic carbon road bike that's designed and built to be the fastest climbing bike we’ve ever made.",
  // },
  // {
  //   img: bike1,
  //   _id: 4,
  //   name: "Trek SLR6",
  //   description:
  //     "The Émonda SLR 6 eTap is an ultra-light, aerodynamic carbon road bike that's designed and built to be the fastest climbing bike we’ve ever made.",
  // },
  // {
  //   img: bike1,
  //   _id: 5,
  //   name: "Trek SLR6",
  //   description:
  //     "The Émonda SLR 6 eTap is an ultra-light, aerodynamic carbon road bike that's designed and built to be the fastest climbing bike we’ve ever made.",
  // },
  // {
  //   img: bike1,
  //   _id: 6,
  //   name: "Trek SLR6",
  //   description:
  //     "The Émonda SLR 6 eTap is an ultra-light, aerodynamic carbon road bike that's designed and built to be the fastest climbing bike we’ve ever made.",
  // },
  // {
  //   img: bike1,
  //   _id: 7,
  //   name: "Trek SLR6",
  //   description:
  //     "The Émonda SLR 6 eTap is an ultra-light, aerodynamic carbon road bike that's designed and built to be the fastest climbing bike we’ve ever made.",
  // },
  // {
  //   img: bike1,
  //   _id: 8,
  //   name: "Trek SLR6",
  //   description:
  //     "The Émonda SLR 6 eTap is an ultra-light, aerodynamic carbon road bike that's designed and built to be the fastest climbing bike we’ve ever made.",
  // },
  // {
  //   img: bike1,
  //   _id: 9,
  //   name: "Trek SLR6",
  //   description:
  //     "The Émonda SLR 6 eTap is an ultra-light, aerodynamic carbon road bike that's designed and built to be the fastest climbing bike we’ve ever made.",
  // },
  return (
    <>
      <h1 className="text-center">Products</h1>
      <div className="d-flex justify-content-between flex-wrap mt-5">
        {bikes.map((item, i) => (
          <Link
            key={i}
            className="nav-link"
            to={`/product-landing-page/${item._id}`}
          >
            <CustomCard
              productImageStyle={{ height: "10rem", padding: "10px" }}
              productCardSize={{ width: "18rem", height: "18rem" }}
              item={item}
              f-size={"fs-4"}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

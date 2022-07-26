import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import ProductPage from "./pages/products-page/ProductPage";
import { ProductLandingPage } from "./pages/product-landing-page/ProductLandingPage";
import Checkout from "./pages/checkout/Checkout";
import Categories from "./components/categories/Categories";
import ProductsBySubCatPage from "./pages/products-by-subcat-page/ProductsBySubCatPage";

const bikes = [
  {
    _id: "1",
    name: "Norco Fluid FS 2 29'' Dual Suspension Mountain Bike Orange/Charcoal (2022) Euro Spec",
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
  {
    _id: "2",
    name: "Silverback Stride SE 27.5 Mountain Bike Orange/Black (2022)",
    src: [
      "https://www.99bikes.com.au/media/catalog/product/i/m/img_0030_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=700&canvas=700:560&dpr=2%202x",
      "https://www.99bikes.com.au/media/catalog/product/i/m/img_0198_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=700&canvas=700:560&dpr=2%202x",
      "https://www.99bikes.com.au/media/catalog/product/i/m/img_0733_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=700&canvas=700:560&dpr=2%202x",
      "https://www.99bikes.com.au/media/catalog/product/i/m/img_0691_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=700&canvas=700:560&dpr=2%202x",
      "https://www.99bikes.com.au/media/catalog/product/i/m/img_0666_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=700&canvas=700:560&dpr=2%202x",
    ],
    description:
      "The Silverback Stride SE 27.5 is a hardtail mountain bike for the entry level ride that wants to head off the footpath for capable tyres and some added suspension. The Stride SE has a hydro-formed alloy 6061 frame with Silverback's own POP Geometry that puts you in a balanced position for better traction and control.",
    price: 524,
  },
  {
    _id: "3",
    name: "Cube Stereo 120 Rookie Dual Suspension Mountain Bike Actionteam (2022)",
    src: [
      "https://www.99bikes.com.au/media/catalog/product/2/2/22cubestereo150c-62race29flashwhitencarbon.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=700&canvas=700:560&dpr=2%202x",
      "https://www.99bikes.com.au/media/catalog/product/2/2/22cubestereo150c-62race29flashwhitencarbon___4.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=700&canvas=700:560&dpr=2%202x",
      "https://www.99bikes.com.au/media/catalog/product/2/2/22cubestereo150c-62race29flashwhitencarbon___5.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=700&canvas=700:560&dpr=2%202x",
      "https://www.99bikes.com.au/media/catalog/product/2/2/22cubestereo150c-62race29flashwhitencarbon___6.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=700&canvas=700:560&dpr=2%202x",
      "https://www.99bikes.com.au/media/catalog/product/2/2/22cubestereo150c-62race29flashwhitencarbon_0.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=700&canvas=700:560&dpr=2%202x",
    ],
    description:
      "The Cube Stereo 150 C:62 Race is a sweet blend of form and function, why give up one when you can have both? The Stereo 150 C:62 Race is a bike you can rely on, whether it's rough and ready trails or a casual Sunday ride, it'll take everything in its stride without so much as a blink.",
    price: 6099,
  },
  {
    _id: "4",
    name: "Merida Scultura Rim 100 Women's Road Bike Blue/White (2021)",
    src: [
      "https://www.99bikes.com.au/media/catalog/product/m/e/merida_scultura_rim_100_women_s_road_bike_blue_white_2021_.png?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=700&canvas=700:560&format=jpeg&dpr=2%202x",
      "https://www.99bikes.com.au/media/catalog/product/j/o/josephbyford-100673-2681.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=700&canvas=700:560&dpr=2%202x",
      "https://www.99bikes.com.au/media/catalog/product/j/o/josephbyford-100673-2675.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=700&canvas=700:560&dpr=2%202x",
      "https://www.99bikes.com.au/media/catalog/product/j/o/josephbyford-100673-2676.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=700&canvas=700:560&dpr=2%202x",
      "https://www.99bikes.com.au/media/catalog/product/j/o/josephbyford-100673-2677.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=700&canvas=700:560&dpr=2%202x",
    ],
    description:
      "The Merida Scultura Rim 100 Road Bike is an aluminium frame bike built for any challenge on the road with its versatility and highly-refined features. The aluminium frame is built to minimise weight and maximise power transfer, stiffness and durability. ",
    price: 1199,
  },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/products" element={<ProductPage />}></Route>
        {/* categories */}

        <Route path="categories/:slug" element={<Categories />}></Route>
        {/* <Route
          path="categories/:slug/:sub-category"
          element={<ProductsBySubCatPage />}
        ></Route> */}

        <Route path="/checkout" element={<Checkout bikes={bikes} />}></Route>
        <Route
          path="/product-landing-page/:_id"
          element={<ProductLandingPage bikes={bikes} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

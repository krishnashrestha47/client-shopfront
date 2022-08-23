import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import ProductPage from "./pages/products-page/ProductPage";
import { ProductLandingPage } from "./pages/product-landing-page/ProductLandingPage";
import Checkout from "./pages/checkout/Checkout";

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
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage bikes={bikes} />}></Route>
        <Route path="/products" element={<ProductPage bikes={bikes} />}></Route>
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

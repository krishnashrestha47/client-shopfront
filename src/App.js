import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import ProductPage from "./pages/products-page/ProductPage";
import { ProductLandingPage } from "./pages/product-landing-page/ProductLandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/products" element={<ProductPage />}></Route>
        <Route
          path="/product-landing-page"
          element={<ProductLandingPage />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

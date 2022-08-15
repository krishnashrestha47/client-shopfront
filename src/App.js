import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import ProductPage from "./pages/products-page/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/products" element={<ProductPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { Products } from "../../components/products/Products.js";
import { DefaultLayout } from "../layout/DefaultLayout.js";
import "./productPage.css";

const ProductPage = () => {
  return (
    <DefaultLayout>
      <div className="product-page gap-3">
        <section className="aside">
          <h1>Select</h1>
          <ul>
            <li>
              Mountain
              <ul className="hidden-sub-category">
                <li>Hardtail</li>
                <li>Full Suspension</li>
                <li>Downhill</li>
              </ul>
            </li>

            <li>Road</li>
            <li>City</li>
            <li>Electric</li>
            <li>Kids</li>
            <li>Accessories</li>
          </ul>
        </section>
        <section className="product-section">
          <h1>Products</h1>
          <Products />
        </section>
      </div>
    </DefaultLayout>
  );
};

export default ProductPage;

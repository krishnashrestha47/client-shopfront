import React from "react";
import { Cart } from "../../components/cart/Cart";
import { DefaultLayout } from "../layout/DefaultLayout";

const Checkout = () => {
  return (
    <DefaultLayout>
      <Cart />
    </DefaultLayout>
  );
};

export default Checkout;

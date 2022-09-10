import React from "react";
import { ProductsBySubCategory } from "../../components/products-by-subcat/ProductsBySubCategory";
import { DefaultLayout } from "../layout/DefaultLayout";

const ProductsBySubCatPage = () => {
  return (
    <DefaultLayout>
      <ProductsBySubCategory />;
    </DefaultLayout>
  );
};

export default ProductsBySubCatPage;

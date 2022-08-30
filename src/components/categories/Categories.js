import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Categories = () => {
  const { categories } = useSelector((state) => state.category);
  const { slug } = useParams();

  const parentCategories = categories.filter((item) => !item.parentCatId);
  const subCategories = categories.filter((item) => item.parentCatId);

  let { _id } = parentCategories.find((item) => item.slug === slug);

  return <div>Categories</div>;
};

export default Categories;

import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Categories = () => {
  const { categories } = useSelector((state) => state.category);

  const parentCategories = categories.filter((item) => !item.parentCatId);
  const subCategories = categories.filter((item) => item.parentCatId);
  return (
    <div>
      <Link to="/category-page/:category">
        <div>Hello</div>
      </Link>
    </div>
  );
};

export default Categories;

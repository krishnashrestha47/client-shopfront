import axios from "axios";

const rootUrl = "http://localhost:8000/api/v1";

const productsEP = rootUrl + "/products";
const categoriesEP = rootUrl + "/categories";

//products

export const fetchAllProducts = () => {
  try {
    const response = axios.get(productsEP);
    return response;
  } catch (error) {
    return error.message;
  }
};

export const fetchAllProductsByParentCatId = (ids) => {
  try {
    const response = axios.post(productsEP, ids);
    return response;
  } catch (error) {
    return error.message;
  }
};

// categories

export const fetchAllCategories = () => {
  try {
    const response = axios.get(categoriesEP);
    return response;
  } catch (error) {
    return error.message;
  }
};

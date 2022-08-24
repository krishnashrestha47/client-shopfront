import axios from "axios";

const rootUrl = "http://localhost:8000/api/v1";

const productsEP = rootUrl + "/products";

export const fetchAllProducts = () => {
  try {
    const response = axios.get(productsEP);
    return response;
  } catch (error) {
    return error.message;
  }
};

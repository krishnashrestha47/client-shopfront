import { fetchAllProducts } from "../../helpers/axiosHelpers";
import { setProducts } from "./productSlice";

export const fetchProductsAction = () => async (dispatch) => {
  const { data } = await fetchAllProducts();
  dispatch(setProducts(data));
};

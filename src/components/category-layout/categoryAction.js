import { fetchAllCategories } from "../../helpers/axiosHelpers";
import { setCategories } from "./categorySlice";

export const fetchCategoriesAction = () => async (dispatch) => {
  const { data } = await fetchAllCategories();
  dispatch(setCategories(data));
};

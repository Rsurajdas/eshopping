import { productActions } from "../reducers/productsReducer";

export const initializeProductsAction = () => async (dispatch) => {
  const fetchData = async () => {
    const res = await fetch(`https://fakestoreapi.com/products`);
    if (!res.ok) {
      throw new Error("Error while fetching Data");
    }
    const data = await res.json();
    return data;
  };

  try {
    const ProductsData = await fetchData();
    dispatch(productActions.initializeProducts(ProductsData));
  } catch (error) {
    console.log(error);
  }
};

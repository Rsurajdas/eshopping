import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: { products: [] },
  reducers: {
    initializeProducts(state, action) {
      state.products = action.payload.map((item) => {
        return {
          ...item,
          isFav: false,
        };
      });
    },
    addToFavorite(state, action) {
      const id = action.payload;
      let revisedProducts = state.products.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isFav: true,
          };
        }
        return item;
      });
      state.products = revisedProducts;
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice;

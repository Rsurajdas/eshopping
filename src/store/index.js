import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducers/productsReducer";
import cartSlice from "./reducers/cartReducer";

const store = configureStore({
  reducer: { products: productSlice.reducer, carts: cartSlice.reducer },
});

export default store;

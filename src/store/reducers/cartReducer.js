import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalProductCount: 0,
  totalCartValue: 0,
  items: [],
};

function calculateTotalProduct(arr) {
  return arr.reduce((prev, curr) => prev + curr.quantity, 0);
}

function calculateTotalCost(arr) {
  return arr.reduce((prev, curr) => prev + curr.quantity * curr.price, 0);
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const exitingItem = state.items.find((item) => item.id === product.id);
      if (exitingItem) {
        state.totalProductCount = state.totalProductCount + 1;
        state.totalCartValue = state.totalCartValue + exitingItem.price;
        state.items = state.items.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
      } else {
        state.totalProductCount = state.totalProductCount + 1;
        state.totalCartValue = state.totalCartValue + product.price;
        state.items = [...state.items, { ...product, quantity: 1 }];
      }
    },
    increment(state, action) {
      const id = action.payload;
      let revisedQuantity = state.items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      state.items = revisedQuantity;
      state.totalProductCount = calculateTotalProduct(revisedQuantity);
      state.totalCartValue = calculateTotalCost(revisedQuantity);
    },
    decrement(state, action) {
      const id = action.payload;
      let revisedQuantity = state.items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      });
      state.items = revisedQuantity;
      state.totalProductCount = calculateTotalProduct(revisedQuantity);
      state.totalCartValue = calculateTotalCost(revisedQuantity);
    },
    setQuantity(state, action) {
      const id = action.payload.id;
      let revisedQuantity = state.items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: action.payload.qty,
          };
        }
        return item;
      });
      state.items = revisedQuantity;
      state.totalProductCount = calculateTotalProduct(revisedQuantity);
      state.totalCartValue = calculateTotalCost(revisedQuantity);
    },
    removeFromCart(state, action) {
      const id = action.payload;
      let exitingItem = state.items.find((item) => item.id === id);
      if (exitingItem) {
        state.totalProductCount =
          state.totalProductCount - exitingItem.quantity;
        state.totalCartValue =
          state.totalCartValue - exitingItem.quantity * exitingItem.price;
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;

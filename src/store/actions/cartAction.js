export const addToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    product,
  };
};

export const increaseQuantity = (id) => {
  return {
    type: "INCREMENT",
    id,
  };
};

export const decreaseQuantity = (id) => {
  return {
    type: "DECREMENT",
    id,
  };
};

export const setQuantity = (quantity, id) => {
  return {
    type: "SET_QUANTITY",
    quantity,
    id,
  };
};

export const removeFromCart = (id) => {
  return {
    type: "REMOVE_FROM_CART",
    id,
  };
};

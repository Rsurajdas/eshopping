export const productsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case "INITIALIZE_PRODUCTS": {
      return {
        products: action.products,
      };
    }
    case "ADD_TO_FAVORITE": {
      let revisedProducts = state.products.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            isFav: true,
          };
        }
        return item;
      });
      return {
        products: revisedProducts,
      };
    }
    default:
      return state;
  }
};

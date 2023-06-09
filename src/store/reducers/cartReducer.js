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

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      return state.items.find((item) => item.id === action.product.id)
        ? {
            totalProductCount: state.totalProductCount + 1,
            totalCartValue: state.totalCartValue + action.product.price,
            items: state.items.map((item) => {
              if (item.id === action.product.id) {
                return {
                  ...item,
                  quantity: item.quantity + 1,
                };
              }
              return item;
            }),
          }
        : {
            totalProductCount: state.totalProductCount + 1,
            totalCartValue: state.totalCartValue + action.product.price,
            items: [...state.items, { ...action.product, quantity: 1 }],
          };
    }
    case "INCREMENT": {
      let revisedQuantity = state.items.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      return {
        totalProductCount: calculateTotalProduct(revisedQuantity),
        totalCartValue: calculateTotalCost(revisedQuantity),
        items: revisedQuantity,
      };
    }
    case "DECREMENT": {
      let revisedQuantity = state.items.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      });
      return {
        totalProductCount: calculateTotalProduct(revisedQuantity),
        totalCartValue: calculateTotalCost(revisedQuantity),
        items: revisedQuantity,
      };
    }
    case "SET_QUANTITY": {
      let revisedQuantity = state.items.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            quantity: action.quantity,
          };
        }
        return item;
      });
      return {
        totalProductCount: calculateTotalProduct(revisedQuantity),
        totalCartValue: calculateTotalCost(revisedQuantity),
        items: revisedQuantity,
      };
    }
    case "REMOVE_FROM_CART": {
      let findItem = state.items.find((item) => item.id === action.id);
      if (findItem) {
        let totalValueOfItem = findItem.quantity * findItem.price;
        return {
          totalProductCount: state.totalProductCount - findItem.quantity,
          totalCartValue: state.totalCartValue - totalValueOfItem,
          items: state.items.filter((item) => item.id !== action.id),
        };
      } else {
        return state;
      }
    }
    default:
      return state;
  }
};

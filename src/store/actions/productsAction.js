export const initializeProducts = () => (dispatch) => {
  fetch(`https://fakestoreapi.com/products`)
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: "INITIALIZE_PRODUCTS",
        products: data.map((item) => {
          return {
            ...item,
            isFav: false,
          };
        }),
      })
    )
    .catch((err) => console.log(err));
};

export const addToFavorite = (id) => {
  return {
    type: "ADD_TO_FAVORITE",
    id,
  };
};

import "./Favorite.css";

const Favorite = ({ onAddFavorite, isFav }) => {
  return (
    <div
      className={`favorite ${isFav ? "active" : null}`}
      onClick={onAddFavorite}
    >
      <span className={`${isFav ? "fa-solid" : "fa-regular"} fa-heart`}></span>
    </div>
  );
};

export default Favorite;

import { useDispatch } from "react-redux";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { productActions } from "../../store/reducers/productsReducer";
import Favorite from "./Favorite";

const Product = ({ id, image, title, category, price, onAdd, isFav }) => {
  const dispatch = useDispatch();

  return (
    <Col sm={6} lg={4} className="mb-4">
      <div className="block-4 border rounded">
        <figure className="block-4-image text-center p-2">
          <Link to={`/shop/${id}`}>
            <img src={image} alt={title} className="img-fluid" />
          </Link>
        </figure>
        <div className="block-4-text p-2">
          <h3>
            <Link to="/" className="ellipsis">
              {title}
            </Link>
          </h3>
          <p className="mb-1 text-center mt-1">{category}</p>
          <div className="d-flex justify-content-between mb-1">
            <p className="text-primary font-weight-bold mb-0">{`$${price}`}</p>
            <button
              className="text-primary font-weight-bold plain-btn"
              onClick={onAdd}
            >
              Add to Cart
            </button>
          </div>
        </div>
        <Favorite
          onAddFavorite={() => dispatch(productActions.addToFavorite(id))}
          isFav={isFav}
        />
      </div>
    </Col>
  );
};

export default Product;

import { memo } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "./Product";
import { cartActions } from "../../store/reducers/cartReducer";

const Products = memo(() => {
  const { products } = useSelector((state) => state.products, shallowEqual);
  const dispatch = useDispatch();
  return (
    <Col md={9} className="order-2">
      <Row className="mb-5">
        {products.map((product) => (
          <Product
            key={product.id}
            {...product}
            onAdd={() => dispatch(cartActions.addToCart(product))}
          />
        ))}
      </Row>
    </Col>
  );
});

export default Products;

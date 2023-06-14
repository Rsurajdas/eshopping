import { memo } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import CartRow from "./CartRow";
import { cartActions } from "../../store/reducers/cartReducer";
import "./cart.css";
import "../Button.css";
import PriceBreak from "./PriceBreak";

const CartSection = memo(() => {
  const { items, totalCartValue } = useSelector(
    (state) => state.carts,
    shallowEqual
  );
  const dispatch = useDispatch();
  return (
    <div className="site-section">
      {items.length > 0 ? (
        <Container>
          <Row className="mb-3">
            <Col md={12}>
              <div className="site-blocks-table">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className="product-thumbnail">Image</th>
                      <th className="product-name">Product</th>
                      <th className="product-price">Price</th>
                      <th className="product-quantity">Quantity</th>
                      <th className="product-total">Total</th>
                      <th className="product-remove">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <CartRow
                        key={item.id}
                        {...item}
                        onIncrement={() =>
                          dispatch(cartActions.increment(item.id))
                        }
                        onDecrement={() =>
                          dispatch(cartActions.decrement(item.id))
                        }
                        onQuantityChange={(id, qty) =>
                          dispatch(cartActions.setQuantity({ id, qty }))
                        }
                        onRemove={() =>
                          dispatch(cartActions.removeFromCart(item.id))
                        }
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </Col>
          </Row>
          <PriceBreak totalCartValue={totalCartValue} />
        </Container>
      ) : (
        <Container>
          <h2 style={{ color: "#2a2a2a" }}>Your Amazon Cart is empty.</h2>
        </Container>
      )}
    </div>
  );
});

export default CartSection;

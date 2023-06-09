import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initializeProducts } from "../../store/actions/productsAction";
import { Container, Row } from "react-bootstrap";
import Aside from "./Aside";
import Products from "./Products";
import "./shop.css";

const ShopSection = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeProducts());
  }, [dispatch]);
  return (
    <div className="site-section">
      <Container>
        <Row className="mb-5">
          <Products />
          <Aside />
        </Row>
      </Container>
    </div>
  );
};

export default ShopSection;

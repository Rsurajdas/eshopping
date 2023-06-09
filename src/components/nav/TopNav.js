import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./TopNav.css";

const TopNav = () => {
  const { totalProductCount } = useSelector((state) => state.carts);
  return (
    <div className="site-navbar-top">
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="order-2 order-md-1 site-search-icon text-left">
            <form className="site-block-top-search">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                type="text"
                className="form-control border-0"
                placeholder="Search"
              />
            </form>
          </Col>
          <Col md={4} className="mb-3 mb-md-0 order-1 order-md-2 text-center">
            <div className="site-logo">
              <Link to="/">Shoppers</Link>
            </div>
          </Col>
          <Col md={4} className="order-3 order-md-3 text-right">
            <div className="site-top-icons">
              <ul>
                <li>
                  <Link to="/">
                    <i className="fa-solid fa-user"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/favorite">
                    <i className="fa-regular fa-heart"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/cart" className="site-cart">
                    <i className="fa-solid fa-cart-shopping"></i>
                    <span className="count">{totalProductCount}</span>
                  </Link>
                </li>
                <li className="d-inline-block d-md-none ml-md-0">
                  <Link to="/" className="site-menu-toggle">
                    <i className="fa-solid fa-bars"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopNav;

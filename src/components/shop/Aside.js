import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <Col md={3} className="order-1 mb-5 mb-md-0">
      <div className="border p-4 rounded mb-4">
        <h3 className="mb-3 h6 text-uppercase text-black d-block">
          Categories
        </h3>
        <ul className="list-unstyled mb-0">
          <li className="mb-1">
            <Link to="/" className="d-flex">
              <span>Men</span>{" "}
              <span className="text-black ml-auto">(2,220)</span>
            </Link>
          </li>
          <li className="mb-1">
            <Link to="/" className="d-flex">
              <span>Women</span>{" "}
              <span className="text-black ml-auto">(2,550)</span>
            </Link>
          </li>
          <li className="mb-1">
            <Link to="/" className="d-flex">
              <span>Children</span>{" "}
              <span className="text-black ml-auto">(2,124)</span>
            </Link>
          </li>
        </ul>
      </div>
    </Col>
  );
};

export default Aside;

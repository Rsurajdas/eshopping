import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import heroImg from "../../img/hero_1.jpg";
import "../Button.css";

const Banner = () => {
  return (
    <div
      className="site-blocks-cover"
      style={{ backgroundImage: `url(${heroImg}) ` }}
    >
      <Container>
        <Row className="align-items-start align-items-md-center justify-content-end">
          <Col md={5} className="text-md-left pt-5 pt-md-0">
            <h1 className="mb-2">Finding Your Perfect Shoes</h1>
            <div className="intro-text text-md-left">
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.{" "}
              </p>
              <p>
                <Link to="/" className="btn btn-sm btn-primary">
                  Shop Now
                </Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;

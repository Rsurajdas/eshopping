import { Container, Row, Col } from "react-bootstrap";
import "./Feature.css";
import Feature from "./Feature";

const Features = () => {
  return (
    <div className="site-section site-section-sm site-blocks-1">
      <Container>
        <Row>
          <Col md={6} lg={4} className="d-lg-flex mb-4 mb-lg-0 pl-4">
            <Feature
              iconClass="fa-truck"
              title="Free Shipping"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus at iaculis quam. Integer accumsan tincidunt fringilla."
            />
          </Col>
          <Col md={6} lg={4} className="d-lg-flex mb-4 mb-lg-0 pl-4">
            <Feature
              iconClass="fa-rotate-left"
              title="Free Returns"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus at iaculis quam. Integer accumsan tincidunt fringilla."
            />
          </Col>
          <Col md={6} lg={4} className="d-lg-flex mb-4 mb-lg-0 pl-4">
            <Feature
              iconClass="fa-circle-question"
              title="Customer Support"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus at iaculis quam. Integer accumsan tincidunt fringilla."
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Features;

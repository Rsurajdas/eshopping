import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Breadcrumb = ({ slug }) => {
  return (
    <div className="bg-light py-3">
      <Container>
        <Row>
          <Col md={12} className="mb-0">
            <Link to="/">Home</Link> <span className="mx-2 mb-0">/</span>{" "}
            <strong className="text-black">{slug}</strong>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Breadcrumb;

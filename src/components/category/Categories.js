import { Container, Row, Col } from "react-bootstrap";
import "./Categories.css";
import Category from "./Category";

const Categories = () => {
  return (
    <div className="site-section site-blocks-2">
      <Container>
        <Row>
          <Col sm={6} md={6} lg={4} className="mb-4 mb-lg-0">
            <Category img="../img/women.jpg" title="Women" />
          </Col>
          <Col sm={6} md={6} lg={4} className="mb-4 mb-lg-0">
            <Category img="../img/children.jpg" title="Children" />
          </Col>
          <Col sm={6} md={6} lg={4} className="mb-4 mb-lg-0">
            <Category img="../img/men.jpg" title="Men" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Categories;

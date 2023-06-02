import { Container, Row, Col } from "react-bootstrap";
import "./Categories.css";
import womenImg from "../../img/women.jpg";
import menImg from "../../img/men.jpg";
import kidImg from "../../img/children.jpg";
import Category from "./Category";

const Categories = () => {
  return (
    <div className="site-section site-blocks-2">
      <Container>
        <Row>
          <Col sm={6} md={6} lg={4} className="mb-4 mb-lg-0">
            <Category img={womenImg} title="Women" />
          </Col>
          <Col sm={6} md={6} lg={4} className="mb-4 mb-lg-0">
            <Category img={kidImg} title="Children" />
          </Col>
          <Col sm={6} md={6} lg={4} className="mb-4 mb-lg-0">
            <Category img={menImg} title="Men" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Categories;

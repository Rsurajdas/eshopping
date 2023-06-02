import { Container, Row, Col } from "react-bootstrap";
import blogImg from "../../img/blog_1.jpg";

const TextBlock = () => {
  return (
    <div className="site-section border-bottom">
      <Container>
        <Row className="mb-5">
          <Col md={6}>
            <div className="block-16">
              <figure>
                <img
                  src={blogImg}
                  alt="placeholder"
                  className="img-fluid rounded"
                />
              </figure>
            </div>
          </Col>
          <Col md={1}></Col>
          <Col md={5}>
            <div className="site-section-heading pt-3 mb-4">
              <h2 className="text-black">How We Started</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
              repellat, dicta at laboriosam, nemo exercitationem itaque eveniet
              architecto cumque, deleniti commodi molestias repellendus quos
              sequi hic fugiat asperiores illum. Atque, in, fuga excepturi
              corrupti error corporis aliquam unde nostrum quas.
            </p>
            <p>
              Accusantium dolor ratione maiores est deleniti nihil? Dignissimos
              est, sunt nulla illum autem in, quibusdam cumque recusandae,
              laudantium minima repellendus.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TextBlock;

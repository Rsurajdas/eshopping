import { Row, Col } from "react-bootstrap";

const PriceBreak = ({ totalCartValue }) => {
  return (
    <Row>
      <Col md={6}></Col>
      <Col md={6} className="pl-5">
        <Row className="justify-content-end">
          <Col md={7}>
            <Row>
              <Col md={12} className="text-right border-bottom mb-4">
                <h3
                  className="text-black h4 text-uppercase"
                  style={{ textAlign: "left" }}
                >
                  Cart Totals
                </h3>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <span className="text-black">Subtotal</span>
              </Col>
              <Col md={6} className=" text-right">
                <strong className="text-black">{`$${totalCartValue}`}</strong>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col md={6}>
                <span className="text-black">Total</span>
              </Col>
              <Col md={6} className="text-right">
                <strong className="text-black">{`$${totalCartValue}`}</strong>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <button className="btn btn-primary btn-lg py-3 btn-block">
                  Proceed To Checkout
                </button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default PriceBreak;

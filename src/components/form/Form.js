import { Col, Row, Button } from "react-bootstrap";
import "../Button.css";
import "./Form.css";
import FormInputs from "./FormInputs";

const Form = () => {
  return (
    <form>
      <div className="p-3 p-lg-5 border">
        <Row className="form-group">
          <Col md={6}>
            <FormInputs
              label="First Name"
              type="text"
              formName="first_name"
              require
            />
          </Col>
          <Col md={6}>
            <FormInputs
              label="Last Name"
              type="text"
              formName="last_name"
              require
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Col md={12}>
            <FormInputs label="Email" type="email" formName="email" require />
          </Col>
        </Row>
        <Row className="form-group">
          <Col md={12}>
            <FormInputs label="Subject" type="text" formName="Subject" />
          </Col>
        </Row>
        <Row className="form-group">
          <Col md={12}>
            <FormInputs label="Message" formName="message" />
          </Col>
        </Row>
        <Row className="form-group">
          <Col md={12}>
            <Button
              type="submit"
              variant="primary"
              className="btn-lg btn-block"
            >
              Send Message
            </Button>
          </Col>
        </Row>
      </div>
    </form>
  );
};

export default Form;

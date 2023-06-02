import { useResolvedPath } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import capitalize from "lodash.capitalize";
import Form from "../components/form/Form";
import Address from "../components/form/Address";

const Contact = () => {
  const addresses = [
    {
      id: 1,
      location: "New York",
      addressDetail:
        "203 Fake St. Mountain View, San Francisco, California, USA",
    },
    {
      id: 2,
      location: "London",
      addressDetail:
        "203 Fake St. Mountain View, San Francisco, California, USA",
    },
    {
      id: 3,
      location: "Canada",
      addressDetail:
        "203 Fake St. Mountain View, San Francisco, California, USA",
    },
  ];
  const { pathname } = useResolvedPath();
  return (
    <>
      <Breadcrumb slug={capitalize(pathname.slice(1))} />
      <div className="site-section">
        <Container>
          <Row>
            <Col md={12}>
              <h2 className="h3 mb-3 text-black">Get In Touch</h2>
            </Col>
            <Col md={7}>
              <Form />
            </Col>
            <Col md={5} className="ml-auto">
              {addresses &&
                addresses.map((address) => (
                  <Address key={address.id} {...address} />
                ))}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Contact;

import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Loader from "../loader/Loader";
import "../cart/cart.css";
import "../Button.css";
import "../form/Form.css";

const ProductDetail = ({ id }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async (productId) => {
    const data = await fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => data)
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setData({ ...data, quantity: 1 });
  };
  useEffect(() => {
    if (id) {
      fetchData(id);
    }
  }, [id]);

  return (
    <>
      {!isLoading ? (
        <div className="site-section">
          <Container>
            <Row>
              <Col md={6} className="text-center">
                <img
                  src={data.image}
                  alt={data.title}
                  className="img-fluid"
                  style={{ height: "500px", objectFit: "contain" }}
                />
              </Col>
              <Col md={6}>
                <h2 className="text-black">{data.title}</h2>
                <p>{data.description}</p>
                <p>
                  <strong className="text-primary h4">{`$${data.price}`}</strong>
                </p>
                <div className="mb-5">
                  <div
                    className="input-group mb-3"
                    style={{ maxWidth: "140px" }}
                  >
                    <div className="input-group-prepend">
                      <button
                        className="btn btn-outline-primary js-btn-minus"
                        type="button"
                      >
                        &minus;
                      </button>
                    </div>
                    <input
                      type="text"
                      className="form-control text-center"
                      value={data.quantity}
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-outline-primary js-btn-plus"
                        type="button"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <p>
                  <button className="buy-now btn btn-sm btn-primary">
                    Add To Cart
                  </button>
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default ProductDetail;

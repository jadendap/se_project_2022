import { Link, useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import React, { useState, useEffect } from "react";

export default function PlaceOrder() {
const [cart, setCart] = useState([]);
const getCart = async () => {
        const keyword = sessionStorage.sessionId;
        if (!keyword) {
            alert("Please sign in to view cart");
            window.location.href = "http://localhost:3000/Login";
            return;
        }

        const url = "http://localhost:9000/cart/id/" + keyword;

        const response = await fetch(url, {
            method: "GET",
        });
        const responseJson = await response.json();

        if (!responseJson[0].amount) {
            for (var q = 0; q < responseJson.length; q++) {
                responseJson[q].amount = 1;
            }
        }
        for (var q = 0; q < responseJson.length; q++) {
            responseJson[q].amount = parseInt(responseJson[q].amount);
        }
        setCart(responseJson);
        return responseJson;
    };
    useEffect(() => {
            getCart();
        }, []);
  return (
    <div>
      <h1 className="my-3">Preview Order</h1>
      <Row>
        <Col md={8}>
          <div className="mb-3">
            <div>
              <h1>Shipping</h1>
              <div>
                <strong>Name:</strong> Temp Name <br />
                <strong>Address: </strong> Temp Address,
                City, Zip Code,
                Country
              </div>
              <Link to="/Shipping">Edit</Link>
            </div>
          </div>

          <div className="mb-3">
            <div>
              <h1>Payment</h1>
              <div>
                <strong>CC:</strong> temp
              </div>
              <Link to="/shipping">Edit</Link>
            </div>
          </div>

          <div className="mb-3">
            <div>
              <h1>Items</h1>
              <ListGroup >
                {cart.map((item) => (
                  <ListGroup.Item key={item.id}>
                    <Row className="align-items-center">
                      <Col md={6}>
                        <img
                          src={item.image_url}
                          alt={item.name}
                          className="img-fluid rounded img-thumbnail"
                        ></img>{' '}
                        <Link to={`/product/id/${item.product_id}`}>{item.name}</Link>
                      </Col>
                      <Col md={3}>
                        <span>Quantity: {item.amount}</span>
                      </Col>
                      <Col md={3}>${item.price}</Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <Link to="/cart">Edit</Link>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div>
            <div>
              <h1>Order Summary</h1>
              <ListGroup>
                <ListGroup.Item>
                  <Row>
                    <Col>Items</Col>
                    <Col>$</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Shipping</Col>
                    <Col>$</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Tax</Col>
                    <Col>$</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <strong> Order Total</strong>
                    </Col>
                    <Col>
                      <strong>$</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="d-grid">
                    <button
                      type="button"

                      disabled={cart.length === 0}
                    >
                      Place Order
                    </button>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
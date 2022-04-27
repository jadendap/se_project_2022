import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import React, { useState, useEffect } from "react";
import '../Components/ComponentCSS/cart.css'

export default function PlaceOrder() {
const [cart, setCart] = useState([]);
const [customer, setCustomerInfo] = useState('');
const [total, setTotal] = useState(0);
var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

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
        for (q = 0; q < responseJson.length; q++) {
            responseJson[q].amount = parseInt(responseJson[q].amount);
        }
        setCart(responseJson);
        return responseJson;
    };
    const getCustomerInfo = async () => {
                try{
                const keyword = sessionStorage.sessionId;
                if (!keyword) {
                    alert("Please sign in to view cart");
                    window.location.href = "http://localhost:3000/Login";
                    return;
                }
                console.log(keyword);
                const url = "http://localhost:9000/customer/ShoppingSession/" + keyword;

                const response = await fetch(url, {
                    method: "GET",
                });
                const responseJson = await response.json();
                setCustomerInfo(responseJson);
                return responseJson;
                }catch (error) {
                  console.log("error", error);
                 }
                 };
    const handlePrice = () => {
           let ans = 0;
           cart.map((item) => (ans += parseInt(item.amount) * item.price));
           setTotal(ans);
           };

      const handlePlace = (id, total, date) => {
          const order = {
            customer_id: id,
            total: total,
            date: date,
          };
          console.log(`order added ${order.id} ${order.total}`);
          const addResponse = fetch("http://localhost:9000/AddOrder", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(order),
          });

        }

   useEffect(() => {
       handlePrice();
       });
    useEffect(() => {
        getCustomerInfo();
        });
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
                <strong>Name: </strong> {customer.first_name} {customer.last_name} <br />
                <strong>Address: </strong> {customer.address} ,
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
                        <img className="checkout_img"
                          src={item.image_url}
                          alt={item.name}

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
                      <strong> Order Total:</strong>
                    </Col>
                    <Col>
                      <strong>${total}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="d-grid">
                    <button
                      type="button"
                       onClick={() => handlePlace(customer.customer_id,total, date)}
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
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../Styles/cart.css";
import {Row, Col, ListGroup, Card, ListGroupItem} from "react-bootstrap";
import {Link} from "react-router-dom";

const Cart = () => {
    const [price, setPrice] = useState(0);
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

    const handleRemove = (id) => {
        console.log(id);
        const data = {
            sessionId: sessionStorage.sessionId,
            productId: id,
        };

        const deleteResponse = fetch("http://localhost:9000/removeFromCart", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        // cart = cart.filter(function (obj) {
        //   return obj.product_id !== id;
        // });
        // console.log(cart);
        // const arr = cart.filter((item) => item.product_id !== id);
        setCart(cart);
        handlePrice();
    };

    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => (ans += parseInt(item.amount) * item.price));
        setPrice(ans);
    };

    const handleChange = (item, d) => {
        const ind = cart.indexOf(item);
        const userSession = sessionStorage.sessionId;
        console.log(item.product_id);
        //added this so it updates the cart_item into the table
        const cart_item = {
            sessionId: userSession,
            productId: item.product_id,
        };
        const addResponse = fetch("http://localhost:9000/customerproduct", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(cart_item),
        });

        const arr = cart;
        console.log(arr);

        arr[ind].amount += d;
        console.log(typeof parseInt(arr[ind].amount));
        console.log(typeof d);

        if (arr[ind].amount === 0) arr[ind].amount = 1;
        setCart([...arr]);
    };
    useEffect(() => {
        handlePrice();
    });
    useEffect(() => {
        getCart();
    }, []);

    return (
        <div id="cartItems">

            <h1>Cart</h1>
            <Row>
                <Col md={8}>
                    {cart.length === 0 ? (
                            <div>
                                <Link to="/">Cart is empty</Link>
                            </div>
                        ):
                        (
                            <ListGroup>
                                {cart.map((item) => (
                                    <ListGroup.Item>
                                        <Row className="align-items-center">
                                            <Col md={4}>
                                                <Link to={`/product/id/${item.product_id}`}>
                                                    <img
                                                        src={item.image_url}
                                                        alt={item.name}
                                                        className="img-fluid rounded img-thumbnail"
                                                    ></img> </Link> {' '}
                                                {item.name}
                                            </Col>
                                            <Col md={3}>
                                                <button class="button-3" role="button" nClick={() => handleChange(item, -1)}>
                                                    -
                                                </button>{' '}
                                                <span id="quantity">{item.amount}</span>{' '}
                                                <button class="button-3" role="button" onClick={() => handleChange(item, 1)}>
                                                    +
                                                </button>
                                            </Col>
                                            <Col md={3}>${item.price}</Col>
                                            <Col md={2}>
                                                <button class="button-3" role="button" onClick={() => handleRemove(item.product_id)}>
                                                    delete
                                                </button>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        )}
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <ListGroup variant="flush">
                                <ListGroupItem>
                                    <h3>
                                        SubTotal: $
                                        {price}
                                    </h3>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <div className="d-grid">
                                        <button
                                            class="button-3"
                                            role="button"
                                            disabled={cart.length === 0}>
                                            Checkout
                                        </button>
                                    </div>
                                </ListGroupItem>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Cart;


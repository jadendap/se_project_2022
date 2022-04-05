import {useContext} from "react";
import {Store} from "../Store";
import {Row, Col, ListGroup, Button, Card, ListGroupItem} from "react-bootstrap";
import MessageBox from "../components/MessageBox";
import {Link} from "react-router-dom";
import axios from "axios";


export default function CartScreen() {
    const { state, dispatch: ctxDispatch} = useContext(Store);
    const { cart: {cartItems}, } = state;

    const updateCartHandler = async(item, quantity) => {
        const{ data } = await axios.get(`/api/product/id/${item.id}`);
        ctxDispatch({
            type:'CART_ADD_ITEM',
            payload:{...item,quantity },
        });
    }

    return (
        <div>
            <Row>
                <Col md={8}>
                {cartItems.length === 0 ? (
                    <MessageBox>
                        Cart is empty <Link to="/">Go Shopping</Link>
                    </MessageBox>
                ):
                    (
                        <ListGroup>
                            {cartItems.map((item) => (
                                <ListGroup.Item key={item.id}>
                                    <Row className="align-items-center">
                                    <Col md={4}>
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="img-fluid rounded img-thumbnail"
                                        ></img>{' '}
                                        <Link to={`/product/id/${item.id}`}>{item.name}</Link>
                                    </Col>
                                    <Col md={3}>
                                        <Button variant="light"
                                                onClick={() => updateCartHandler(item, item.quantity--)}
                                                disabled={item.quantity === 1}>
                                            -
                                        </Button>{' '}
                                        <span>{item.quantity}</span>{' '}
                                        <Button variant="light" onClick={() => updateCartHandler(item, item.quantity++)} disabled={item.quantity === item.countInStock}>
                                            +
                                        </Button>
                                    </Col>
                                    <Col md={3}>${item.price}</Col>
                                    <Col md={2}>
                                        <Button variant="light">
                                            delete
                                        </Button>
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
                                        SubTotal({cartItems.reduce((a, c) => a + c.quantity, 0)}{' '}
                                        items) : $
                                        {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
                                    </h3>
                                </ListGroupItem>
                                <ListGroupItem>
                                        <div className="d-grid">
                                            <Button
                                                type="button"
                                                variant="primary"
                                                disabled={cartItems.length === 0}>
                                                Checkout
                                            </Button>
                                        </div>
                                </ListGroupItem>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}
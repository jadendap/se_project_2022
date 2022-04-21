import { useEffect, useReducer} from "react";
import {Row, Col, ListGroup, Card, ListGroupItem} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

const reducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_REQUEST':
            return {...state, loading:true};
        case 'FETCH_SUCCESS':
            return {...state, cartItems: action.payload, loading: false};
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload};
        default:
            return state;
    }
};

function CartScreen() {

    const params = useParams();
    const {id} = params;
    const [{cartItems}, dispatch] = useReducer(reducer, {
        cartItems: [],
    });

    useEffect( () =>{
        const fetchData = async () => {
            dispatch({type:'FETCH_REQUEST'});
            try {
                const result = await axios.get(`/cart/id/${id}`);
                dispatch({type:'FETCH_SUCCESS',payload:result.data});
            } catch(err) {
                dispatch({type: 'FETCH_FAIL',payload: err.message});
            }
        };
        fetchData();
    }, [id]);
    const addToCart = async (item) => {
        await axios.post('/addCartItem',{
            session_id: 86,
            product_id: item.product_id,
        }).then(function (res) {
                console.log(res);
            }).catch(function (err) {
            console.log(err);
        })};
    const deleteFromCart = async (item) => {
        await axios.delete('/deleteCartItem', {data: {
                session_id: 86,
                product_id: item.product_id,
            }
        }).then(function (res) {
            console.log(res);
        }).catch(function (err) {
            console.log(err);
        })};

    const reload = async () => {
        const result = await axios.get(`/cart/id/${id}`);
        dispatch({type:'FETCH_SUCCESS',payload:result.data})
     }

    return (
        <div id="cartItems">

            <h1>Cart</h1>
            <Row>
                <Col md={8}>
                    {cartItems.length === 0 ? (
                            <div>
                                 <Link to="/">Cart is empty</Link>
                            </div>
                        ):
                        (
                            <ListGroup>
                                {cartItems.map((product) => (
                                    <ListGroup.Item>
                                        <Row className="align-items-center">
                                            <Col md={4}>
                                                <img
                                                    src={product.image_url}
                                                    alt={product.name}
                                                    className="img-fluid rounded img-thumbnail"
                                                ></img>{' '}
                                                <Link to={`/product/id/${product.product_id}`}>{product.name}</Link>
                                            </Col>
                                            <Col md={3}>
                                                <button>
                                                    -
                                                </button>{' '}
                                                <span id="quantity">{product.quantity}</span>{' '}
                                                <button onClick={() => {
                                                    addToCart(product);
                                                    reload();
                                                }}>
                                                    +
                                                </button>
                                            </Col>
                                            <Col md={3}>${product.price}</Col>
                                            <Col md={2}>
                                                <button onClick={() => {
                                                    deleteFromCart(product);
                                                    reload();
                                                }}>
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
                                        {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
                                    </h3>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <div className="d-grid">
                                        <button
                                            type="button"
                                            variant="primary"
                                            disabled={cartItems.length === 0}>
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
}
export default CartScreen;
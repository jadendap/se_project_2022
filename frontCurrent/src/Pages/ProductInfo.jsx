import { useParams} from "react-router-dom";
import { useEffect, useReducer} from "react";
import axios from "axios";
import {Badge, Card, Col, ListGroup, Row} from "react-bootstrap";

const reducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_REQUEST':
            return {...state, loading:true};
        case 'FETCH_SUCCESS':
            return {...state, product: action.payload, loading: false};
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload};
        default:
            return state;
    }
};
function ProductInfo() {
    const params = useParams();
    const {id} = params;

    const [{loading, error, product}, dispatch] = useReducer(reducer, {
        loading: true,
        error: '',
        product: [],
    });

    useEffect( () =>{
        const fetchData = async () => {
            dispatch({type:'FETCH_REQUEST'});
            try {
                const result = await axios.get(`http://localhost:9000/product/id/${id}`);
                dispatch({type:'FETCH_SUCCESS',payload:result.data});
            } catch(err) {
                dispatch({type: 'FETCH_FAIL',payload: err.message});
            }
        };
        fetchData();
    }, [id]);
 const addToCartHandler = (item) => {
    const userSession = sessionStorage.sessionId;

    //check if user is logged in
    if (!userSession) {
          alert("Please sign in to add item to cart");
          window.location.href = "http://localhost:3000/login";
          return;
        }
    //post request to add item to db
    //send userSession, product_id
    const cart_item = {
      sessionId: userSession,
      productId: item.id,
    };

    const addResponse = fetch("http://localhost:9000/customerproduct", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cart_item),
    });

    console.log("item added");
  };
    return  (
      loading ? <div>Loading...</div>
           : error ? <div>{error}</div>
           :
           <div>
               <Row>
                   <Col md={6}>
                       <img className="img-large" src={product.image_url}
                            alt={product.name}></img>
                   </Col>
                   <Col md={3}>
                       <ListGroup variant="flush">
                           <ListGroup.Item>
                               <h1>{product.name}</h1>
                           </ListGroup.Item>
                           <ListGroup.Item>Price : ${product.price}</ListGroup.Item>
                           <ListGroup.Item>Description : {product.desc}</ListGroup.Item>
                       </ListGroup>
                   </Col>
                   <Col md = {3}>
                       <Card>
                           <Card.Body>
                               <ListGroup variant="flush">
                                   <ListGroup.Item>
                                       <Row>
                                           <Col>Price:</Col>
                                           <Col>${product.price}</Col>
                                           </Row>
                                   </ListGroup.Item>
                                   <ListGroup.Item>
                                       <Row>
                                           <Col>Status:</Col>
                                           <Col>
                                               {product.quantity > 0 ? (
                                                   <Badge bg="success">In Stock</Badge>
                                               ) : (
                                                   <Badge bg="danger">Out Of Stock</Badge>
                                               )}
                                           </Col>
                                       </Row>
                                   </ListGroup.Item>
                                   {product.quantity > 0 && (
                                       <ListGroup.Item>
                                           <div className="d-grid">
                                               <button onClick={addToCartHandler (product)} variant="primary">
                                                   Add to Cart
                                               </button>
                                           </div>
                                       </ListGroup.Item>
                                   )}
                               </ListGroup>
                           </Card.Body>
                       </Card>
                   </Col>
               </Row>
           </div>
    );
}
export default ProductInfo;
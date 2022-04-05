import { useParams } from "react-router-dom";
import { useEffect, useReducer} from "react";
import axios from "axios";
import { Col, ListGroup, Row} from "react-bootstrap";

const reducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_REQUEST':
            return {...state,  loading:true};
        case 'FETCH_SUCCESS':
            return {...state, product: action.payload};
        case 'FETCH_FAIL':
            return { ...state, error: action.payload};
        default:
            return state;
    }
};
function ProductScreen() {
    const params = useParams();
    const {id} = params;
    const [product, dispatch] = useReducer(reducer, {
        product: [],
    });

    useEffect( () =>{
        const fetchData = async () => {
            dispatch({type:'FETCH_REQUEST'});
            try {
                const result = await axios.get(`/api/product/id/${id}`);
                dispatch({type:'FETCH_SUCCESS',payload:result.data});
            } catch(err) {
                dispatch({type: 'FETCH_FAIL',payload: err.message});
            }

        };
        fetchData();
    }, [id]);


    return (
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
                           <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                           <ListGroup.Item>Description : {product.desc}</ListGroup.Item>
                           <ListGroup.Item><button>Add To Cart</button></ListGroup.Item>
                       </ListGroup>
                   </Col>
               </Row>
           </div>
    );
}
export default ProductScreen;
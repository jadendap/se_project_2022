import { useParams } from "react-router-dom";
import { useEffect, useReducer} from "react";
import axios from "axios";
import { Col, ListGroup, Row} from "react-bootstrap";


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
                const result = await axios.get(`/product/id/${id}`);
                dispatch({type:'FETCH_SUCCESS',payload:result.data});
            } catch(err) {
                dispatch({type: 'FETCH_FAIL',payload: err.message});
            }

        };
        fetchData();
    }, [id]);

    const addtoCart = async (item) => {
        axios.post('/addCartItem',{
            session_id: 86,
            product_id: item.id,
            })
    .then(function (res) {
        console.log(res);
    }).catch(function (err) {
            console.log(err);
        })};
    return (
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
                        <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                        <ListGroup.Item>Description : {product.desc}</ListGroup.Item>
                        <ListGroup.Item>SKU : {product.sku}</ListGroup.Item>
                        <ListGroup.Item><button onClick={() => addtoCart(product)}>Add To Cart</button></ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </div>
    );
}
export default ProductInfo;
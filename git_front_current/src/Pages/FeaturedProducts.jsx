import {useEffect, useReducer} from "react";
import axios from 'axios';
import {Col, Row} from "react-bootstrap";
import Product from './Product';


const reducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_REQUEST':
            return {...state, loading:true};
        case 'FETCH_SUCCESS':
            return {...state, products: action.payload, loading: false};
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload};
        default:
            return state;
    }
};

function FeaturedProducts() {
    const [{loading, error, products}, dispatch] = useReducer(reducer, {
        loading: true,
        error: '',
        products: [],
    });
    useEffect( () =>{
        const fetchData = async () => {
            dispatch({type:'FETCH_REQUEST'});
            try {
                const result = await axios.get('/featured');
                dispatch({type:'FETCH_SUCCESS',payload:result.data});
            } catch(err) {
                dispatch({type: 'FETCH_FAIL',payload: err.message});
            }
        };
        fetchData();
    }, []);
    return <div>
        <div className="products">
            <Row>
                {products.map(product => (
                    <Col key={product.id} sm={6} md={4} lg={3} className="mb-3">
                        <Product product={product}></Product>
                    </Col>
                ))}
            </Row>
            
        </div>
    </div>
}
export default FeaturedProducts;
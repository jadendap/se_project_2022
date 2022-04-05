import {useEffect, useReducer} from "react";
import axios from 'axios';
import {Col, Row} from "react-bootstrap";
import Product from '../Components/Product'


const reducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_REQUEST':
            return {...state, loading:true};
        case 'FETCH_SUCCESS':
            return {...state, products: action.payload};
        case 'FETCH_FAIL':
            return { ...state, error: action.payload};
        default:
            return state;
    }
};

function HomeScreen() {
    const [{ products}, dispatch] = useReducer(reducer, {
        products: [],
    });
    useEffect( () =>{
        const fetchData = async () => {
            dispatch({type:'FETCH_REQUEST'});
            try {
                const result = await axios.get('/api/products');
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
            )}
        </div>
    </div>
}
export default HomeScreen;
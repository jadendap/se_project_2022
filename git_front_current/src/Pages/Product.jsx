import {Link} from "react-router-dom";
import { Card} from "react-bootstrap";
import axios from "axios";
function Product(props) {
    const {product} = props;
    const addToCart = async (item) => {
        axios.post('/addCartItem',{
            session_id: 86,
            product_id: item.id,
        })
            .then(function (res) {
                console.log(res);
            }).catch(function (err) {
            console.log(err);
        })};
    return(
        <Card>
            <Link to={`/product/id/${product.id}`}>
                <img src={product.image_url} className="card-img-top" alt={product.name} />
            </Link>
            <Card.Body>

                    <Card.Title>{product.name}</Card.Title>
                </Link>
                <Card.Text>${product.price}</Card.Text>
                <button onClick={() => addToCart(product)}>Add to cart</button>
            </Card.Body>
        </Card>
    );
}
export default Product;
import {Link} from "react-router-dom";
import {Button, Card} from "react-bootstrap";

function Product(props) {
    const {product} = props;
    return(
        <Card>
            <Link to={`/product/id/${product.id}`}>
                <img src={product.image_url} className="card-img-top" alt={product.name} />
            </Link>
            <Card.Body>
                <Link to={`/product/id/${product.id}`}>
                    <Card.Title>{product.name}</Card.Title>
                </Link>
                <Card.Text>${product.price}</Card.Text>
                <Button>Add to cart</Button>
            </Card.Body>
        </Card>
    );
}
export default Product;
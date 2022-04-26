import { useNavigate, useParams } from "react-router-dom";
import { Col, ListGroup, Row, Badge } from "react-bootstrap";

function ProductInfo() {
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;
  const fetchProductInfo = async () => {
    const response = await fetch(`http://localhost:9000/product/id/${id}`);
    const responseJson = await response.json();
    sessionStorage.setItem("productInfo", JSON.stringify(responseJson));
  };
  fetchProductInfo();
  var product = JSON.parse(sessionStorage.productInfo);
  const handleClick = (item) => {
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

  return (
    <div className="content-container"> 
    <div>
      
      <Row>
        <Col md={6}>
          <img
            className="img-large"
            src={product.image_url}
            alt={product.name}
          ></img>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h1>{product.name}</h1>
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description : {product.desc}</ListGroup.Item>
            <ListGroup.Item>SKU : {product.sku}</ListGroup.Item>
            <ListGroup.Item>Quantity : {product.quantity}</ListGroup.Item>
            <ListGroup.Item>
              {product.quantity > 0 ? (
                <Badge bg="success">In Stock</Badge>
              ) : (
                <Badge bg="danger">Out Of Stock</Badge>
              )}
            </ListGroup.Item>

            <ListGroup.Item>
              {product.quantity > 0 ? (
                <button onClick={() => handleClick(product)}>
                  Add To Cart
                </button>
              ) : (
                <button>Unavailable</button>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
    </div>
  );
}
export default ProductInfo;

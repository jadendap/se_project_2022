import React from "react";
import {Link} from "react-router-dom";

const cardStyle =
{
    paddingLeft: 24,
    paddingRight: 24,
    backgroundColor: '#ebf7f4da',
    paddingBottom:"5%",
    border: "1px solid black",
    width: "300px",
    margin:"20px",
    height:"500px",
}
const productStyle =
{
    position: "relative",
    top:"-100px",
    height:"300px",
    left:"47px"
}
const ProductCards = ({ item, handleClick }) => {
    const { id, name, desc, sku, image_url, price, quantity, discount, active } =
        item;
    return (
        <div style={cardStyle} className="cards">
            <div style={productStyle} className="image_box">
                <Link to={`/product/id/${id}`}><img src={image_url} alt="" /></Link>
            </div>
            <div className="details">
                <Link to={`/product/id/${id}`}><p>{name}</p></Link>
                <p>Price - ${price}</p>
                <p>{quantity} - Available</p>
                <button onClick={() => handleClick(item)}>Add to cart</button>
            </div>
        </div>
    );
};

export default ProductCards;

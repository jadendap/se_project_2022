import React from "react";
import {Link} from "react-router-dom";

const ProductCards = ({ item, handleClick }) => {
    const { id, name, desc, sku, image_url, price, quantity, discount, active } =
        item;
    return (
        <div className="cards">
            <div className="image_box">
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

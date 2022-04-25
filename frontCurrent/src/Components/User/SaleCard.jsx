import React from "react";
import { Link } from "react-router-dom";

const SaleCards = ({ item, handleClick }) => {
  const {
    id,
    name,
    desc,
    sku,
    image_url,
    price,
    quantity,
    active,
    discount_percent,
  } = item;

  return (
    <div className="cards">
      <div className="image_box">
        <Link to={`/product/id/${id}`}>
          <img src={image_url} alt="" />
        </Link>
      </div>
      <div className="details">
        <Link to={`/product/id/${id}`}>
          <p>{name}</p>
        </Link>
        <p>Price - ${price}</p>
        <p>{quantity} - Available</p>
        <p>
          {desc} {parseFloat(discount_percent) * 100}% Off
        </p>
        <button onClick={() => handleClick(item)}>Add to cart</button>
      </div>
    </div>
  );
};

export default SaleCards;

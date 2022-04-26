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
const cardStyle =
{
    paddingLeft: 24,
    paddingRight: 24,
    backgroundColor: '#aac7aa',
    paddingBottom:"5%",
    border: "1px solid black",
    width: "300px",
    margin:"20px",
    height:"520px",
}
const productStyle =
{
    position: "relative",
    top:"-100px",
    height:"300px",
    left:"47px"
}
  return (
    <div style={cardStyle} className="cards">
      <div style={productStyle} className="image_box">
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

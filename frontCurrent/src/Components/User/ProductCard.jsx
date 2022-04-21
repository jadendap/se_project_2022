import React from "react";

const ProductCards = ({ item, handleClick }) => {
  const { id, name, desc, sku, image_url, price, quantity, discount, active } =
    item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={image_url} alt="" />
      </div>
      <div className="details">
        <p>{name}</p>
        <p>{desc}</p>
        <p>Sku - {sku}</p>
        <p>Price - ${price}</p>
        <p>{quantity} - Available</p>
        <button onClick={() => handleClick(item)}>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCards;

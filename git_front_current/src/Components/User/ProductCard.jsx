import React from "react";

const ProductCards = ({ item, handleClick }) => {
  const { id, name, desc, sku, image_url, price, quantity, discount, active } =
    item;
  return (
    <div className="cards">
      <div className="image_box">
          <Link to={`/product/id/${product.id}`}><img src={image_url} alt="" /></Link>
      </div>
      <div className="details">
         <Link to={`/product/id/${product.id}`}><p>{name}</p></Link>
         <!-- personal preference just think it looks cleaner without this info
        <p>{desc}</p>
        <p>Sku - {sku}</p>
        -->
        <p>Price - ${price}</p>
        <p>{quantity} - Available</p>
        <button onClick={() => handleClick(item)}>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCards;

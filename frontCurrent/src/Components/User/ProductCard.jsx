import React from "react";
import {Link} from "react-router-dom";

const cardStyle =
{

    backgroundColor: 'white',
    paddingBottom:"5%",
    border: "1px solid black",
    width: "100px",
    marginBottom:"20px",
    alignItems: "center",
    display:"flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    height:"450px",
    width: "300px",
}
const productStyle =
{
    height: "200px",
    width:"200px",
    margin:"0",
    padding:"0",

}

const divStyle =
{
    backgroundColor: '#F0EFEF',
    height: "220px",
    width:"300px",
    margin:"0",
    padding:"0",
    justifyContent:"end",
    
    

}
const ProductCards = ({ item, handleClick }) => {
    const { id, name, desc, sku, image_url, price, quantity, discount, active } =
        item;
    return (
        <div style={cardStyle} className="cards">
            
                <Link to={`/product/id/${id}`}><img style={productStyle} src={image_url} alt="" /></Link>

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

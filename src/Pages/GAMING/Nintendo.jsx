import { listClasses } from "@mui/material";
import ProductCards from "../../Components/User/ProductCard";
import React, { useState } from "react";
import "../../Styles/FeaturedPage.css";
import Products from "../../Layouts/Products";
let product_arr= [];
const fetchFeatured = async () => {
  const response = await fetch("http://localhost:9000/Products");
  const responseJson = await response.json();

  sessionStorage.setItem("featured", JSON.stringify(responseJson));
  for(let i = 0; i < responseJson.length; i++)
{
  if(responseJson[i].name.includes("Laptop") )
  {
  product_arr.push(responseJson[i].name)
  }

}
};



console.log(product_arr);
fetchFeatured();
const Nintendo = () => {
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    const userSession = sessionStorage.sessionId;
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

    console.log(item);
  };
  return (
    
    <section>
      {JSON.parse(sessionStorage.featured).map((item) => (
        <>
        {item.category_id == 2 ? (
        <ProductCards key={item.id} item={item} handleClick={handleClick} />
        ):(console.log("test"))
      }
      </>
      ))}
    </section>
  );
};

export default Nintendo;

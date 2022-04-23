import { listClasses } from "@mui/material";
import ProductCards from "../Components/User/ProductCard";
import React, { useState } from "react";
import "../Styles/FeaturedPage.css";
const fetchFeatured = async () => {
  const response = await fetch("http://localhost:9000/products");
  const responseJson = await response.json();

  sessionStorage.setItem("featured", JSON.stringify(responseJson));
};
fetchFeatured();
const FeaturedPage = () => {
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
        <ProductCards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default FeaturedPage;

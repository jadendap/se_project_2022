import ProductCards from "../Components/User/ProductCard";
import React from "react";
import "../Styles/FeaturedPage.css";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardGroup,
    MDBContainer
  } from "mdbreact";

const fetchFeatured = async () => {
  const response = await fetch("http://localhost:9000/featured");
  const responseJson = await response.json();
  console.log(responseJson);
  sessionStorage.setItem("featured", JSON.stringify(responseJson));
};
fetchFeatured();
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
const TrendingPage = () => {
  return (
    <div>
      <section>
        {JSON.parse(sessionStorage.featured).map((item) => (
          <ProductCards key={item.id} item={item} handleClick={handleClick} />
        ))}
      </section>
    </div>
  );
};

export default TrendingPage;

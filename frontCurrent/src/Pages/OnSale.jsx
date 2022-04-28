import SaleCards from "../Components/User/SaleCard";
import React from "react";
import "../Styles/SalesPage.css";

const fetchSale = async () => {
  const response = await fetch("http://localhost:9000/sale");
  const responseJson = await response.json();
  console.log(responseJson);

  sessionStorage.setItem("sale", JSON.stringify(responseJson));
};
fetchSale();
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
const OnSale = () => {
  return (
    <div>
      <section>
        {JSON.parse(sessionStorage.sale).map((item) => (
          <SaleCards key={item.id} item={item} handleClick={handleClick} />
        ))}
      </section>
    </div>
  );
};

export default OnSale;

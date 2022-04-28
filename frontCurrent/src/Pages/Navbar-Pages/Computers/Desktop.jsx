import ProductCards from "../../../Components/User/ProductCard";
import React from "react";
import "../../../Styles/FeaturedPage.css";

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
const DesktopPage = () => {
  let conditions = ["Fan", "Graphics", "Card", "RTX", "Power"];
  return (
    <div className="content-container">
      <section>
        {JSON.parse(sessionStorage.featured).map((item) => (
          //conditions.some(el => str1.includes(el));
          <>
            {conditions.some((el) => item.name.includes(el)) ? (
              <ProductCards
                key={item.id}
                item={item}
                handleClick={handleClick}
              />
            ) : (
              console.log("no")
            )}
          </>
        ))}
      </section>
    </div>
  );
};

export default DesktopPage;

import React, { Component } from "react";
import CustomerProduct from "../Components/CustomerProduct";

const productJson = JSON.parse(sessionStorage.getItem("products"));
const FeaturedPage = () => {
  return (
    <>
      <CustomerProduct />
      <div className="stock-container">
        {productJson.map((data, key) => {
          return (
            <div key={key}>
              {data.name + " , " + data.discount_id + " ," + data.price + ""}
              <img className="itemImg" src={data.image_url} class="myimages" />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default FeaturedPage;

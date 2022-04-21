import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../Styles/SearchPage.css";
const handleAddClick = (item) => {
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

  console.log(item);
};
const SearchPage = () => {
  const searchKey = useParams();
  console.log(searchKey);

  const [products, setProducts] = useState([]);

  //Make a sample data set and make it so that renders, figure out how to pull data later.
  const getProducts = async (keyword) => {
    console.log(keyword);
    const url = "http://localhost:9000/productSearch/" + keyword;
    console.log(url);

    const response = await fetch(url, {
      method: "GET",
    });

    const responseJson = await response.json();
    //console.log( JSON.stringify(responseJson));
    setProducts(responseJson);
    console.log(products);
  };

  useEffect(() => {
    getProducts(searchKey.id);
  }, 0);

  const yeah = () => {
    {
    }
  };

  return (
    <div className="searchPage-container">
      <div className="searchPage-main">
        {products.length ? (
          products.map((item) => (
            //Swtich out the statment with the item.link or whatever it is called.
            <Link className="product-link" to={`/`}>
              <div className="product-wrapper">
                <div className="product-info">
                  <p className="testing2">{item.name}</p>
                  <p>{item.price}</p>{" "}
                  <button onClick={() => handleAddClick(item)}>
                    Add to cart
                  </button>
                </div>
                <img
                  className="product-img"
                  src={item.image_url}
                  alt="Product Image"
                />
              </div>
            </Link>
          ))
        ) : (
          <p>We do NOT have something</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;

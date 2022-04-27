import React, { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import ProductCards from "../Components/User/ProductCard";
import "../Styles/SearchPage.css";
import FeaturedPage from "./FeaturedPage";


//CHECK what's going on with the availability + display the welcome *user*


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
  const [search, setSearch] = useState("");
  //console.log( searchKey);
  const [products, setProducts] = useState([]);

  //Make a sample data set and make it so that renders, figure out how to pull data later.
  const getProducts = async (keyword) => {
    //console.log(keyword);
    const url = "http://localhost:9000/products/" + keyword;
    //console.log(url);

    const response = await fetch(url);
    const responseJson = await response.json();
    console.log( JSON.stringify(responseJson));
    console.log(sessionStorage);
    sessionStorage.setItem("searchResults", JSON.stringify(responseJson));
    setProducts(responseJson);
    console.log(products);
  };

  useEffect(() => {
    setSearch( (searchKey) );
    console.log( search);
    getProducts(searchKey.id);
  }, 0);




  return (
    <div className="searchPage-container">
        {products.length ? (
          <>
          <div className="text-container">
            <p>{products.length} Result(s) for {search.id}. </p>
          </div>
          <section>
            {JSON.parse(sessionStorage.searchResults).map((item) => (
              <ProductCards key={item.id} item={item} handleClick={handleAddClick} />
            ))}
          </section>
          </>
        ) : (
          <>
          <div className="text-container">
            <p>No results for {search.id}. Here are the featured items instead.</p>
          </div>
          
          <FeaturedPage/>
          </>
        )}
      
    </div>
  );
};

export default SearchPage;

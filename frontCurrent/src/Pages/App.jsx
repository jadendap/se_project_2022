import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Categories from "../Components/User/Categories";
import Featured from "../Components/User/Featured";
import '../Styles/App.css'

const App = () => {
  const [customer, setCustomerInfo] = useState("");


  const getCustomerInfo = async () => {
    try{
    const keyword = sessionStorage.sessionId;
    if (!keyword) {
        return;
    }
    console.log(keyword);
    const url = "http://localhost:9000/customer/ShoppingSession/" + keyword;

    const response = await fetch(url, {
        method: "GET",
    });
    const responseJson = await response.json();
    setCustomerInfo(responseJson);
    console.log(JSON.stringify(customer));
    }catch (error) {
      console.log("error", error);
     }
     };

     useEffect(() => {
        getCustomerInfo();
    }, 0);

  
  return (
    <div className="homePage-container">
        {sessionStorage.sessionId ? (
          <h1 className="welcome-text">Welcome, {customer.first_name}</h1>
    ) : (
    <></>
    )}
      <Featured />
      <Categories />
    </div>
  );
};
export default App;

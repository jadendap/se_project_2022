import React from "react";
import { useNavigate } from "react-router-dom";
const submitStyle = {
  margin: "10px 0 0 0",
  padding: "7px 10px",
  border: "1px solid #efffff",
  borderRadius: "3px",
  background: "#98c285",
  width: "20%",
  fontSize: "15px",
  color: "black",
  display: "block",
};
function changeBackGround(e) {
  e.target.style.background = "#CD7F32";
  e.target.style.color = "white";
}
function changeBackGroundOut(e) {
  e.target.style.background = "#98c285";
  e.target.style.color = "black";
}

function TestButton() {
  const fetchCustomers = async () => {
    const response = await fetch("http://localhost:9000/products");
    const responseJson = await response.json();
    console.log(responseJson);
    sessionStorage.setItem("products", JSON.stringify(responseJson));
    console.log(sessionStorage.getItem("products"));
    window.location.href = "http://localhost:3000/FeaturedPage";
  };
  return (
    <div className="app flex-row align-items-center">
      <button
        style={submitStyle}
        type="submit"
        onClick={fetchCustomers}
        onMouseOver={changeBackGround}
        onMouseOut={changeBackGroundOut}
      >
        Test Button
      </button>
    </div>
  );
}

export default TestButton;

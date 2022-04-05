// fetchCustomers uses native javascript function fetch to reach backend server and get response.
// we use native javasctip function json() to parse response and make it json array
// we then log that json array to browser console with native javascript module/function console.log()
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
function AdminDiscounts() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/AdminDiscountsPage`;
    navigate(path);
  };
  return (
    <div className="app flex-row align-items-center">
      <button
        style={submitStyle}
        type="submit"
        onClick={routeChange}
        onMouseOver={changeBackGround}
        onMouseOut={changeBackGroundOut}
      >
        Add Discount
      </button>
    </div>
  );
}
// Demo is react component that renders a button. when clicked calls and awaits the fetchCustomers async function

export default AdminDiscounts;

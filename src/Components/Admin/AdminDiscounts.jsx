// fetchCustomers uses native javascript function fetch to reach backend server and get response.
// we use native javasctip function json() to parse response and make it json array
// we then log that json array to browser console with native javascript module/function console.log()
import { AccessibleOutlined } from "@mui/icons-material";
import React from "react";
import '../../Styles/AdminPage.scss';
import { useNavigate } from "react-router-dom";
const btn = 
{
  margin: '10px 0 0 0',
    padding: '7px 10px',
    border: '1px solid #efffff',
    borderRadius: '3px',
    background: '#98c285',
    width: '10%', 
    fontSize: '15px',
    color: 'black',
    display: 'block'
}

function AdminDiscounts() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/AdminDiscountsPage`;
    navigate(path);
  };
  return (
    <div className="app flex-row align-items-center">
      <button class = "button" background-color="#4CAF50" className="admindiscounts-btn" onClick={routeChange}>
        Add Discount
      </button>
    </div>
  );
}
// Demo is react component that renders a button. when clicked calls and awaits the fetchCustomers async function

export default AdminDiscounts;

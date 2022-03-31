import React from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
// fetchCustomers uses native javascript function fetch to reach backend server and get response.
// we use native javasctip function json() to parse response and make it json array
// we then log that json array to browser console with native javascript module/function console.log()
function AdminButton() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/AdminLogin`;
    navigate(path);
  };
  return (
    <div className="app flex-row align-items-center">
      <button color="primary" className="px-4" onClick={routeChange}>
        Admin? Click Here!
      </button>
    </div>
  );
}
// Demo is react component that renders a button. when clicked calls and awaits the fetchCustomers async function

export default AdminButton;

import React from "react";
import { useNavigate } from "react-router-dom";

function AdminAddItem() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/AdminAddItemPage`;
    navigate(path);
  };
  return (
    <div className="app flex-row align-items-center">
      <button color="primary" className="additem" onClick={routeChange}>
        AddItem!
      </button>
    </div>
  );
}
// Demo is react component that renders a button. when clicked calls and awaits the fetchCustomers async function

export default AdminAddItem;

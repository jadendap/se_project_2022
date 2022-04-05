import React from "react";
import { useNavigate } from "react-router-dom";
const submitStyle = {
  margin: "10px 0 0 0",
  padding: "7px 10px",
  border: "1px solid #efffff",
  borderRadius: "3px",
  background: "#98c285",
  width: "100%",
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
function AdminButton() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/AdminLogin`;
    navigate(path);
  };
  return (
    <div className="app flex-row align-items-center">
      <button
        color="primary"
        className="px-4"
        onClick={routeChange}
        style={submitStyle}
        onMouseOver={changeBackGround}
        onMouseOut={changeBackGroundOut}
      >
        Admin? Click Here
      </button>
    </div>
  );
}

export default AdminButton;

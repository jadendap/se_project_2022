import React from "react";
import TestButton from "../Components/TestButton";
import Products from "../Layouts/Products";

function Desktop() {
  console.log(sessionStorage.getItem("sessionId"));

  return <Products />;
}
export default Desktop;

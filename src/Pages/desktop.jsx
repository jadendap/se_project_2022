import React, { Component, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NavBar from "../Components/User/Navbar";
import Categories from "../Components/User/Categories";
import Featured from "../Components/User/Featured";
import Products from "../Layouts/Products";
function Desktop() {
  return (
    <Products/>
  );
}
export default Desktop;
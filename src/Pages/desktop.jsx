import React, { Component, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NavBar from "../Components/Navbar";
import Categories from "../Components/Categories";
import Featured from "../Components/Featured";
import Products from "../Layouts/Products";
function Desktop() {
  return (
    <Products/>
  );
}
export default Desktop;
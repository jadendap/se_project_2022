import React from "react";
import ReactDOM from "react-dom"
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import "./Styles/index.css"
import App from "./Pages/App"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import NavBar from "./Components/Navbar";


ReactDOM.render(
    <Router>
      <NavBar/>
      <Routes>
      <Route path="/" element={<App />}>
      </Route>
        <Route path="/Desktop" element={<HomeScreen />}>
        </Route>
          <Route path="/product/id/:id" element={<ProductScreen />}></Route>
        <Route path="/Login" element={<Login />}>
        </Route>
        <Route path="/Register" element={<Register />}>
        </Route>
          <Route path="/cart" element={<CartScreen />}></Route>

        
      </Routes>
    </Router>,
  
    document.getElementById("root")
  );
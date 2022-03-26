import React from "react";
import ReactDOM from "react-dom"
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//import { NavBar } from "./Navbar";
import "./Styles/index.css"
import App from "./Pages/App"
import Desktop from "./Pages/desktop"
import Login from "./Pages/Login"
import Register from "./Pages/Register"

import Demo from "./Pages/Demo"
//import Login from "./Pages/login"
import NavBar from "./Components/Navbar";
import Search from "./Components/SearchBar";
import Categories from "./Components/Categories"
import Featured from "./Components/Featured"
import SearchBar from "./Components/SearchBar"
//import Customer from "./Pages/login";

ReactDOM.render(
    <Router>
      <NavBar/>
      
      <Routes>
      <Route path="/" element={<App />}>
      </Route>
        <Route path="/Desktop" element={<Desktop />}>
        </Route>
        <Route path="/Login" element={<Login />}>
        </Route>
        <Route path="/Register" element={<Register />}>
        </Route>
        
      </Routes>
    </Router>,
  
    document.getElementById("root")
  );
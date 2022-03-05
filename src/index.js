import React from "react";
import ReactDOM from "react-dom"
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//import { NavBar } from "./Navbar";
import "./index.css"
import App from "./App"
import About from "./About"
import Home from "./Featured"
import Navigation from "./Navigation"
import NavBar from "./Navbar";
import Categories from "./Categories";
import Featured from "./Featured";
ReactDOM.render(
    <Router>
      <NavBar/>
      <Routes>
      <Route path="/" element={<Home />}>
      </Route>
        <Route path="/About" element={<About />}>
        </Route>
      </Routes>
    </Router>,
  
    document.getElementById("root")
  );
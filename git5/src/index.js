import React from "react";
import ReactDOM from "react-dom";
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//import { NavBar } from "./Navbar";
import "./Styles/index.css";
import App from "./Pages/App";
import Desktop from "./Pages/desktop";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import NavBar from "./Components/Navbar";

/*********************** stuff michael added************************/
import AdminLogin from "./Pages/AdminLogin";
import AdminPage from "./Pages/AdminPage";
import AdminAddItemPage from "./Pages/AdminAddItemPage";
import AdminDiscountsPage from "./Pages/AdminDiscountsPage";
import FeaturedPage from "./Pages/FeaturedPage";

/************************************************************************ */

ReactDOM.render(
  <Router>
    <NavBar />

    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/Desktop" element={<Desktop />}></Route>
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/Register" element={<Register />}></Route>
      <Route path="/AdminLogin" element={<AdminLogin />}></Route>
      <Route path="/AdminPage" element={<AdminPage />}></Route>
      <Route path="/AdminAddItemPage" element={<AdminAddItemPage />}></Route>
      <Route
        path="/AdminDiscountsPage"
        element={<AdminDiscountsPage />}
      ></Route>
      <Route path="/FeaturedPage" element={<FeaturedPage />}></Route>
    </Routes>
  </Router>,

  document.getElementById("root")
);

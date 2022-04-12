import React from "react";
import ReactDOM from "react-dom";
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Routes, useHistory } from "react-router-dom";

import "./Styles/index.css";
import App from "./Pages/App";
import Desktop from "./Pages/desktop";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import NavBar from "./Components/User/Navbar";
import Footer from './Components/User/Footer'


/*********************** stuff michael added************************/
import AdminLogin from "./Pages/Admin/AdminLogin";
import AdminPage from "./Pages/Admin/AdminPage";
import AdminAddItemPage from "./Pages/Admin/AdminAddItemPage";
import AdminDiscountsPage from "./Pages/Admin/AdminDiscountsPage";
import AdminNavbar from "./Components/Admin/AdminNav";

/************************************************************************ */


ReactDOM.render(
  <App/>
  ,

  document.getElementById("root")
);
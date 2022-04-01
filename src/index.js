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
import NavBar from "./Components/User/Navbar";
import Footer from './Components/User/Footer'
/*********************** stuff michael added************************/
import AdminLogin from "./Pages/AdminLogin";
import AdminPage from "./Pages/AdminPage";
import AdminAddItemPage from "./Pages/AdminAddItemPage";
import AdminDiscountsPage from "./Pages/AdminDiscountsPage";
import AdminNavbar from "./Components/Admin/AdminNav";

/************************************************************************ */

ReactDOM.render(
  <>
  <Router>
    <NavBar />
    <Routes>
      
      <Route path="/Desktop" element={<Desktop />}></Route>
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/Register" element={<Register />}></Route>
      <Route path="/AdminLogin" element={<AdminLogin />}></Route>
  <Route path="/AdminPage" element={<AdminPage />}></Route>
      <Route path="/" element={<App />}></Route>
      
      
      
  
    </Routes>
    <AdminNavbar/>
    <Routes>
    <Route path="/AdminDiscountsPage" element={<AdminDiscountsPage/>}></Route>
  <Route path="/AdminAddItemPage" element={<AdminAddItemPage/> }></Route>
  </Routes>
  </Router>
  <Router>
  
  </Router>
</>,

  document.getElementById("root")
);
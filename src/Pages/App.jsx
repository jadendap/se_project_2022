import React from "react";
import ReactDOM from "react-dom";
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/App.css"
import { BrowserRouter as Router, Route, Routes, useHistory } from "react-router-dom";
import { useState, useEffect } from 'react';

import Desktop from "./desktop";
import Login from "./Login";
import Register from "./Register";
import SearchPage from './SearchPage';
import NavBar from "../Components/User/Navbar";
import Footer from '../Components/User/Footer';
import HomePage from "./HomePage";

/*********************** stuff michael added************************/
import AdminLogin from "./Admin/AdminLogin";
import AdminPage from "./Admin/AdminPage";
import AdminAddItemPage from "./Admin/AdminAddItemPage";
import AdminDiscountsPage from "./Admin/AdminDiscountsPage";
import AdminNavbar from "../Components/Admin/AdminNav";
import { auto } from "@popperjs/core";

/************************************************************************ */


export default function App() {

  const [search, setSearch] = useState("");
  const [ products, setProtucts ] = useState("");
  const [ searchResults, setSearchResults ] = useState("");


  return (
    <>
    <Router>
      <div className="page-container">
        <div className="page-main">
          <NavBar search={search} setSearch={setSearch}/>
          <Routes>

            <Route path="/Desktop" element={<Desktop />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Register" element={<Register />}></Route>
            <Route path="/AdminLogin" element={<AdminLogin />}></Route>
            <Route path="/AdminPage" element={<AdminPage />}></Route>
            <Route path="/" element={<HomePage search={search} setSearch={setSearch}/>}></Route>
            <Route path="/search/:id" element={<SearchPage />}></Route>
            <Route path="/AdminDiscountsPage" element={<AdminDiscountsPage/>}></Route>
            <Route path="/AdminAddItemPage" element={<AdminAddItemPage/> }></Route>
        
          </Routes>
        </div>
        <Footer/>
      </div>
     
    </Router>
  </>
  )
}

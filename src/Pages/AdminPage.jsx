import React, { Component, useEffect, useState } from "react";
import AdminModifyItems from "../Components/Admin/AdminModifyItems";
import getItems from "../Components/Admin/AdminModifyItems";
import AdminDiscounts from "../Components/Admin/AdminDiscounts";
import routeChange from "../Components/Admin/AdminDiscounts";
import AdminModifyUsers from "../Components/Admin/AdminModifyUsers";
import AdminSales from "../Components/Admin/AdminSales";
import AdminOrders from "../Components/Admin/AdminOrders";
import AdminAddItem from "../Components/Admin/AdminAddItem";
import AdminNavbar from "../Components/Admin/AdminNav";
import { Link } from 'react-router-dom';
import ReactDOM from "react-dom";
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "../Components/User/Navbar";
import AdminDiscountsPage from "../Pages/AdminDiscountsPage";
import AdminAddItemPage from "../Pages/AdminAddItemPage";
import AdminHome from "./AdminPage"
import { render } from "@testing-library/react";
class AdminPage extends Component{
  render () {
  return(
    <div className="admin-panel-container">
      <React.Fragment>
      </React.Fragment>
      </div>
  )
  }
        
  }
  export default (AdminPage);
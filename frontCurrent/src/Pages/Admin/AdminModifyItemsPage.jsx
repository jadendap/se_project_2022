import React, { Component, useEffect, useState } from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import AdminModifyItems from "../../Components/Admin/AdminModifyItems";
import getItems from "../../Components/Admin/AdminModifyItems";
import AdminDiscounts from "../../Components/Admin/AdminDiscounts";
import routeChange from "../../Components/Admin/AdminDiscounts";
import AdminModifyUsers from "../../Components/Admin/AdminModifyUsers";
import ModifyItemsTable from "../../Components/Admin/Items/ModifyItemsTable";
import AdminSales from "../../Components/Admin/AdminSales";
import AdminOrders from "../../Components/Admin/AdminOrders";
import AdminAddItem from "../../Components/Admin/AdminAddItem";
import AdminNavbar from "../../Components/Admin/AdminNav";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import NavBar from "../../Components/User/Navbar";
import AdminDiscountsPage from "./AdminDiscountsPage";
import AdminAddItemPage from "./AdminAddItemPage";
import AdminHome from "./AdminPage";
import { render } from "@testing-library/react";
import "../../Styles/AdminPage.scss";
import ModifyUsersTable from "../../Components/Admin/users/ModifyUsersTable";
import "../../Styles/index.css";

//console.log(responseJson);
//return responseJson;
//};
function AdminModifyItemsPage() {
  const fetchCustomers = async () => {
    const response = await fetch("http://localhost:9000/products");
    const responseJson = await response.json();
    console.log(responseJson);
    sessionStorage.setItem("products", JSON.stringify(responseJson));
    console.log(sessionStorage.getItem("products"));
    window.location.href = "http://localhost:3000/AdminModifyItemsPage";
  };
  return (
    <>
      <AdminNavbar />
      <ModifyItemsTable />
    </>
  );

  //let data = fetchCustomers();
  //console.log(data);
  //let username_array = [];
  //for(let i = 0; i < data.length; i++)
  //{
  //username_array.push(data[i].username)
  //console.log(data[i].username)

  //}
  //return (
  //<>

  //<AdminNavbar/>
  //<h1>{username_array[0]}</h1>
  //</>
  //)
}
export default AdminModifyItemsPage;

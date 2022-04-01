import React from "react";
import AdminModifyItems from "./AdminModifyItems";
import getItems from "./AdminModifyItems";
import AdminDiscounts from "./AdminDiscounts";
import routeChange from "./AdminDiscounts";
import AdminModifyUsers from "./AdminModifyUsers";
import AdminSales from "./AdminSales";
import AdminOrders from "./AdminOrders";
import AdminAddItem from "../Admin/AdminAddItem";
import '../../Styles/AdminPage.css';
import { Link } from 'react-router-dom';
import {Route} from "react-router-dom"
export default function AdminNavbar() {
    return (
      <div class="nav flex-column navbar-default  me-auto ">
<ul class="nav navbar-nav admin-navbar-style" id="myTab">
<li class="admin-nav-item" >
    <Link class="nav-link" className="nav-link"data-toggle="tab"  to='/AdminPage'>Dashboard</Link>
  </li>
  <li class="admin-nav-item">
    <a class="nav-link" className="nav-link"data-toggle="tab">Modify Items</a>
  </li>
  <li class="admin-nav-item">
    <Link to='/AdminDiscountsPage' class="nav-link" className="nav-link"data-toggle="tab"  >Add Discount</Link>
  </li>
  <li class="admin-nav-item">
    <Link class="nav-link" className="nav-link"data-toggle="tab"  to='/AdminAddItemPage'>Add Item</Link>
  </li>
</ul>
</div>


    )
}
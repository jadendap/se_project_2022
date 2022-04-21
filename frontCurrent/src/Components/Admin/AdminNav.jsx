import React from "react";
import AdminModifyItems from "./AdminModifyItems";
import getItems from "./AdminModifyItems";
import AdminDiscounts from "./AdminDiscounts";
import routeChange from "./AdminDiscounts";
import AdminModifyUsers from "./AdminModifyUsers";
import AdminSales from "./AdminSales";
import AdminOrders from "./AdminOrders";
import AdminAddItem from "../Admin/AdminAddItem";
import '../../Styles/AdminPage.scss';
import { Link } from 'react-router-dom';
import {Route} from "react-router-dom"

import { useLocation } from 'react-router-dom';

export default function AdminNavbar() {
    return (
      <div>
      <div class="nav flex-column navbar-default  me-auto .hidden-xs">
       
<ul class="nav navbar-nav admin-navbar-style" id="myTab">
<li class="admin-nav-item" >
    <a className="header">Admin Navbar</a>
  </li>
<li class="admin-nav-item" >
    <Link class="nav-link" className="nav-link"data-toggle="tab"  to='/AdminPage'>Dashboard</Link>
  </li>
  
  <li class="admin-nav-item">
    <Link class="nav-link" className="nav-link"data-toggle="tab"  to='/AdminModifyUsersPage'>Users</Link>
  </li>
  <li class="admin-nav-item">
    <Link class="nav-link" className="nav-link"data-toggle="tab"  to='/AdminModifyItemsPage'>Inventory</Link>
  </li>
  <li class="admin-nav-item">
    <Link class="nav-link" className="nav-link"data-toggle="tab"  to='/AdminOrdersPage'>Orders</Link>
  </li>
  <li class="admin-nav-item">
    <Link to='/AdminDiscountsPage' class="nav-link" className="nav-link"data-toggle="tab"  >Add Discount</Link>
  </li>
</ul>
</div>
</div>



    )
}
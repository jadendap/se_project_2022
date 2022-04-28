import React, { useState } from "react";
import ReactDOM from "react-dom";
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//import { NavBar } from "./Navbar";
import "./Styles/index.css";
import App from "./Pages/App";
import Accessories from "./Pages/Navbar-Pages/Computers/Accessories";
import Desktop from "./Pages/Navbar-Pages/Computers/Desktop";
import Monitors from "./Pages/Navbar-Pages/Computers/Monitors";
import Storage from "./Pages/Navbar-Pages/Computers/Storage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import NavBar from "./Components/User/Navbar";
import Footer from "./Components/User/Footer";
import ProductInfo from "./Pages/ProductInfo";
import Shipping from "./Pages/Shipping";
import Confirmation from "./Pages/Confirmation";
import PlaceOrder from "./Pages/PlaceOrder";
import OrderHistory from "./Pages/OrderHistory";
/*********************** stuff michael added************************/
import AdminLogin from "./Pages/Admin/AdminLogin";
import AdminPage from "./Pages/Admin/AdminPage";
import AdminAddItemPage from "./Pages/Admin/AdminAddItemPage";
import AdminDiscountsPage from "./Pages/Admin/AdminDiscountsPage";
import AdminModifyItemsPage from "./Pages/Admin/AdminModifyItemsPage";
import AdminModifyUsersPage from "./Pages/Admin/AdminModifyUsersPage";
import AdminOrdersPage from "./Pages/Admin/AdminOrdersPage";
import AdminSetSalePage from "./Pages/Admin/AdminSetSalePage";
import AdminNavbar from "./Components/Admin/AdminNav";
import SearchPage from "./Pages/SearchPage";
import FeaturedPage from "./Pages/FeaturedPage";
import Navbar from "./Components/User/Navbar";
import Featured from "./Components/User/Featured";
import Categories from "./Components/User/Categories";
import Cart from "./Pages/Cart";
import OnSale from "./Pages/OnSale";

/************************************************************************ */

ReactDOM.render(
  <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Cart" element={<Cart />}></Route>
        <Route path="/FeaturedPage" element={<FeaturedPage />}></Route>

        <Route path="/Desktop" element={<Desktop />}></Route>
        <Route path="/Accessories" element={<Accessories />}></Route>
        <Route path="/Monitors" element={<Monitors />}></Route>
        <Route path="/Storage" element={<Storage />}></Route>

        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/AdminLogin" element={<AdminLogin />}></Route>
        <Route path="/AdminPage" element={<AdminPage />}></Route>
        <Route path="/" element={<App />}></Route>
        <Route path="/search/:id" element={<SearchPage />}></Route>
        <Route path="/product/id/:id" element={<ProductInfo />}></Route>
        <Route path="/Shipping" element={<Shipping />}></Route>
        <Route path="/PlaceOrder" element={<PlaceOrder />}></Route>
        <Route path="/OrderHistory" element={<OrderHistory />}></Route>
        <Route path="/OnSale" element={<OnSale />}></Route>
        <Route path="/Confirmation" element={<Confirmation />}></Route>
        <Route
          path="/AdminDiscountsPage"
          element={<AdminDiscountsPage />}
        ></Route>
        <Route path="/AdminAddItemPage" element={<AdminAddItemPage />}></Route>
        <Route
          path="/AdminModifyItemsPage"
          element={<AdminModifyItemsPage />}
        ></Route>
        <Route
          path="/AdminModifyUsersPage"
          element={<AdminModifyUsersPage />}
        ></Route>
        <Route path="/AdminOrdersPage" element={<AdminOrdersPage />}></Route>
        <Route path="/AdminSetSalePage" element={<AdminSetSalePage />}></Route>
      </Routes>

      <Footer />
    </Router>
  </>,

  document.getElementById("root")
);

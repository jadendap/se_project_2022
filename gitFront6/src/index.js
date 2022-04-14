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
import Footer from "./Components/User/Footer";
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

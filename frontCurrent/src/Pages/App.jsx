import React, { Component, useEffect, useState } from "react";
import Navbar from "../Components/User/Navbar";
import Categories from "../Components/User/Categories";
import Featured from "../Components/User/Featured";
import TextField from "@mui/material/TextField";
import { Paper } from "@material-ui/core";
import { ThemeProvide, createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "styled-components";
import Products from "../Layouts/Products";
import Cart from "./Cart";

const App = () => {
  const [cart, setCart] = useState([]);
  return (
    <React.Fragment>
      <Featured />
      <Categories />
    </React.Fragment>
  );
};
export default App;

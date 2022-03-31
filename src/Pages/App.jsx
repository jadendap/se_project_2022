import React, { Component, useEffect, useState } from "react";

import Categories from "../Components/Categories"
import Featured from "../Components/Featured"
import Slider from "../Components/Slider"
import TextField from "@mui/material/TextField";
import SearchBar from "../Components/SearchBar.jsx"
import {Paper} from "@material-ui/core"
import { ThemeProvide, createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "styled-components";
export default class App extends Component
{
    
    render()
    {
        return(
            <React.Fragment>
            <Featured/>
            <Categories/>
            </React.Fragment>
        );
    }
}
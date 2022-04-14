import React, { Component, useEffect, useState } from "react";

import Categories from "../Components/User/Categories"
import Featured from "../Components/User/Featured"
import TextField from "@mui/material/TextField";
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
import React, { Component, useEffect, useState } from "react";
import NavBar from "./Navbar";
import Categories from "./Categories"
import Featured from "./Featured"
import MainContent from "./MainContent";
import Login from "./Login";
import Search from "./Search";

export default class App extends Component
{
    render()
    {
        return(
        <React.Fragment>
            <NavBar/>
            <Featured/>
            <Categories/>


        </React.Fragment>
        
        
        
        );
    }
}
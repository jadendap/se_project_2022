import React, { Component, useEffect, useState } from "react";
import NavBar from "../Components/Navbar";
import Categories from "../Components/Categories"
import Featured from "../Components/Featured"
import HomeScreen from "../screens/HomeScreen";
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
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
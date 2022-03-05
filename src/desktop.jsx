import React, { Component, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NavBar from "./Navbar";
import Categories from "./Categories"
import Featured from "./Featured"
import MainContent from "./MainContent";
import Home from './Home';
function About() {
  return (
<>
<div class="header">
  <h1>Desktop Components</h1>
</div>

<div class="navbar">
  <a href="#">Link</a>
  <a href="#">Link</a>
  <a href="#">Link</a>
  <a href="#" class="right">Link</a>
</div>

<div class="row">
  <div class="side">
    <h3>Categories</h3>
    <img src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3B1fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="fakeimg" style="height:200px;"></img>
    <p>Processors</p>
    <img src="https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3B1fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="fakeimg" style="height:200px;"></img>
    <p>Graphic Cards</p>
    <img src="https://images.unsplash.com/photo-1618339220157-daa2cd9ade56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGVza3RvcCUyMGZhbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" class="fakeimg" style="height:200px;"></img>
    <p>Desktop Fans</p>
  </div>
  <div class="main">
    <h2>TITLE HEADING</h2>
    <h5>Title description, Dec 7, 2017</h5>
    <div class="fakeimg" style="height:200px;">Image</div>
    <p>Some text..</p>
    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
    <br>
    <h2>TITLE HEADING</h2>
    <h5>Title description, Sep 2, 2017</h5>
    <div class="fakeimg" style="height:200px;">Image</div>
    <p>Some text..</p>
    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
  </div>
</div>

<div class="footer">
  <h2>Footer</h2>
</div>
</>
  );
}
export default About;
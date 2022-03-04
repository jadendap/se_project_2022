import React, { Component } from "react";
import { useNavigate } from 'react-router-dom';
import {Link, NavLink} from 'react-router-dom';
export class NavBar extends Component{
    render(){
        return(
          
            <React.Fragment>
              
<nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-style">
<a  href="./Pages/login.html">
                <button class="btn-login">Login</button>
              </a>
              <a  href="./Pages/register-page.html">
                <button class="btn-register">Register Here</button>
              </a>
  <div class="container-fluid">
    <a class="navbar-brand" href="#home">Techland</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            COMPUTERS
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="">Monitors</a></li>
            <li><a class="dropdown-item" href="#">Accessories</a></li>
            <li><a class="dropdown-item" href="#">Drives and Storage</a></li>
            <li><a class="dropdown-item" href="#">Desktop Components</a></li>
            <li><hr class="dropdown-divider"></hr></li>
          </ul>
          
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            MOBILE TECH
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Phones/Tablets</a></li>
            <li><a class="dropdown-item" href="#">Laptops</a></li>
            <li><a class="dropdown-item" href="#">Smart Watches</a></li>
            <li><a class="dropdown-item" href="#">E-readers</a></li>
          </ul>
          
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            SOUND DEVICES
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#furniture">Earbuds</a></li>
            <li><a class="dropdown-item" href="#decor">Headphones</a></li>
            <li><a class="dropdown-item" href="#appliances">Speakers</a></li>
            <li><a class="dropdown-item" href="#cooking">Home Audio</a></li>
           
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            GAMING
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#furniture">Xbox</a></li>
            <li><a class="dropdown-item" href="#decor">Playstation</a></li>
            <li><a class="dropdown-item" href="#appliances">Nintendo Switch</a></li>
            <li><a class="dropdown-item" href="#cooking">PC</a></li>
           
          </ul>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
            
            </React.Fragment>
        ); 
      
    }
}
  

export default NavBar;
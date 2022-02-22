import React, { Component } from "react";
export class NavBar extends Component{

    render(){
        return(
            <React.Fragment>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-style">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Website Name</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Home Goods
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#furniture">Furniture</a></li>
            <li><a class="dropdown-item" href="#decor">Decor</a></li>
            <li><a class="dropdown-item" href="#appliances">Appliances</a></li>
            <li><a class="dropdown-item" href="#cooking">Cooking</a></li>
            <li><hr class="dropdown-divider"></hr></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Electronics
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Monitors</a></li>
            <li><a class="dropdown-item" href="#">Accessories</a></li>
            <li><a class="dropdown-item" href="#">Consoles</a></li>
            <li><a class="dropdown-item" href="#">Phones/Tablets</a></li>
            <li><hr class="dropdown-divider"></hr></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
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
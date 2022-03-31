import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineLogin } from 'react-icons/md';
import { BsFillPersonFill } from 'react-icons/bs';
import { BiSearchAlt2 } from 'react-icons/bi';
import './ComponentCSS/Navbar.css';


export default function Navbar() {

  const [element, setElement] = useState(true)

  const showElement = () => {
    if( window.innerWidth <= 922 ) {
        setElement(true)
    } else {
        setElement(false)
    }
  }

  window.addEventListener('resize', showElement)

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-style">


    <div class="container-fluid">
    <li class="navbar-brand">
        <Link className="website-name" title="Return to the homepage" to="/">
          <h1>TechTerra</h1>
        </Link>
    </li>
    
      
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" autoClose="inside">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navList2" class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    COMPUTERS
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown" >
                    <li><a class="dropdown-item" href={process.env.PUBLIC_URL+"/Pages/accessories.html"}>Monitors</a></li>
                    <li><a class="dropdown-item" href={process.env.PUBLIC_URL+"/Pages/accessories.html"}>Accessories</a></li>
                    <li><a class="dropdown-item" href={process.env.PUBLIC_URL+"/Pages/storage.html"}>Storage & Drives</a></li>
                    <li className="nav-item">
                        <Link className="dropdown-item" to="/desktop">
                          Desktop Components
                        </Link>
                      </li>
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

              
              <ul className="working" class="navbar-nav ms-auto">
                <form class="d-flex">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button class="btn btn-outline-success" type="submit">Search</button>
                </form>  
              <li ><a className="login-link account-link" href="#">     <BsFillPersonFill/>   Login   </a> <a className="account-link" href="#"><MdOutlineLogin/>   Sign Up  </a></li>
              </ul>
            </div>
      
    </div>   
</nav>
  )
}

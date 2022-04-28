import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdOutlineLogin } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import "../ComponentCSS/Navbar.css";
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = ({ setShow }) => {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [userName, setUserName ] = useState("");
  const [customer, setCustomerInfo] = useState("");


  const getCustomerInfo = async () => {
    try{
    const keyword = sessionStorage.sessionId;
    if (!keyword) {
        return;
    }
    console.log(keyword);
    const url = "http://localhost:9000/customer/ShoppingSession/" + keyword;

    const response = await fetch(url, {
        method: "GET",
    });
    const responseJson = await response.json();
    setCustomerInfo(responseJson);
    console.log(JSON.stringify(customer));
    }catch (error) {
      console.log("error", error);
     }
     };

     useEffect(() => {
        getCustomerInfo();
    }, 0);

  return (
    <nav class="navbar navbar-expand-xl navbar-dark bg-dark navbar-style">
      
      <div class="container-fluid">
        <li className="navbar-brand">
          <Link className="website-name" title="Return to the homepage" to="/">
            <h1>TechTerra</h1>
          </Link>
        </li>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navList2" class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                COMPUTERS
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                <li className="nav-item">
                  <Link className="dropdown-item" to="/Monitors">
                    Monitors
                  </Link>
                </li>
                </li>
                <li>
                <Link className="dropdown-item" to="/Accessories">
                    Accessories
                  </Link>
                </li>
                <li>
                <Link className="dropdown-item" to="/Storage">
                    Storage & Drives
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="dropdown-item" to="/Desktop">
                    Desktop Components
                  </Link>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                MOBILE TECH
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li className="nav-item">
                  <Link className="dropdown-item" to="/Phones">
                    Phones/Tablets
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="dropdown-item" to="/Laptops">
                    Laptops
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="dropdown-item" to="/Watches">
                    Smart Watches
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="dropdown-item" to="/Readers">
                    E-readers
                  </Link>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                SOUND DEVICES
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="#furniture">
                    Earbuds
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#decor">
                    Headphones
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#appliances">
                    Speakers
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#cooking">
                    Home Audio
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                GAMING
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="#furniture">
                    Xbox
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#decor">
                    Playstation
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#appliances">
                    Nintendo Switch
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#cooking">
                    PC
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <ul className="working" class="navbar-nav ms-auto">
            <form class="d-flex" onSubmit={(e) => e.preventDefault()}>
              <input
                id="search-input"
                class="form-control me-2"
                type="search"
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search"
              />
              <a href={`/search/${search}`}>
                <button id="search-button" class="searchButton" type="button">
                  Search
                </button>
              </a>
            </form>
            <li>
              <Link to="/Cart"className="account-link shopping-cart-link">
                <AiOutlineShoppingCart/>
              </Link>
              {sessionStorage.sessionId ? (
                  <>
                  <Link to="/" className="account-link">
                    {" "}<BsFillPersonFill /><span>Account </span>
                  </Link>
                  <Link to="/Register" className="account-link">
                  <MdOutlineLogin /> <span>Sign out</span>{" "}
                  </Link>
                  </>
              ) : (
              <>
          <Link to="/Login" className="login-link account-link">
                {" "}
                <BsFillPersonFill /> <span>Login</span>{" "}
              </Link>{" "}
              <Link to="/Register" className="account-link">
                <MdOutlineLogin /> <span>Sign up</span>{" "}
              </Link>
                </>
              )}
    
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

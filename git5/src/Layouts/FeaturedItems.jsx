import styled from "styled-components";
import Desktop from "../Pages/desktop";
import "../Styles/App.css";
import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "./LayoutCSS/FeaturedItems.css";

const FeaturedItems = ({ item }) => {
  return (
    <div className="FeaturedItems-container">
      <div className="item-wrapper">
        <Link className="itemLink" to="/Desktop">
          <p>{item.name}</p>
          <img className="itemImg" src={item.image_url} alt="Product Image" />
        </Link>
      </div>
    </div>
  );
};

export default FeaturedItems;

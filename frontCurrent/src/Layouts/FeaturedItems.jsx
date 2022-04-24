import styled from "styled-components";
import Desktop from "../Pages/desktop";
import FeaturedPage from "../Pages/FeaturedPage";
import TrendingPage from "../Pages/Trending";
import "../Styles/App.css";
import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "./LayoutCSS/FeaturedItems.css";

const FeaturedItems = ({ item }) => {
  var link = "";
  if(item.title == "Trending")
  {
    link = "/TrendingPage"
  }
  if(item.title == "Featured")
  {
    link = "/FeaturedPage"
  }
  return (
    <div className="FeaturedItems-container">
      <div className="item-wrapper">
        <Link className="itemLink" to={link}>
          <p>{item.title}</p>
          <img className="itemImg" src={item.img} alt="Product Image" />
        </Link>
      </div>
    </div>
  );
};

export default FeaturedItems;

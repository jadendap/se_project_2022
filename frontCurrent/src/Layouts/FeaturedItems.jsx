import styled from "styled-components";
import Desktop from "../Pages/desktop";
import FeaturedPage from "../Pages/FeaturedPage";
import "../Styles/App.css";
import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "./LayoutCSS/FeaturedItems.css";

const FeaturedItems = ({ item }) => {
  var link = "";
  if (item.title === "Trending") {
    link = "/TrendingPage";
  }
  if (item.title === "Featured") {
    link = "/FeaturedPage";
  }
  if (item.title === "On Sale") {
    link = "/OnSale";
  }
  if (item.title === "Best Sellers") {
    link = "/Best Sellers";
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

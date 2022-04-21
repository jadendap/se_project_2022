import styled from "styled-components";
import Desktop from "../Pages/desktop"
import FeaturedPage from "../Pages/FeaturedPage";
import '../Styles/App.css';
import React from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';
import './LayoutCSS/FeaturedItems.css';

const FeaturedItems = ({item}) => {
  return (
      <div className="FeaturedItems-container">
        <div className="item-wrapper">
          <Link className='itemLink' to="/FeaturedProducts">
            <p>{item.title}</p>
            <img className='itemImg' src={item.img} alt='Product Image' />
          </Link>
        </div>
      </div>
  )
}

export default FeaturedItems;
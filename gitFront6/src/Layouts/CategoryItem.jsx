import styled from "styled-components";
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Desktop from "../Pages/desktop"
import './LayoutCSS/CategoryItem.css';


const CategoryItem = ({item}) => {
  return (
      <div className="CategoryItem-container">
      <div className="item-wrapper">
        <Link className='itemLink' to="/Desktop">
          <p className="itemTitle">{item.title}</p> 
          <img className='itemImg' src={item.img} alt='Product Image' />
        </Link>
      </div>
    </div>
  )
}

export default CategoryItem
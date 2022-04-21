import styled from "styled-components";
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const customerInfo = ({item}) => {
  return (
      <div className="CategoryItem-container">
      <div className="item-wrapper">
        <Link className='itemLink' to="/Desktop">
          <p className="itemTitle">{item.username}</p> 
        </Link>
      </div>
    </div>
  )
}

export default customerInfo
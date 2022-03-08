import styled from "styled-components";
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Circle= styled.div``


const Container = styled.div`
padding: 20px;
    display: flex;
    flex-wrap: wrap;
    
`;
const Image= styled.img`
 width: 40vh;
  height: 40vh;
  min-height: 50vh;
  object-fit: cover;
  border: 15px solid #f7f2ee;
`;
const Info = styled.div`
width: 100%;
height: 100%;
text-align:center ;
`

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Circle/>
        
        
        <Info title={`view ${item.title}` }>
        <Image src={item.img}/>
        <h3>{item.description}</h3>
        </Info>
        
    </Container>
  )
}

export default CategoryItem
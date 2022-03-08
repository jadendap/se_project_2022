import styled from "styled-components";
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Desktop from "../Pages/desktop"
const Circle= styled.div``


const Container = styled.div`
    padding: 20px;
`;
const Title= styled.a`
top:0px;
color:black;
text-decoration:none ;
z-index:5;
font-size: 25px ;
display:flex ;
`;
const Image = styled.img`
  width: 50vh;
  height: 50vh;
  object-fit: cover;
  border: 15px solid #f7f2ee;

`;
const Info = styled.div`
width: 100%;
height: 100%;
text-align:center ;
`;

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Circle/>
        
        <Image src={item.img}/>
        <Info>
        
        
        <Title href="/Desktop">{item.description} </Title>
        </Info>
        
    </Container>
  )
}

export default CategoryItem
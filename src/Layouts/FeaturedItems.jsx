import styled from "styled-components";
import '../Styles/App.css';
import React from "react";
import ReactDOM from "react-dom";
const Container = styled.div`
    padding: 20px;
`;
const Image = styled.img`
  width: 50vh;
  height: 50vh;
  object-fit: cover;
  border: 15px solid #f7f2ee;

`;
const Title= styled.a`
top:0px;
color:black;
text-decoration:none ;
z-index:5;
font-size: 30px ;
`;
const Button= styled.button`
width: 200px;
height: 100px;
background-color: #9ec7ee;
font-size: 35px;
font-weight: bold;
`;
const Info = styled.div`
width: 100%;
height: 100%;
text-align:center ;
`;

const FeaturedItems = ({item}) => {
  return (
      <>
    <Container>
    
        <Image src={item.img} />
        <Info>
        <Title href="https://github.com/styled-components/styled-components">{item.title} </Title>
        </Info>
        
        
        
        
        

    </Container>
    </>
  )
}

export default FeaturedItems;
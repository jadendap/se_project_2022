import styled from "styled-components";
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Circle= styled.div``


const Container = styled.div`
    flex:1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
`;
const Image= styled.img`
    height: 75%;
    min-width: 280px;
`;
const Info = styled.div``

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Circle/>
        <Image src={item.img} />
        <Info>
            {item.title} 

        </Info>
    </Container>
  )
}

export default CategoryItem
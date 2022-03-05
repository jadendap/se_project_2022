import styled from "styled-components";
import './App.css';
const Container = styled.div`
    padding-top: 75px;
    padding-right: 45px ;
    flex: 1;
    margin: 5px;
    height: 50vh;
    position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  min-height: 50vh ;
  object-fit: cover;
  border: 15px solid #f7f2ee;

`;
const Title= styled.div`
color:white;
`;
const Button= styled.button`
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
        <h3>
        <Title>{item.title}</Title>
        </h3>
        <Button>SHOP NOW</Button>
        </Info>
        
        

    </Container>
    </>
  )
}

export default FeaturedItems;
import styled from "styled-components";

const Container = styled.div`
flex: 1;
margin: 1;
height: 70vh;
position: relative;
`;
const Image = styled.img`
width:100%
hieght: 100%;
object-fit: cover;
`;
const Title= styled.div``
const Button= styled.button``

const Info = styled.div`
position: absolute;
top: 10;
left:0;
width: 100%;
height: 100%;
align-items:center;
justify-content: center;
`;
const FeaturedItems = ({item}) => {
  return (
      <>
    <Container>
        <Image src={item.img}/>
        <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
        </Info>

    </Container>
    </>
  )
}

export default FeaturedItems;
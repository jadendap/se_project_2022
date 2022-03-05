import styled from "styled-components";
import { featured } from "./data";
import FeaturedItems from "./FeaturedItems";

const Container = styled.div`
  display: flex;
  padding-bottom: 0px;
  padding-left: 60px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items:center
`;


const Featured = () => {
  return (
    <Container>
      {featured.map((item) => (
        <FeaturedItems item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Featured;
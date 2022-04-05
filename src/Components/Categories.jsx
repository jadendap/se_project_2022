import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "../Layouts/CategoryItem";

const Container = styled.div`
  display: flex;
  padding-right: 20px;
  flex-wrap: wrap;
`;


const Categories = () => {
  return (
    <>
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
    </>
  );
};

export default Categories;
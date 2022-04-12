import styled from "styled-components";
import { categories } from "../../data";
import CategoryItem from "../../Layouts/CategoryItem";
import '../ComponentCSS/Categories.css';



const Categories = () => {
  return (
    <>
    <div className="Categories-container">
        {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </div>
    </>
  );
};

export default Categories;
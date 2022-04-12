import styled from "styled-components";
import { featured } from "../../data";
import FeaturedItems from "../../Layouts/FeaturedItems";
import '../ComponentCSS/Featured.css';

const Featured = () => {
  return (
    <div className="Featured-container">
            {featured.map((item) => (
        <FeaturedItems item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Featured;
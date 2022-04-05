import styled from "styled-components"
import { Desktop_Components } from "../data"
import Product from "../Components/Product"
const Container = styled.div`
    padding:20px;
    display: flex;
`;
const Products = () => {
    return(
        <Container>
        {Desktop_Components.map((item) => 
            <Product item={item} key={item.id}/>
        )}

        </Container>
    )
}

export default Products

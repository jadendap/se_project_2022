import styled from "styled-components"
import { Desktop_Components } from "../data"
import Product from "../Components/User/Product"


const Products = () => {
    return(
        <div className="Product-container">
        {Desktop_Components.map((item) => 
            <Product item={item} key={item.id}/>
        )}

        </div>
    )
}

export default Products


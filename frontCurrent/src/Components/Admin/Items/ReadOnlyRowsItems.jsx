import React from "react";

const ReadOnlyRow = ({ product,inventory,handleEditClick, handleDeleteClick}) =>
{
    let quan;
    for(let j =0; j < inventory.length; j++)
        {
        if(inventory[j].id == product.inventory_id)
        {
          
          quan = inventory[j].quantity
        }
      }
    return(
        <tr>
          <td>
              <button
               type="button"
               onClick={(event) => handleEditClick(event, product)}>
               Edit
            </button>
            <button type="button" onClick={()=> handleDeleteClick(product.id)}>Delete</button>
              </td>
              <td  key={product.id}>{product.id}</td>
              <td >{product.name}</td>
              <td >{product.discount_id}</td>
              <td >{product.category_id}</td>
              <td >{product.inventory_id}</td>
              <td >{product.desc}</td>
              <td >{product.price}</td>
              <td >{product.sku}</td>
              <td >{product.image_url}</td>
              <td >{quan}</td>
              
        </tr>
        
    )
}

export default ReadOnlyRow;
import React from 'react';

const ReadOnlyRow = ({product, handleEditClick, handleDeleteClick}) =>
{
    return(
        <tr>
          <td>
              <button className="editbtn"
               type="button" 
               onClick={(event) => handleEditClick(event, product)}>
               Edit
            </button>
            <button className="delbtn" type="button" onClick={()=> handleDeleteClick(product.id)}>Delete</button>
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
              <td >{product.category}</td>
              
        </tr>
        
    )
}

export default ReadOnlyRow;
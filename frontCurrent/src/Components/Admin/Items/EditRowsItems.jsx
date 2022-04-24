import React from 'react'

const EditableRow = ({editFormData, handleEditFormChange, handleCancelClick}) => {
  return (
    <tr>
  <td>
      <button type='submit'>Save</button>
      <button type='button' onClick={handleCancelClick}>Cancel</button>
  </td>
  <td>
  #
  </td>
        <td><input 
  type="text" 
  name="name"
  required ="required"
  placeholder="Enter item name"
  value={editFormData.name}
  onChange={handleEditFormChange}
  />
  </td>
  <td>
  <input 
  type="text" 
  name="discount_id"
  required ="required"
  placeholder="Enter a discount id"
  value={editFormData.discount_id}
  onChange={handleEditFormChange}
  />
  </td>
  <td>
  <input 
  type="text" 
  name="category_id"
  required ="required"
  placeholder="Enter a category id"
  value={editFormData.category_id}
  onChange={handleEditFormChange}
  
  />
  </td>
  <td>
  <input 
  type="text" 
  name="inventory_id"
  required ="required"
  placeholder="Enter inventory_id"
  value={editFormData.inventory_id}
  onChange={handleEditFormChange}
  />
  
  </td>
  <td>
  <input 
  type="text" 
  name="desc"
  required ="required"
  placeholder="Enter a description"
  value={editFormData.desc}
  onChange={handleEditFormChange}
  />
  </td>
  <td>
  <input 
  type="text"
  name="price"
  required ="required"
  placeholder="Enter price"
  value={editFormData.price}
  onChange={handleEditFormChange}
  />
  </td>
  <td>
  <input 
  type="text" 
  name="sku"
  required ="required"
  placeholder="Enter sku"
  value={editFormData.sku}
  onChange={handleEditFormChange}
  />
  </td>
  <td>
  <input 
  type="text" 
  name="image_url"
  required ="required"
  placeholder="Enter image url"
  value={editFormData.image_url}
  onChange={handleEditFormChange}
  />
  </td>
  <td>
  <input 
  type="text" 
  name="quantity"
  required ="required"
  placeholder="Enter item quantity"
  value={editFormData.quantity}
  onChange={handleEditFormChange}
  />
  </td>
  
  
    </tr>
  )
}

export default EditableRow
import React from 'react'

const EditableRow = ({editFormData, handleEditFormChange}) => {
  return (
    <tr>
  <td>
      <button type='submit'>Save</button>
  </td>
  <td>
  #
  </td>
        <td><input 
  type="text" 
  name="username"
  required ="required"
  placeholder="Enter a username"
  value={editFormData.username}
  onChange={handleEditFormChange}
  />
  </td>
  <td>
  <input 
  type="text" 
  name="first_name"
  required ="required"
  placeholder="Enter first name"
  value={editFormData.first_name}
  onChange={handleEditFormChange}
  />
  </td>
  <td>
  <input 
  type="text" 
  name="last_name"
  required ="required"
  placeholder="Enter last name"
  value={editFormData.last_name}
  onChange={handleEditFormChange}
  
  />
  </td>
  <td>
  <input 
  type="text" 
  name="address"
  required ="required"
  placeholder="Enter address"
  value={editFormData.address}
  onChange={handleEditFormChange}
  />
  
  </td>
  <td>
  <input 
  type="text" 
  name="telephone"
  required ="required"
  placeholder="Enter phone number"
  value={editFormData.telephone}
  onChange={handleEditFormChange}
  />
  </td>
  <td>
  <input 
  type="password" 
  name="password"
  required ="required"
  placeholder="Enter password"
  value={editFormData.password}
  onChange={handleEditFormChange}
  />
  </td>
    </tr>
  )
}

export default EditableRow
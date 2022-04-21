import React from 'react'

const EditRowsAdmins = ({editFormData, handleEditFormChange, handleCancelClick}) => {
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
  name="username"
  required ="required"
  placeholder="Enter a username"
  value={editFormData.username}
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

export default EditRowsAdmins
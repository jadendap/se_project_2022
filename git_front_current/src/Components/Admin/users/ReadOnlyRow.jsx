import React from "react";

const ReadOnlyRow = ({user, handleEditClick, handleDeleteClick}) =>
{
    return(
        <tr>
          <td>
              <button
               type="button"
               onClick={(event) => handleEditClick(event, user)}>
               Edit
            </button>
            <button type="button" onClick={()=> handleDeleteClick(user.id)}>Delete</button>
              </td>
              <th  key={user.id}>{user.id}</th>
              <td >{user.username}</td>
              <td >{user.first_name}</td>
              <td >{user.last_name}</td>
              <td >{user.address}</td>
              <td >{user.telephone}</td>
              <td >{user.password}</td>
              
        </tr>
        
    )
}

export default ReadOnlyRow;
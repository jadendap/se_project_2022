import React from "react";

const ReadOnlyRowsAdmin = ({user, handleEditClick, handleDeleteClick}) =>
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
              <td   key={user.id}>{user.id}</td >
              <td >{user.username}</td>
              <td >{user.password}</td>
              
        </tr>
        
    )
}

export default ReadOnlyRowsAdmin;
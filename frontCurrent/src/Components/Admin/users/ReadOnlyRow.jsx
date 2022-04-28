import React from "react";

const ReadOnlyRow = ({user, handleEditClick, handleDeleteClick}) =>
{
    return(
        <tr>
          <td>
              <button className="editbtn"
               type="button"
               onClick={(event) => handleEditClick(event, user)}>
               Edit
            </button>
            <button className="delbtn" type="button" onClick={()=> handleDeleteClick(user.id)}>Delete</button>
              </td>
              <td  key={user.id}>{user.id}</td>
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
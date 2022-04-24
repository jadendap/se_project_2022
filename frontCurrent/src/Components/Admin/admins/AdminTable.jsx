import React, { useState, Fragment, useEffect } from "react";
import { nanoid } from "nanoid";
import ReadOnlyRow from "./ReadOnlyRowsAdmin";
import EditableRow from "./EditRowsAdmins";
import "../../../Styles/AdminPage.scss"
import { SettingsBackupRestoreSharp } from "@mui/icons-material";

const AdminTable = () => {
  const [users, setUsers] = useState([]);
  const fetchData = async () =>
  {
    const response = await fetch('http://localhost:9000/admins')
    const data = await response.json()
    setUsers(data)
  }
  
  //console.log(users)
  useEffect(() =>
  {
    fetchData()
  }, [])
  const [addFormData, setAddFormData] = useState({
    username:"",
    password:""
  });

  const [editFormData, setEditFormData] = useState({
    username:"",
    password:""
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      username: addFormData.username,
      password: addFormData.password
    };

    const newContacts = [...users, newContact];
    setUsers(newContacts);
    /*fetch(`http://localhost:9000/admins`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newContact),
          }).then(() => {
          console.log(`new item added`);
          //console.log(newContacts);
          });*/
  };


  const handleEditFormSubmit = async (event) => {
    event.preventDefault();

    const editedContact = {
      id:editContactId,
      username: editFormData.username,
      password: editFormData.password
    };

    const newContacts = [...users];

    const index = users.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setUsers(newContacts);
    setEditContactId(null);
    console.log(editedContact)

    //console.log(JSON.stringify(newContacts))
    fetch(`http://localhost:9000/admins/${editContactId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editedContact),
          }).then(() => {
          console.log(`user ${editContactId} was updated `);
          //console.log(newContacts);
          //console.log(users)
          });
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      username: contact.username,
      password: contact.password
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = async (contactId) => {
    const newContacts = [...users];

    const index = users.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setUsers(newContacts);

    await fetch(`http://localhost:9000/admins/${contactId}`, 
    { 
    method: 'DELETE' ,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(users.id),
    }
    );
  };

  return (
    <>
    <h1 className="pageHeading">Welcome to the Dashboard</h1>
    <div className="panel">
      <h2>Admins</h2>
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
      <div class="table-wrapper-scroll-y my-custom-scrollbar">
        <table  class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Actions</th>
              <th scope="col">ID</th>
              <th scope="col">Username</th>
              <th scope="col">Password</th>
            </tr>
          </thead>
          
          <tbody >
            {users && users.map((user) => (
              <Fragment>
                {editContactId === user.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    user={user}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
        </div>
      </form>
      
    </div>
    </div>
    </>
  );
};

export default AdminTable;
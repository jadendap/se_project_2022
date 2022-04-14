import React, { useState, Fragment, useEffect } from "react";

import OrdersRow from "./OrdersRow";

import "../../Styles/AdminPage.scss";
import { SettingsBackupRestoreSharp } from "@mui/icons-material";
import { Tbl } from "./Tbl";

const AdminOrders = () => {
  const fetchData = async () => {
    const response = await fetch("http://localhost:9000/orders");

    const data = await response.json();
    console.log(data);
    const flattenData = data.map(Object.values);
    console.log(flattenData);
    sessionStorage.setItem("orders", JSON.stringify(flattenData));
  };

  //console.log(users)
  useEffect(() => {
    fetchData();
  }, []);
  // const [addFormData, setAddFormData] = useState({
  //   username: "",
  //   firstName: "",
  //   lastName: "",
  //   address: "",
  //   telephone: "",
  //   password: "",
  // });

  // const [editFormData, setEditFormData] = useState({
  //   username: "",
  //   first_name: "",
  //   last_name: "",
  //   address: "",
  //   telephone: "",
  //   password: "",
  // });

  const [editContactId, setEditContactId] = useState(null);

  // const handleAddFormChange = (event) => {
  //   event.preventDefault();

  //   const fieldName = event.target.getAttribute("name");
  //   const fieldValue = event.target.value;

  //   const newFormData = { ...addFormData };
  //   newFormData[fieldName] = fieldValue;

  //   setAddFormData(newFormData);
  // };

  // const handleEditFormChange = (event) => {
  //   event.preventDefault();

  //   const fieldName = event.target.getAttribute("name");
  //   const fieldValue = event.target.value;

  //   const newFormData = { ...editFormData };
  //   newFormData[fieldName] = fieldValue;

  //   setEditFormData(newFormData);
  // };

  // const handleEditFormSubmit = async (event) => {
  //   event.preventDefault();

  //   const editedContact = {
  //     id: editContactId,
  //     username: editFormData.username,
  //     first_name: editFormData.first_name,
  //     last_name: editFormData.last_name,
  //     address: editFormData.address,
  //     telephone: editFormData.telephone,
  //     password: editFormData.password,
  //   };

  //   const newContacts = [...users];

  //   const index = users.findIndex((contact) => contact.id === editContactId);

  //   newContacts[index] = editedContact;

  //   setUsers(newContacts);
  //   setEditContactId(null);
  //   console.log(editedContact);

  //   //console.log(JSON.stringify(newContacts))
  //   fetch(`http://localhost:9000/customers/${editContactId}`, {
  //     method: "PUT",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(editedContact),
  //   }).then(() => {
  //     console.log(`user ${editContactId} was updated `);
  //     //console.log(newContacts);
  //     //console.log(users)
  //   });
  // };

  // const handleEditClick = (event, contact) => {
  //   event.preventDefault();
  //   setEditContactId(contact.id);

  //   const formValues = {
  //     username: contact.username,
  //     first_name: contact.first_name,
  //     last_name: contact.last_name,
  //     address: contact.address,
  //     telephone: contact.telephone,
  //     password: contact.password,
  //   };

  //   setEditFormData(formValues);
  // };

  // const handleCancelClick = () => {
  //   setEditContactId(null);
  // };

  // const handleDeleteClick = (contactId) => {
  //   const newContacts = [...users];

  //   const index = users.findIndex((contact) => contact.id === contactId);

  //   newContacts.splice(index, 1);

  //   setUsers(newContacts);
  // };
  //   const doSomething = async () => {
  //     console.log("hello world");
  //   };
  //   return (
  //     <>
  //       <h1 className="pageHeading">Orders</h1>
  //       <div className="panel">
  //         <h2>All Orders</h2>

  //         <div className="app-container">
  //           <div class="table-wrapper-scroll-y my-custom-scrollbar">
  //             <table id="order_table" class="table table-striped">
  //               <thead>
  //                 <tr>
  //                   <th
  //                     onClick={async () => {
  //                       await doSomething();
  //                     }}
  //                     scope="col"
  //                   >
  //                     Order#
  //                   </th>
  //                   <th scope="col">Customer ID</th>
  //                   <th scope="col">Total</th>
  //                   <th scope="col">Order Date</th>
  //                 </tr>
  //               </thead>

  //               <tbody>
  //                 {users &&
  //                   users.map((user) => (
  //                     <Fragment>
  //                       {editContactId === user.id ? (
  //                         console.log("hello")
  //                       ) : (
  //                         <OrdersRow user={user} />
  //                       )}
  //                     </Fragment>
  //                   ))}
  //               </tbody>
  //             </table>
  //           </div>
  //         </div>
  //       </div>
  //     </>
  //   );
};

export default AdminOrders;

import React, { useState, Fragment, useEffect } from "react";
import { nanoid } from "nanoid";
import ReadOnlyRowsItems from "./ReadOnlyRowsItems";
import EditRowsItems from "./EditRowsItems";
import "../../../Styles/AdminPage.scss"
import { SettingsBackupRestoreSharp } from "@mui/icons-material";

const ModifyItemsTable = () => {
  const [products, setProducts] = useState([]);
  const fetchData = async () =>
  {
    const response = await fetch('http://localhost:9000/products')
    const data = await response.json()
    setProducts(data)
  }
  
  useEffect(() =>
  {
    fetchData()
  }, [])

  const [addFormData, setAddFormData] = useState({
    id:"",
    name: "",
    discount_id: "",
    category_id: "",
    inventory_id:"",
    desc: "",
    sku: "",
    image_url: "",
    price: "",
    quantity: "",
    

  });

  const [editFormData, setEditFormData] = useState({
    id:"",
    name:"",
    discount_id:"",
    category_id:"",
    desc: "",
    sku: "",
    image_url: "",
    category: "",
    price: "",
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
    id: addFormData.id,
    name:addFormData.name,
    discount:addFormData.discount_id,
    category:addFormData.category_id,
    desc: addFormData.desc,
    sku: addFormData.sku,
    url: addFormData.image_url,
    price: addFormData.price
    };

    const newContacts = [...products, newContact];
    setProducts(newContacts);
    //if(newContacts){
    fetch(`http://localhost:9000/additem`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newContact),
          }).then(() => {
          console.log(`new item added`);
          //console.log(newContacts);
          });
      //  }
  };


  const handleEditFormSubmit = async (event) => {
    event.preventDefault();

    const editedContact = {
      id:editContactId,
      name:editFormData.name,
      discount_id:editFormData.discount_id,
      category_id:editFormData.category_id,
      desc: editFormData.desc,
      sku: editFormData.sku,
      image_url: editFormData.image_url,
      category: editFormData.category,
      price: editFormData.price,
    };

    const newContacts = [...products];

    const index = products.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setProducts(newContacts);
    setEditContactId(null);
    console.log(editedContact)

    //console.log(JSON.stringify(newContacts))
    fetch(`http://localhost:9000/products/${editContactId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editedContact),
          }).then(() => {
          console.log(`product ${editContactId} was updated `);
          //console.log(newContacts);
          });
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      name:contact.name,
      discount_id:contact.discount_id,
      category_id:contact.category_id,
      desc: contact.desc,
      sku: contact.sku,
      image_url: contact.image_url,
      category: contact.category,
      price: contact.price,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };


  const handleDeleteClick = async (contactId) => {
    const newContacts = [...products];

    const index = products.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setProducts(newContacts);
    console.log(contactId);
    //console.log(contactId)
    await fetch(`http://localhost:9000/products/${contactId}`, 
    { 
    method: 'DELETE' ,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contactId),
    }
    );
  };

  return (
    <>
    <h1 className="pageHeading">Modify Inventory</h1>
    <div className="panel">
      <h2>Products</h2>
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
      <div class="table-wrapper-scroll-y my-custom-scrollbar">
        <table  class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Actions</th>
              <th scope="col">#</th>
              <th scope="col">Item Name</th>
              <th scope="col">Discount ID</th>
              <th scope="col">Category ID</th>
              <th scope="col">Inventory ID</th>
              <th scope="col" >Description</th>
              <th scope="col">price</th>
              <th scope="col">sku</th>
              <th scope="col">image_url</th>
              <th scope="col">category</th>
            </tr>
          </thead>
          
          <tbody >
            {products && products.map((product) => (
              <Fragment>
                {editContactId === product.id && product.id != null ? (
                  <EditRowsItems
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : product.id != null ? (
                  <ReadOnlyRowsItems
                    product={product}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                ):
                (console.log("error rendering some items"))
              }
              </Fragment>
            ))}
          </tbody>
        </table>
        </div>
      </form>

      <h2>Add a Product</h2>
      
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text" 
          name="name"
          required ="required"
          placeholder="Enter item name"
          onChange={handleAddFormChange}
        />
        <input
          type="text" 
          name="discount_id"
          required ="required"
          placeholder="Enter a discount id"
          onChange={handleAddFormChange}
        />
        <input
          type="text" 
          name="category_id"
          required ="required"
          placeholder="Enter a category id"
          onChange={handleAddFormChange}
        />
        <input
          type="text" 
          name="desc"
          required ="required"
          placeholder="Enter a description"
          onChange={handleAddFormChange}
        />
        <input
           type="text" 
           name="sku"
           required ="required"
           placeholder="Enter sku"
          onChange={handleAddFormChange}
        />
        <input
          type="text" 
          name="image_url"
          required ="required"
          placeholder="Enter image url"
          onChange={handleAddFormChange}
        />
        
        <input
           type="text"
           name="price"
           required ="required"
           placeholder="Enter price"
          onChange={handleAddFormChange}
        />
        <input
          type="text" 
          name="quantity"
          required ="required"
          placeholder="Enter quantity"
          onChange={handleAddFormChange}
        />
        <button type="submit" onClick={() => window.location.reload(false)}>Add</button>
      </form>
    </div>
    </div>
    </>
  );
};

export default ModifyItemsTable;
import React, { useState, Fragment, useEffect } from "react";
import { nanoid } from "nanoid";
import ReadOnlyRowsItems from "./ReadOnlyRowsItems";
import EditRowsItems from "./EditRowsItems";
import "../../../Styles/AdminPage.scss"
import { SettingsBackupRestoreSharp } from "@mui/icons-material";

const ModifyItemsTable = () => {
  const formStyle = {
    position: "relative",
    margin: "auto",
    padding: "10px",
    border: "1px solid black",
    borderRadius: "5px",
    background: "black",
    width: "520px",
    height: "460px",
    display: "block",
    color: "#98c285",
    right: "500px",
    top: "100px"
  };
  const inputStyle = {
    margin: "5px 0 10px 0",
    padding: "5px",
    border: "1px solid #bfbfbf",
    borderRadius: "3px",
    boxSizing: "border-box",
    width: "100%",
  };
  const submitStyle = {
    position: "relative",
    margin: "20px 0 0 0",
    padding: "0px 0px",
    border: "1px solid #efffff",
    borderRadius: "3px",
    background: "#98c285",
    width: "30%",
    height: "8%",
    fontSize: "15px",
    color: "black",
    left: "160px",
    top: "-17px",
    display: "block",
  };
  const [products, setProducts] = useState([]);
  
  const fetchData = async () =>
  {
    const response = await fetch('http://localhost:9000/products')
    const data = await response.json()
    setProducts(data)
  }
  const [cart, setCart] = useState([]);
  const fetchCartitems = async () =>
  {
    const response = await fetch('http://localhost:9000/cart')
    const cart_data = await response.json()
    setCart(cart_data)
  }  
  const [inv, setInv] = useState([]);
  const fetchinventory = async () =>
  {
    const response = await fetch('http://localhost:9000/inventory')
    const inventory_data = await response.json()
    setInv(inventory_data)

  } 
  useEffect(() =>
  {
    fetchData()
    fetchCartitems()
    fetchinventory()
  }, [])

  /*const [cart, setCart] = useState({
    session_id: "",
    product_id: "",
  })*/

  const [addFormData, setAddFormData] = useState({
    id:"",
    name: "",
    discount_id: "",
    category_id: "",
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
    inventory_id: "",
    desc: "",
    sku: "",
    image_url: "",
    category: "",
    price: "",
    quantity:"",
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
    price: addFormData.price,
    quantity: addFormData.quantity
    
    };

    const newInventoryItem ={
      quantity: addFormData.quantity
    }

    const newContacts = [...products, newContact];
    setProducts(newContacts);
    window.location.reload(false)
    fetch(`http://localhost:9000/additem`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newContact),
          }).then(() => {
          console.log(`new item added`);
          //console.log(newContacts);
          });
    fetch(`http://localhost:9000/inventory`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newInventoryItem),
            }).then(() => {
            console.log(`item added to inventory`);
            //console.log(newContacts);
            });
    
  };


  const handleEditFormSubmit = async (event) => {
    event.preventDefault();

    const editedContact = {
      id:editContactId,
      name:editFormData.name,
      discount_id:editFormData.discount_id,
      category_id:editFormData.category_id,
      inventory_id: editFormData.inventory_id,
      desc: editFormData.desc,
      sku: editFormData.sku,
      image_url: editFormData.image_url,
      category: editFormData.category,
      price: editFormData.price,
      quantity: editFormData.quantity
    };
    const newInventoryItem ={
      id: editFormData.inventory_id,
      quantity: editFormData.quantity
    }

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
          fetch(`http://localhost:9000/inventory`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newInventoryItem),
            }).then(() => {
            console.log(`item added to inventory`);
            //console.log(newContacts);
            });
            window.location.reload(false)
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);
    let quan;
    for(let j =0; j < inv.length; j++)
        {
        if(inv[j].id == contact.inventory_id)
        {
          
          quan = inv[j].quantity
        }
      }
    const userInventory = 
    {
      id: contact.inventory_id,
      quantity: quan
    }

    const formValues = {
      name:contact.name,
      discount_id:contact.discount_id,
      category_id:contact.category_id,
      inventory_id: contact.inventory_id,
      desc: contact.desc,
      sku: contact.sku,
      image_url: contact.image_url,
      category: contact.category,
      price: contact.price,
      quantity: userInventory.quantity
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };


  const handleDeleteClick = async (contactId) => {
    const newContacts = [...products];
    //const newCart = [...cart];
    let invId;
    let quan;
    const index = products.findIndex((contact) => contact.id === contactId);
    
    
    //const invindex = products.findIndex((contact) => contact.inventory_id === invId);
    let cart_session;
    newContacts.splice(index, 1);
    //newCart.splice(index, 1);

    setProducts(newContacts);
    //setCart(newCart);
    //console.log(newCart);
   // console.log(newContacts)
   let userCart = {
    session_id: cart_session,
    product_id: contactId,
  }
  for(let i = 0; i < products.length; i++)
    {
      if(products[i].id == contactId)
      {
        //console.log(contactId);
        //console.log(products[i].name);
        invId = products[i].inventory_id;
        //console.log(inv.id)
        //console.log(invId)
        for(let j =0; j < inv.length; j++)
        {
        if(inv[j].id == invId)
        {
          
          quan = inv[j].quantity
        }
      }
        //quan = inv[i].quantity;
      }
    }
    //console.log(quan)
 
  
    
    let cart_arr = [];
    //all carts with the product in them
    let usercart_arr = [];
    for(let i=0; i< cart.length; i++)
    {
      cart_arr.push(cart[i].id)
    }
    for(let i =0; i < cart_arr.length; i++)
    {
      if(cart[i].product_id == contactId)
      {
        cart_session = cart[i].session_id;
       
      
      
      userCart = {
        id: cart[i].id,
        session_id: cart_session,
        product_id: contactId,
      }
      if(cart_session != null){
        usercart_arr.push(userCart);
        }
    }
      
    }
    let userInventory = 
    {
      id: invId,
      quantity: quan
    }
    //console.log(usercart_arr);
    
    console.log(userCart)
    //console.log(contactId)
    //console.log(invId);
    console.log(userInventory)
    //console.log(inv)

    //console.log(userInventory)

   
    //console.log(newCart);
    //console.log(usercart_arr);

    
   if(usercart_arr.length > 0 )
    {
    for(let i = 0; i< usercart_arr.length; i++){
      if(usercart_arr[i].session_id != null){
   await fetch(`http://localhost:9000/deleteCartItem/`, 
    { 
    method: 'DELETE' ,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(usercart_arr[i]),
    
    }
    
    );
  }
    console.log(`product with session_id of ${cart_session} was deleted from the cart `)
  }
 
}
await fetch(`http://localhost:9000/products/${contactId}`, 
{ 
method: 'DELETE' ,
headers: { "Content-Type": "application/json" },
body: JSON.stringify(contactId),
}


).then(
await fetch(`http://localhost:9000/inventory/`, 
{ 
method: 'DELETE' ,
headers: { "Content-Type": "application/json" },
body: JSON.stringify(userInventory),
}

));
//console.log(contactId)


  
    
    
   
    //console.log(products.inventory_id)
  };

  return (
    <>
    <h1 className="pageHeading">Modify Inventory</h1>
    <div className="panel">
      
    <div className="app-container">
    <div className="product_table">
    <h2>Products</h2>
      <form onSubmit={handleEditFormSubmit}>
      <div class="table-responsive">
        <table  class="tableFixHead table-striped">
          <thead>
            <tr>
              <th class="col-6">Actions</th>
              <th class="col-6">Product ID</th>
              <th class="col">Item Name</th>
              <th class="col">Discount ID</th>
              <th class="col">Category ID</th>
              <th class="col">Inventory ID</th>
              <th class="col" >Description</th>
              <th class="col">price</th>
              <th class="col">sku</th>
              <th class="col">image_url</th>
              <th class="col">quantity</th>
            </tr>
          </thead>
          
          <tbody >
            {inv && products && products.map((product,inventory)=> (
              <Fragment>
                {editContactId === product.id ? (
                  <EditRowsItems
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRowsItems
                    
                    product={product}
                    inventory={inv}
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

      
      <div className="product_form">
      
      <form  style={formStyle} onSubmit={handleAddFormSubmit}>
      <h2 color="red">Add a Product</h2>
        <input style={inputStyle}
          type="text" 
          name="name"
          required ="required"
          placeholder="Enter item name"
          onChange={handleAddFormChange}
        />
        <input style={inputStyle}
          type="text" 
          name="discount_id"
          required ="required"
          placeholder="Enter a discount id"
          onChange={handleAddFormChange}
        />
        <input style={inputStyle}
          type="text" 
          name="category_id"
          required ="required"
          placeholder="Enter a category id"
          onChange={handleAddFormChange}
        />
        <input style={inputStyle}
          type="text" 
          name="desc"
          required ="required"
          placeholder="Enter a description"
          onChange={handleAddFormChange}
        />
        <input style={inputStyle}
           type="text" 
           name="sku"
           required ="required"
           placeholder="Enter sku"
          onChange={handleAddFormChange}
        />
        <input style={inputStyle}
          type="text" 
          name="image_url"
          required ="required"
          placeholder="Enter image url"
          onChange={handleAddFormChange}
        />
        
        <input style={inputStyle}
           type="text"
           name="price"
           required ="required"
           placeholder="Enter price"
          onChange={handleAddFormChange}
        />
        <input style={inputStyle}
          type="text" 
          name="quantity"
          required ="required"
          placeholder="Enter quantity"
          onChange={handleAddFormChange}
        />
        <button style={submitStyle} type="submit" >Add</button>
      </form>
      </div>
    </div>
    </div>
    </>
  );
};

export default ModifyItemsTable;
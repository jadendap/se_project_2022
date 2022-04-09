import React from "react";
import AdminNavbar from "../../Components/Admin/AdminNav";
const appStyle = {
  height: "700px",
  display: "flex",
};

const formStyle = {
  position: "relative",
  margin: "auto",
  padding: "10px",
  border: "1px solid black",
  borderRadius: "5px",
  background: "black",
  width: "520px",
  height: "720px",
  display: "block",
  
  right: "500px",
  top: "100px"
};

const labelStyle = {
  margin: "10px 0 5px 0",
  fontFamily: "Arial, Helvetica, sans-serif",
  fontSize: "15px",
  color: "white",
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
  padding: "10px 10px",
  border: "1px solid #efffff",
  borderRadius: "3px",
  background: "#98c285",
  width: "50%",
  fontSize: "15px",
  color: "black",
  left: "110px",
  top: "30px",
  display: "block",
};

const Field = React.forwardRef(({ label, type }, ref) => {
  return (
    <div>
      <label style={labelStyle}>{label}</label>
      <input ref={ref} type={type} style={inputStyle} />
    </div>
  );
});

const Form = ({ onSubmit }) => {
    const itemnameRef = React.useRef();
    const itemdescRef = React.useRef();
    const itemimageRef = React.useRef();
    const itemcategoryRef = React.useRef();
    const itempriceRef = React.useRef();
    
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
        itemname: itemnameRef.current.value,
        itemdesc: itemdescRef.current.value,
        itemimage: itemimageRef.current.value,
        itemcategory: itemcategoryRef.current.value,
        itemprice: itempriceRef.current.value,
    };
    onSubmit(data);
    
  };
  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <Field ref={itemnameRef} label="Please enter item name" type="text" />
      <Field ref={itemcategoryRef} label="Modify Category:" type="text" />
      <Field ref={itemdescRef} label="Modify description:" type="text" />
      <Field ref={itempriceRef} label="Modify price:" type="text" />
      <Field ref={itemimageRef} label="Modify image:" type="text" />
      <div>
        <button style={submitStyle}type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
//handle submit
const handleSubmit = async (data) => {
    const url = "http://localhost:9000/products";
    const response = fetch(url)
    const item_data = await (await response).json();
    const json = data;

      

      let itemname_array = [];
      let itemcategory_array = [];
      let itemdesc_array = [];
      let itemprice_array = [];
      let itemimage_array = [];
      let message = "";
      let product_id = "";
      for(let i = 0; i < item_data.length; i++)
      {
        itemname_array.push(item_data[i].name)
        itemcategory_array.push(item_data[i].category)
        itemdesc_array.push(item_data[i].desc)
        itemprice_array.push(item_data[i].price)
        itemimage_array.push(item_data[i].image_url)
        //console.log(item_data[i].name)
        //console.log(itemname_array[i])

      }
      for(let i = 0; i < itemname_array.length; i++){
        message = ""
        //check if username is entered
        if(json.itemname.length <= 0)
        {
          message = "please enter an item name";
          break;
        }
        //check if username exists
        if(itemname_array[i] != json.itemname)
        {
          message = "item not found, please try again";
        }
        //if user is found change values only if they are not null
        if(itemname_array[i] == json.itemname)
        {
            message=""
            console.log("found")
        if(json.itemcategory.length <= 0)
        {
          json.itemcategory = item_data[i].category;
        }
        if(json.itemdesc.length <= 0)
        {
          json.itemdesc = item_data[i].desc;
        }
        if(json.itemprice.length <= 0)
        {
          json.itemprice = item_data[i].price;
        }
        if(json.itemimage.length <= 0)
        {
          json.itemimage = item_data[i].image_url;
        }
        product_id = item_data[i].id
        console.log(product_id)
        //console.log(json.id)
        fetch(`http://localhost:9000/products`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
          }).then(() => {
          console.log(`product ${product_id} was updated `);
          console.log(data);
          });
          break;
    }
        }
        if(product_id== undefined)
        {
            console.log("product not found");
        }
        
      if( message != "")
        {
          alert(message)
        }
      
  };
// Usage example:

const AdminAddItemPage = () => {
  return (
    <div style={appStyle}>
      <AdminNavbar/>
      <h1>Welcome to the Modify Items Page</h1>
      <Form onSubmit={handleSubmit} />
      
    </div>
  );
};

export default AdminAddItemPage;

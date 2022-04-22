import React from "react";
import AdminNavbar from "../../Components/Admin/AdminNav";
const appStyle = {
  height: "700px",
  display: "flex",
};

const formStyle = {
  position: "relative",
  display:"flex",
  margin: "auto",
  padding: "10px",
  border: "1px solid black",
  borderRadius: "5px",
  background: "black",
  width: "520px",
  height: "720px",
  display: "block",
  
  right: "500px",
  top: "50px"
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
  const product_name = React.useRef();
  const discount = React.useRef();
  const category = React.useRef();
  const inventory = React.useRef();
  const desc = React.useRef();
  const sku = React.useRef();
  const image_url = React.useRef();
  const price = React.useRef();
  const quantity = React.useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      product_name: product_name.current.value,
      discount: discount.current.value,
      category: category.current.value,
      desc: desc.current.value,
      sku: sku.current.value,
      url: image_url.current.value,
      price: price.current.value,
      quantity: quantity.current.value,
    };
    fetch("http://localhost:9000/additem", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(() => {
      console.log("new item added");
    });
    //onSubmit(data);
  };
  return (
    <div>
        <button style={submitStyle} type="submit">
          Submit
        </button>
      
    <form style={formStyle} onSubmit={handleSubmit}>
      <Field ref={product_name} label="Product Name:" type="text" />
      <Field ref={discount} label="Discount id:" type="text" />
      <Field ref={category} label="Category id:" type="text" />
      <Field ref={desc} label="Description:" type="text" />
      <Field ref={sku} label="Sku:" type="text" />
      <Field ref={image_url} label="Image URL:" type="text" />
      <Field ref={price} label="Price:" type="text" />
      <Field ref={quantity} label="Quantity:" type="text" />
      
    </form>
    </div>
  );
};

// Usage example:

const AdminAddItemPage = () => {
  const handleSubmit = (data) => {
    const json = JSON.stringify(data, null, 4);
    console.clear();
    console.log(json);
  };
  return (
    <div style={appStyle}>
      <AdminNavbar/>
      <h1>Welcome To add item page</h1>
      <Form onSubmit={handleSubmit} />
    </div>
  );
};

export default AdminAddItemPage;

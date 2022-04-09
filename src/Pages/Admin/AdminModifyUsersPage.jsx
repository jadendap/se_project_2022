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
    const usernameRef = React.useRef();
    const passwordRef = React.useRef();
    const addressRef = React.useRef();
    const firstRef = React.useRef();
    const lastRef = React.useRef();
    const telRef = React.useRef();
    
//const handleClick = () => {
  //};
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
        first_name: firstRef.current.value,
        last_name: lastRef.current.value,
        address: addressRef.current.value,
        telephone: telRef.current.value,
    };
   // fetch("http://localhost:9000/register", {
    //  method: "POST",
      //headers: { "Content-Type": "application/json" },
      //body: JSON.stringify(data),
    //}).then(() => {
      //console.log("new item added");
    //});
    onSubmit(data);
    
  };
  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <Field ref={usernameRef} label="Enter User's username:" type="text" />
      <Field ref={passwordRef} label="Change Pasword:" type="password" />
      <Field ref={addressRef} label="Change Shipping Address:" type="text" />
      <Field ref={firstRef} label="Change First Name:" type="text" />
      <Field ref={lastRef} label="Change Last Name:" type="text" />
      <Field ref={telRef} label="Change Phone Number:" type="text" />
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
    const url = "http://localhost:9000/customers";
    const response = fetch(url)
    const customer_data = await (await response).json();
      const json = data;

      

      let username_array = [];
      let password_array = [];
      let firstname_array = [];
      let lastname_array = [];
      let address_array = [];
      let telephone_array = [];
      let message = "";
      let user_id = "";
        //console.log(data);
        //console.log(customer_data);
      for(let i = 0; i < customer_data.length; i++)
      {
        username_array.push(customer_data[i].username)
        password_array.push(customer_data[i].password)
        firstname_array.push(customer_data[i].firstName)
        lastname_array.push(customer_data[i].lastName)
        address_array.push(customer_data[i].address)
        telephone_array.push(customer_data[i].telephone)
        //console.log(customer_data[i].username)

      }
      for(let i = 0; i < username_array.length; i++){
        
        //check if username is entered
        if(json.username.length <= 0)
        {
          message = "please enter a username";
          break;
        }
        //check if username exists
        else if(username_array[i] != json.username)
        {
          message = "username not found, please try again";
          //login_redirect();
          //break;
        }
        //if user is found
        if(username_array[i] == json.username)
        {
            //console.log(data);
            //console.log(customer_data[i]);
            
            message=""
            //console.log(customer_data[i].firstName)
        //check if password is long enough
        if(json.password.length <= 0)
        {
          json.password = password_array[i];
        }
        //check if address is entered
        if(json.address.length <= 0)
        {
          json.address = address_array[i]
        }
        if(json.firstName.length <= 0)
        {
            json.firstName = customer_data[i].first_name
        }
        if(json.lastName.length <= 0)
        {
            json.lastName = customer_data[i].last_name
        }
        if(json.telephone.length <= 0)
        {   
            json.telephone = telephone_array[i]
        }
        user_id = customer_data[i].id
        fetch(`http://localhost:9000/customers`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
          }).then(() => {
          console.log(`user ${customer_data[i].id} was updated `);
          console.log(data);
          });
        //console.log("found");
        //console.log(json)
        
    }
       // else if(username_array[i] == json.username)
        //{
            
         // console.log("found");
          /*message =""
          fetch(`http://localhost:9000/customers/${json.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
          }).then(() => {
          console.log(`user ${json.id} was updated `);
          console.log(data);
          });
          //home_redirect();
          break;*/
        }
        if(user_id== undefined)
        {
          console.log("user not found");
        }
        //console.log(username_array[i]);
        //console.log(username_array[i], "-", json.username);
        
        
      
      //}
      if( message != "")
        {
          //alert(message)
        }
      
  };
// Usage example:

const AdminAddItemPage = () => {
  //const handleSubmit = (data) => {
   // const json = JSON.stringify(data, null, 4);
    //console.clear();
    //console.log(json);
  //};
  return (
    <div style={appStyle}>
      <AdminNavbar/>
      <h1>Welcome to the Modify Users Page</h1>
      <Form onSubmit={handleSubmit} />
      
    </div>
  );
};

export default AdminAddItemPage;
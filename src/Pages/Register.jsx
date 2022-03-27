import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
const appStyle = {
    height: '700px',
    display: 'flex',
};

const formStyle = {
    margin: 'auto',
    padding: '10px',
    border: '1px solid black',
    borderRadius: '5px',
    background: 'black',
    width: '520px',
    height: '500px',
    display: 'block',

};

const labelStyle = {
    margin: '10px 0 5px 0',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '15px',
    color: 'white'
};

const inputStyle = {
    margin: '5px 0 10px 0',
    padding: '5px', 
    border: '1px solid #bfbfbf',
    borderRadius: '3px',
    boxSizing: 'border-box',
    width: '100%'
};

const submitStyle = {
    position: 'relative',
    margin: '20px 0 0 0',
    padding: '10px 10px',
    border: '1px solid #efffff',
    borderRadius: '3px',
    background: '#98c285',
    width: '50%', 
    fontSize: '15px',
    color: 'black',
    left: '110px',
    top: '30px',
    display: 'block'
};

const Field = React.forwardRef(({label, type}, ref) => {
    return (
      <div>
        <label style={labelStyle} >{label}</label>
        <input ref={ref} type={type} style={inputStyle} />
      </div>
    );
});

const Form = ({onSubmit}) => {
  const [inputValue, setInputValue] = useState("");
  
    const usernameRef = React.useRef(null);
    const passwordRef = React.useRef(null);
    const firstnameRef = React.useRef(null);
    const lastnameRef = React.useRef(null);
    //usernameRef = " ";
    //passwordRef = " ";
    const handleSubmit = e => {
      
        e.preventDefault();
        const data = {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
            firstname: firstnameRef.current.value,
            lastname: lastnameRef.current.value
        };
        //do not remove
       onSubmit(data);
    };
    
    return (
      
      <form style={formStyle} onSubmit={handleSubmit} >
        
        <Field  ref={firstnameRef} className = "firstname" label="First Name:" type="text"  
        />
        <Field  ref={lastnameRef} label="Last Name:" type="text" />
        <Field  label="Address:" type="text" />
        <Field ref={usernameRef} label="Username:" type="text" />
        <Field ref={passwordRef} label="Pasword:" type="password" />
        <div>
          <button style={submitStyle} type="submit">Submit</button>
        </div>
      </form>
    );
};

// Usage example:

const Register = () => {
  const navigate = useNavigate();

  const redirect = () => {
   navigate('/');
  }
  
    const handleSubmit = async (data) => {
      const url = "http://localhost:9000/customers";
      const response = fetch(url)
      const customer_data = await (await response).json();
        const json = data;
        

        let username_array = [];

        for(let i = 0; i < customer_data.length; i++)
        {
          username_array.push(customer_data[i].username)
          console.log(customer_data[i].username);

        }
        for(let i = 0; i < username_array.length; i++){
          
          
          if(username_array[i] != json.username && json.firstname.length <= 0)
          {
            alert("please enter a first name");
          }
          else if(username_array[i] != json.username && json.lastname.length <= 0)
          {
            alert("please enter a last name");
          }
          else if(username_array[i] != json.username && json.username.length <= 0)
          {
            alert("please enter a username");
          }
          else if(username_array[i] == json.username)
          {
            alert("user found please login or try a different username");
          }
          else if(username_array[i] != json.username && json.password.length < 10)
          {
            alert("password too short, please try again");
          }
          else if(username_array[i] != json.username && json.password.length > 10)
          {
            redirect();
          }
        
        
        }
    };
    return (
      <div style={appStyle}>
        <Form onSubmit={handleSubmit} />
      </div>
    );
};

export default Register;
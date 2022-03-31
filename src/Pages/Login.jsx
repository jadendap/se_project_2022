import React from 'react';
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
    height: '300px',
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
    margin: '10px 0 0 0',
    padding: '7px 10px',
    border: '1px solid #efffff',
    borderRadius: '3px',
    background: '#98c285',
    width: '100%', 
    fontSize: '15px',
    color: 'black',
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
  
  
    const usernameRef = React.useRef();
    const passwordRef = React.useRef();
    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            username: usernameRef.current.value,
            password: passwordRef.current.value
        };
        onSubmit(data);
    };
    return (
      <form style={formStyle} onSubmit={handleSubmit} >
        <Field ref={usernameRef} label="Username:" type="text" />
        <Field ref={passwordRef} label="Password:" type="password" />
        <div>
          <button  style={submitStyle} type="submit">Submit</button>
        </div>
      </form>
    );
};

// Usage example:

const Login = () => {
 
  const navigate = useNavigate();

  const redirect = () => {
   navigate('/');
  }
        //console.log(data)
    const handleSubmit = async (data) => {
      const url = "http://localhost:9000/register";
      const response = fetch(url)
      const customer_data = await (await response).json();
        const json = data;
        console.clear();
        //array for usernames pulled from database
        let username_array = [];

        //array for passwords pulled from the database
        let password_array = [];

        let message = "";

        //loops through the customer data
        for(let i = 0; i < customer_data.length; i++)
        {
          username_array.push(customer_data[i].username)
          password_array.push(customer_data[i].password)

        }
        //loops through the array of usernames
        for(let i = 0; i < username_array.length; i++){
        if(json.username.length <= 0)
        {
          message = "please insert your username";
          break;
        }
        else if(json.password.length <= 0)
        {
          message = "please insert your password";
          break;
        }
        else if(username_array[i] == json.username && password_array[i] != json.password)
        {
          message = "user found but password incorrect";
          break;
        }
        else if(username_array[i] != json.username && password_array[i] != json.password)
        {
          message = "username and password incorrect, please try again";
          break;
          
        }
        else if(username_array[i] == json.username && password_array[i] == json.password)
        {
          redirect();
          break;
        }
      
       }
       if( message != "")
       {
         alert(message)
       }
    };
    return (
      <div style={appStyle}>
        <Form onSubmit={handleSubmit} />
      </div>
    );
};

export default Login; 
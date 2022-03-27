import React from 'react';
import ReactDOM from 'react-dom';
  
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
  
    const usernameRef = React.useRef();
    const passwordRef = React.useRef();
    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            username: usernameRef.current.value,
            password: passwordRef.current.value
        };
        /*fetch('http://localhost:9000/customers', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    }).then(() => {
      console.log('new blog added');
    })*/
       //onSubmit(data);
    };
    return (
      <form style={formStyle} onSubmit={handleSubmit} >
        <Field  className = "firstname" label="First Name:" type="text" />
        <Field  label="Last Name:" type="text" />
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
    const handleSubmit = data => {
        const json = JSON.stringify(data, null, 4);
        console.clear();
        console.log(json);
    };
    return (
      <div style={appStyle}>
        <Form onSubmit={handleSubmit} />
      </div>
    );
};

export default Register;
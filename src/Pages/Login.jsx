import React from "react";

import AdminButton from "../Components/Admin/AdminButton"; //added -michael
const appStyle = {
  height: "700px",
  display: "flex",
};

const formStyle = {
  margin: "auto",
  padding: "10px",
  border: "1px solid black",
  borderRadius: "5px",
  background: "black",
  width: "520px",
  height: "300px",
  display: "block",
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
  margin: "10px 0 0 0",
  padding: "7px 10px",
  border: "1px solid #efffff",
  borderRadius: "3px",
  background: "#98c285",
  width: "100%",
  fontSize: "15px",
  color: "black",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    const response = await fetch("http://localhost:9000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (response.status === 404) {
      alert("customer not found");
      console.log("customer not found");
      //window.location.href = "http://localhost:3000/Login";
    } else if (response.status === 401) {
      alert("bad password");
      console.log("bad password");
      //window.location.href = "http://localhost:3000/Login";
    } else {
      const responseJson = await response.json();
      const customerSessionId = responseJson.sessionId;
      console.log(customerSessionId);
      //window.location.href = "http://localhost:3000/Desktop";
    }
  };
  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <Field ref={usernameRef} label="Username:" type="text" />
      <Field ref={passwordRef} label="Pasword:" type="password" />
      <AdminButton />

      <div>
        <button style={submitStyle} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

// Usage example:

const Login = () => {
  const handleSubmit = (data) => {
    const json = JSON.stringify(data, null, 4);

    console.log(json);
  };
  return (
    <div style={appStyle}>
      <Form onSubmit={handleSubmit} />
    </div>
  );
};

export default Login;

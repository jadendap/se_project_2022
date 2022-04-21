import React from "react";

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
  border: "1px black",
  borderRadius: "3px",
  background: "#98c285",
  width: "100%",
  fontSize: "15px",
  color: "white",
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
    const response = await fetch("http://localhost:9000/adminlogin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    console.log(response.status);
    if (response.status === 200) {
      window.location.href = "http://localhost:3000/AdminPage";
    }
    const responseJson = await response.json();
    console.log(responseJson);
  };
  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <Field ref={usernameRef} label="Admin Name:" type="text" />
      <Field ref={passwordRef} label="Pasword:" type="password" />
      <div>
        <button style={submitStyle} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

// Usage example:

const AdminLogin = () => {
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

export default AdminLogin;

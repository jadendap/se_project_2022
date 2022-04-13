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
  width: "400px",
  height: "400px",
  display: "block",
  top: "10px",
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
  top: "20px",
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
  const d_name = React.useRef();
  const d_desc = React.useRef();
  const d_percent = React.useRef();
  const d_active = React.useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      discount_name: d_name.current.value,
      discount_desc: d_desc.current.value,
      percent: d_percent.current.value,
      active: d_active.current.value,
    };
    fetch("http://localhost:9000/adddiscount", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(() => {
      console.log("new discount added");
    });
    //onSubmit(data);
  };
  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <Field ref={d_name} label="Discount Name:" type="text" />
      <Field ref={d_desc} label="Discount Description:" type="text" />
      <Field ref={d_percent} label="Discount percent:" type="text" />
      <Field ref={d_active} label="Active:" type="text" />
      <div>
        <button style={submitStyle} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

// Usage example:

const AdminDiscountsPage = () => {
  const handleSubmit = (data) => {
    const json = JSON.stringify(data, null, 4);
    console.clear();
    console.log(json);
  };
  return (
    <div style={appStyle}>
      <h1 >Welcome To add discount page</h1>
      <Form onSubmit={handleSubmit} />
    </div>
  );
};

export default AdminDiscountsPage;

const submitStyle = {
  margin: "10px 0 0 0",
  padding: "7px 10px",
  border: "1px solid #efffff",
  borderRadius: "3px",
  background: "#98c285",
  width: "20%",
  fontSize: "15px",
  color: "black",
  display: "block",
};
function changeBackGround(e) {
  e.target.style.background = "#CD7F32";
  e.target.style.color = "white";
}
function changeBackGroundOut(e) {
  e.target.style.background = "#98c285";
  e.target.style.color = "black";
}

const setSales = async () => {
  const response = await fetch("http://localhost:9000/customers");
  const responseJson = await response.json();
  console.log(responseJson);
};

// Demo is react component that renders a button when clicked calls and awaits the fetchCustomers async function
const AdminSales = () => (
  <>
    <button
      style={submitStyle}
      type="submit"
      //onClick={routeChange}
      onMouseOver={changeBackGround}
      onMouseOut={changeBackGroundOut}
    >
      Set Sale Items
    </button>
  </>
);
export default AdminSales;

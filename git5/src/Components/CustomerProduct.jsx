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

const addProduct = async () => {
  const productJson = JSON.parse(sessionStorage.getItem("products"));
  const data = {
    sessionId: parseInt(sessionStorage.getItem("sessionId")),
    productId: productJson[5].id,
  };
  console.log(JSON.stringify(data));
  const response = await fetch("http://localhost:9000/customerproduct", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const responseJson = await response.json();
  console.log(responseJson);
};
console.log(sessionStorage.getItem("sessionId"));

const CustomerProduct = () => (
  <>
    <button
      style={submitStyle}
      type="submit"
      onClick={addProduct}
      onMouseOver={changeBackGround}
      onMouseOut={changeBackGroundOut}
    >
      Add to cart
    </button>
  </>
);
export default CustomerProduct;

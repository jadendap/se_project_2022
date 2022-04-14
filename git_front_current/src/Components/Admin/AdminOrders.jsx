// fetchCustomers uses native javascript function fetch to reach backend server and get response.
// we use native javasctip function json() to parse response and make it json array
// we then log that json array to browser console with native javascript module/function console.log()
import "../../Styles/AdminPage.scss";
const AdminOrders = async () => {
  const response = await fetch("http://localhost:9000/orders");

  const data = await response.json();
  const flattenData = data.map(Object.values);
  sessionStorage.setItem("orders", JSON.stringify(flattenData));
  const x = JSON.parse(sessionStorage.orders);
  return x;
};

export default AdminOrders;

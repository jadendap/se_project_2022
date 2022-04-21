import React, { Component } from "react";
import { Tbl } from "../../Components/Admin/Tbl";
import AdminOrders from "../../Components/Admin/AdminOrders";

const fetchData = async () => {
  const response = await fetch("http://localhost:9000/orders");

  const data = await response.json();
  const flattenData = data.map(Object.values);
  sessionStorage.setItem("orders", JSON.stringify(flattenData));
};
fetchData();
class AdminOrdersPage extends Component {
  render() {
    return (
      <>
        <Tbl data={JSON.parse(sessionStorage.orders)}></Tbl>
      </>
    );
  }
}
export default AdminOrdersPage;

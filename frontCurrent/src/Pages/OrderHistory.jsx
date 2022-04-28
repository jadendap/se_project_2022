import { Link, useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import React, { useState, useEffect } from "react";

const OrderHistory = () => {
  const [orders, setOrderHistory] = useState([]);
  const getOrderHistory = async (history_id) => {
    const keyword = sessionStorage.sessionId;

    if (!keyword) {
      alert("Please sign in to view orders");
      window.location.href = "http://localhost:3000/Login";
      return;
    }
    console.log(keyword);
    const url = "http://localhost:9000/orders/" + history_id;

    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    setOrderHistory(responseJson);
    return responseJson;
  };
  useEffect(() => {
    getOrderHistory(sessionStorage.customerId);
  }, []);
  return (
    <div>
      <h1>Orders</h1>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>USER</th>
            <th>DATE</th>
            <th>TOTAL</th>
            <th>Status</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer_id}</td>
              <td>{order.order_date.split("T")[0]}</td>
              <td>{order.total}</td>
              <td>{order.status}</td>
              <td>
                <button type="button" variant="light">
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default OrderHistory;

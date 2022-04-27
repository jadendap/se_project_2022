import { Link, useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import React, { useState, useEffect } from "react";

export default function OrderHistory() {
const [orders, setOrderHistory] = useState([]);
    const getOrderHistory = async () => {
                    try{
                    const keyword = sessionStorage.sessionId;
                    if (!keyword) {
                        alert("Please sign in to view orders");
                        window.location.href = "http://localhost:3000/Login";
                        return;
                    }
                    console.log(keyword);
                    const url = `http://localhost:9000/orders/3`;

                    const response = await fetch(url, {
                        method: "GET",
                    });
                    const responseJson = await response.json();
                    setOrderHistory(responseJson);
                    return responseJson;
                    }catch (error) {
                      console.log("error", error);
                     }
                     };
useEffect(() => {
   getOrderHistory();
    }, []);
  return (
    <div className='content-container'>
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
                <td>{order.order_date}</td>
                <td>{order.total}</td>
                <td>
                  {order.status}
                </td>
                <td>
                  <button
                    type="button"
                    variant="light"
                  >
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
}
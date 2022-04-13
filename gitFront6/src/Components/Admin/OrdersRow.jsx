import React from "react";

const OrdersRow = ({ user, handleEditClick }) => {
  //console.log(user.order_date.split("T")[0]);
  console.log(user);
  return (
    <tr>
      {/* <td>
              <button
               type="button"
               onClick={(event) => handleEditClick(event, user)}>
               Edit
            </button>
              </td> */}
      <th key={user.id}>{user.id}</th>
      <td>{user.customer_id}</td>
      <td>{user.total}</td>
      <td>{user.order_date.split("T")[0]}</td>
    </tr>
  );
};

export default OrdersRow;

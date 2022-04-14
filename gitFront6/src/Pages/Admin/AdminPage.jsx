import React, { Component, useEffect, useState } from "react";
import AdminNavbar from "../../Components/Admin/AdminNav";
import "../../Styles/AdminPage.scss";
import ModifyUsersTable from "../../Components/Admin/ModifyUsersTable";
import "../../Styles/index.css";
import AdminOrders from "../../Components/Admin/AdminOrders";

//console.log(responseJson);
//return responseJson;
//};
function AdminPage() {
  return (
    <>
      <AdminNavbar />
      <ModifyUsersTable />
    </>
  );
}
export default AdminPage;

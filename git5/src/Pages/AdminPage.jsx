import React from "react";
import AdminModifyItems from "../Components/AdminModifyItems";
import AdminDiscounts from "../Components/AdminDiscounts";
import AdminModifyUsers from "../Components/AdminModifyUsers";
import AdminSales from "../Components/AdminSales";
import AdminOrders from "../Components/AdminOrders";
import AdminAddItem from "../Components/AdminAddItem";
function AdminPage() {
  return (
    <section>
      <div class="container-fluid">
        <h1 class="mt-5">Welcome</h1>

        <p>This site is for Administrative Use Only</p>
        <AdminModifyItems />
        <AdminDiscounts />
        <AdminModifyUsers />
        <AdminSales />
        <AdminOrders />
        <AdminAddItem />
      </div>
    </section>
  );
}

export default AdminPage;

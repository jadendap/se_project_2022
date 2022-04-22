import "../../../node_modules/datatables.net-dt/css/jquery.dataTables.css";
import React, { Component } from "react";
import "../../../node_modules/datatables.net-dt/js/dataTables.dataTables";
import "../../../node_modules/datatables.net-buttons/js/dataTables.buttons";
import "../../../node_modules/datatables.net-buttons/js/buttons.colVis";
import "../../../node_modules/datatables.net-buttons/js/buttons.flash";
import "../../../node_modules/datatables.net-buttons/js/buttons.html5";
import "../../../node_modules/datatables.net-buttons/js/buttons.print";
import pdfMake from "../../../node_modules/pdfmake/build/pdfmake";
import pdfFonts from "../../../node_modules/pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const $ = require("jquery");
$.DataTable = require("datatables.net");

export class Tbl extends Component {
  componentDidMount() {
    console.log(this.el);
    console.log(sessionStorage.orders);
    var x = JSON.parse(sessionStorage.orders);
    for (var i = 0; i < x.length; i++) {
      x[i][3] = x[i][3].split("T")[0];
    }
    this.$el = $(this.el);
    this.$el.DataTable({
      data: x,
      dom: "Bfrtip",
      buttons: ["copy", "pdf", "csv", "print"],
      columns: [
        { title: "Order#" },
        { title: "Customer Id" },
        { title: "Total" },
        { title: "Order Date" },
        { title: "Status" },
      ],
    });
  }
  componentWillUnmount() {
    //this.$el.DataTable.destroy("True");
  }
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Orders</h1>
        <table
          class="display cell-border"
          width="70%"
          ref={(el) => (this.el = el)}
        ></table>
      </div>
    );
  }
}

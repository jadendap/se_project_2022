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
    this.$el = $(this.el);
    this.$el.DataTable({
      data: this.props.data,
      dom: "Bfrtip",
      buttons: ["copy", "pdf", "csv", "print"],
      columns: [
        { title: "Order#" },
        { title: "Customer Id" },
        { title: "Total" },
        { title: "Order Date" },
      ],
    });
  }
  componentWillUnmount() {
    //this.$el.DataTable.destroy();
  }
  render() {
    return (
      <div>
        <table
          class="display cell-border"
          width="70%"
          ref={(el) => (this.el = el)}
        ></table>
      </div>
    );
  }
}

const knex = require("knex");
const express = require("express");
const knexConfig = require("../knexfile.js");
const res = require("express/lib/response");
const cors = require("cors");

const server = express();
server.use(cors());
const PORT = 9000;
const db = knex(knexConfig);
server.get("/", async (req, res) => {
  res.send("Welcome to route '/'");
});
server.get("/customers/:id", async (req, res) => {
  const id = req.params.id;
  const customer = await db("customer").where("id", id);
  if (customer.length === 0) {
    return res.status(404).send("Customer not found");
  }
  res.send(customer);
});
server.get("/customers", async (req, res) => {
  const customers = await db.select("*").from("customer");
  res.send(customers);
});
server.get("/api/products", async (req, res) => {
  const products = await db.select("*").from("product");
  res.send(products);
});
server.get('/api/product/id/:id', async (req, res) => {
  const id = req.params.id;
  const product = await db("product").where("id", id);
  res.send(product);
});
server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


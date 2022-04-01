const knex = require("knex");
const express = require("express");
const knexConfig = require("../knexfile.js");
//const res = require("express/lib/response");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const server = express();
server.use(cors());
const PORT = 9000;
const db = knex(knexConfig);

server.get("/", async (req, res) => {
  res.send("Welcome to route '/'");
});

//GET all customers
server.get("/customers", async (req, res) => {
  const customers = await db.select("*").from("customer");
  res.send(customers);
});

//GET customer based on id
server.get("/customers/:id", async (req, res) => {
  const id = req.params.id;
  const customer = await db("customer").where("id", id);
  if (customer.length === 0) {
    return res.status(404).send("Customer not found");
  }
  res.send(customer);
});

//login user
var loginParser = bodyParser.json();
server.post("/login", loginParser, async (req, res) => {
  const { username, password } = req.body;
  const customer = await db("customer").where("username", username);
  if (customer.length === 0) {
    console.log("Username: " + username + " not found");
    return res.status(404).send("Customer not found");
  }
  //password check
  if (password !== customer[0].password) {
    console.log("Password did not match");
    return res.status(401).send("Bad Password");
  }
  //customer id and password of customer that just logged in
  console.log(customer[0].id + " " + customer[0].password);

  //customer is valid
  const session = { customer_id: customer[0].id };
  //create shopping_session based on customer id
  const sessionResult = await db.insert(session).into("shopping_session");
  console.log(sessionResult);

  //send shopping session id back to front end
  const maxSessionId = await db("shopping_session")
    .max("id as sessionId")
    .first();
  res.send(maxSessionId);
});

server.get("/products", async (req, res) => {
  const products = await db.select("*").from("product");
  res.send(products);
});

server.get("/featured", async (req, res) => {
  const featured_items = await db
    .select("*")
    .from("product")
    .where("category_id", 1);
  res.send(featured_items);
});

//get all items on sale
server.get("/sale", async (req, res) => {
  const sale_items = await db
    .select("*")
    .from("product")
    .innerjoin("discount")
    .whereNotNull("discount_id");

  res.send(sale_items);
});
server.get("/register", async (req, res) => {
  res.send("hello from register");
});
server.get("/adminlogin", async (req, res) => {
  res.send("hello from admin login");
});

//register user
var jsonParser = bodyParser.json();
server.post("/register", jsonParser, async (req, res) => {
  console.log(JSON.stringify(req.body));
  userName = req.body.username;
  userPass = req.body.password;
  userAddress = req.body.address;
  userFirst = req.body.firstName;
  userLast = req.body.lastName;
  userPhone = req.body.telephone;
  let usr = req.body;
  usr = {
    username: userName,
    password: userPass,
    first_name: userFirst,
    address: userAddress,
    last_name: userLast,
    telephone: userPhone,
  };
  const dbResult = await db.insert(usr).into("customer");
  res.send("customer added");
});

//add an item to db
var jsonParser = bodyParser.json();
server.post("/additem", jsonParser, async (req, res) => {
  console.log(JSON.stringify(req.body));
  let item = req.body;
  let inventory = req.body;
  item = {
    name: req.body.product_name,
    discount_id: req.body.discount,
    category_id: req.body.category,
    desc: req.body.desc,
    sku: req.body.sku,
    image_url: req.body.url,
    price: req.body.price,
  };
  inventory = { quantity: req.body.quantity };
  const dbResult = await db.insert(item).into("product");
  console.log(inventory);
  const inventoryResult = await db.insert(inventory).into("product_inventory");
  const maxIventoryId = await db("product_inventory")
    .max("id as maxId")
    .first();
  console.log(maxIventoryId);
  const updateResult = await db("product")
    .where("name", req.body.product_name)
    .update("inventory_id", maxIventoryId.maxId);
  res.send("item added");
});

//add a discount to db
server.post("/adddiscount", jsonParser, async (req, res) => {
  console.log(JSON.stringify(req.body));
  let discount = req.body;
  discount = {
    name: req.body.discount_name,
    desc: req.body.discount_desc,
    discount_percent: req.body.percent,
    active: req.body.active,
  };
  const dbResult = await db.insert(discount).into("discount");
  console.log(dbResult);
  res.send("discount added");
});

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

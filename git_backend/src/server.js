const knex = require("knex");
const express = require("express");
const knexConfig = require("../knexfile.js");
const cors = require("cors");
const bodyParser = require("body-parser");

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
server.get("/products", async (req, res) => {
  const customers = await db.select("*").from("product");
  res.send(customers);
});

//GET all admins
server.get("/admins", async (req, res) => {
  const admins = await db.select("*").from("se_admins");
  res.send(admins);
});

//GET all product categories
server.get("/categories", async (req, res) => {
  const categories = await db.select("*").from("product_category");
  res.send(categories);
});

//GET all orders
server.get("/orders", async (req, res) => {
  const orders = await db
    .select("id", "customer_id", "total", "order_date", "status")
    .from("orders");
  res.send(orders);
});

//Post Order Daniel
var orderParser = bodyParser.json();
server.post("/AddOrder", orderParser, async (req, res) => {
  let order = req.body;
  order = {
    customer_id: req.body.customer_id,
    total: req.body.total,
    order_date: req.body.date,
    status: req.body.status,
  };
  console.log(order);
  dbResult = await db.insert(order).into("orders");
});

//GET all product inventory
server.get("/inventory", async (req, res) => {
  const quantities = await db.select("*").from("product_inventory");
  res.send(quantities);
});

//GET all discounts
server.get("/discounts", async (req, res) => {
  const discounts = await db.select("*").from("discount");
  res.send(discounts);
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
//GET customer based on shopping_session Daniel
server.get("/customer/ShoppingSession/:id", async (req, res) => {
  const id = req.params.id;
  const customer = await db
    .from("customer")
    .innerJoin(
      "shopping_session",
      "shopping_session.customer_id",
      "customer.id"
    )
    .where("shopping_session.id", id);
  if (customer.length === 0) {
    return res.status(404).send("Customer not found");
  }
  res.send(customer[0]);
});

//login user
var loginParser = bodyParser.json();
server.post("/login", loginParser, async (req, res) => {
  const { username, password } = req.body;
  const customer = await db("customer").where("username", username);

  //username check
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

  //send shopping session id back to front end
  const maxSessionId = await db("shopping_session")
    .max("id as sessionId")
    .first();
  console.log(
    customer[0].username +
      " logged in with session id " +
      maxSessionId.sessionId
  );
  const c_info = {
    c_id: session.customer_id,
    c_session: maxSessionId.sessionId,
  };

  res.send(c_info);
});

//GET all products
server.get("/products", async (req, res) => {
  const products = await db
    .select(
      "product.id",
      "product.name",
      "product.discount_id",
      "product.category_id",
      "product.inventory_id",
      "product.desc",
      "product.sku",
      "product.image_url",
      "product.price",
      "product_inventory.id",
      "product_inventory.quantity"
    )
    .from("product")
    .leftJoin(
      "product_inventory",
      "product.inventory_id",
      "product_inventory.id"
    );
  res.send(products);
});

// ------backend server TEST------search based on :search parameter,
//  usage example: localhost/9000/products/laptops
//  returns: ON SUCCESS, returns found items in JSON.  returns empty array if nothing is found
server.get("/products/:search", async (req, res) => {
  const search = req.params.search;
  console.log(search);
  //search name and desc columns
  const searchResults = await db("product")
    .whereILike("name", `%${search}%`)
    .orWhereILike("desc", `%${search}%`);
  console.log(searchResults);
  res.send(searchResults);
});

//search db from user input
server.get("/products/search", async (req, res) => {
  const search = req.body.search;
  console.log(search);
  //search name and desc columns
  const searchResults = await db("product")
    .whereILike("name", `%${search}%`)
    .orWhereILike("desc", `%${search}%`);
  console.log(searchResults);
  res.send(searchResults);
});
//delete from cart
var deleteParser = bodyParser.json();
server.delete("/removeFromCart", deleteParser, async (req, res) => {
  productId = req.body.productId;
  sessionId = req.body.sessionId;
  console.log(productId + " " + sessionId);
  let deleteItem = req.body;
  deleteItem = {
    product_id: productId,
    session_id: sessionId,
  };

  deleteResult = await db("cart_item")
    .where(function () {
      this.where("product_id", productId).andWhere("session_id", sessionId);
    })
    .del();
  if (deleteResult > 0) {
    console.log("item deleted");
  }
  return;
});

//return all featured items
server.get("/featured", async (req, res) => {
  const featured = await db
    .select(
      "product.id",
      "product.name",
      "product.discount_id",
      "product.category_id",
      "product.inventory_id",
      "product.desc",
      "product.sku",
      "product.image_url",
      "product.price",
      "product_inventory.quantity"
    )
    .from("product")
    .leftJoin("product_category", "product.category_id", "product_category.id")
    .leftJoin(
      "product_inventory",
      "product.inventory_id",
      "product_inventory.id"
    )
    .where("product.category_id", 1);
  res.send(featured);
});
//GET all items on sale
//GET all items on sale
server.get("/sale", async (req, res) => {
  const sale_items = await db
    .select(
      "product.id",
      "product.name",
      "product.discount_id",
      "product.category_id",
      "product.inventory_id",
      "product.desc",
      "product.sku",
      "product.image_url",
      "product.price",
      "product_inventory.quantity",
      "discount.desc",
      "discount.discount_percent"
    )
    .from("product")
    .where("product.category_id", 2)
    .leftJoin(
      "product_inventory",
      "product.inventory_id",
      "product_inventory.id"
    )
    .leftJoin("discount", "product.discount_id", "discount.id")
    .whereNot("discount_id", 6)
    .andWhereNot("discount.active", "false");

  res.send(sale_items);
});
//admin login
var adminloginParser = bodyParser.json();
server.post("/adminlogin", adminloginParser, async (req, res) => {
  //console.log(JSON.stringify(req.body));
  const { username, password } = req.body;
  console.log(req.body);
  const customer = await db("se_admins").where("username", username);

  //username check
  if (customer.length === 0) {
    console.log("Username: " + username + " not found");
    return res.status(404).send("Customer not found");
  }
  //password check
  if (password !== customer[0].password) {
    console.log("Password did not match");
    return res.status(401).send("Bad Password");
  }
  //admin id and password of admin that just logged in
  console.log(customer[0].id + " " + customer[0].password);
  res.send("admin log in");
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
//add admin
var jsonParser = bodyParser.json();
server.post("/admins", jsonParser, async (req, res) => {
  console.log(JSON.stringify(req.body));
  userName = req.body.username;
  userPass = req.body.password;
  let usr = req.body;
  usr = {
    username: userName,
    password: userPass,
  };
  const admin = await db("se_admins").where("username", userName);
  if (admin.length === 0) {
    const dbResult = await db.insert(usr).into("se_admins");
    res.send("admin added");
  }
});
//add an item to db
var jsonParser = bodyParser.json();
server.post("/additem", jsonParser, async (req, res) => {
  console.log(JSON.stringify(req.body));
  let item = req.body;
  let inventory = req.body;
  item = {
    name: req.body.name,
    discount_id: req.body.discount,
    category_id: req.body.category,
    desc: req.body.desc,
    sku: req.body.sku,
    image_url: req.body.url,
    price: req.body.price,
  };
  console.log(item);
  inventory = { quantity: req.body.quantity };
  //insert item into product table
  const dbResult = await db.insert(item).into("product");
  console.log(inventory);
  //insert into inventory table
  const inventoryResult = await db.insert(inventory).into("product_inventory");
  //get the most recent inventory id so we can assign it to the product that was just added
  const maxIventoryId = await db("product_inventory")
    .max("id as maxId")
    .first();
  console.log(maxIventoryId);
  //id assignment
  const updateResult = await db("product")
    .where("name", req.body.name)
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
//customer adds a product
server.post("/customerproduct", jsonParser, async (req, res) => {
  //get highest cart_item id
  console.log(JSON.stringify(req.body));
  let sessionProduct = req.body;
  sessionProduct = {
    session_id: req.body.sessionId,
    product_id: req.body.productId,
  };
  console.log(sessionProduct);
  maxCartId = await db("cart_item").max("id as cartMaxId").first();
  console.log(maxCartId.cartMaxId);
  //if they don't have a cart, make one for cust
  if (!maxCartId.cartMaxId) {
    dbResult = await db.insert(sessionProduct).into("cart_item");
    if (dbResult.length === 0) {
      return res.status(500).send("Error: item couldn't be added");
    } else {
      return res.send("Item added to cart");
    }
  }
  //existing cart needs to add an item
  else {
    dbResult = await db.insert(sessionProduct).into("cart_item");
    if (dbResult.length === 0) {
      res.status(500).send("Error: item couldn't be added");
    }
  }
  res.send("message received");
});

var jsonParser = bodyParser.json();
/*server.put("/register", jsonParser, async (req, res) => {
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
  const dbResult = await db.update(usr);
  res.send("customer updated");
});*/
server.patch("/register", jsonParser, async (req, res) => {
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

  const dbResult = db("customers").where({ username: userName }).update(usr);
  if (usr) {
    res.send(usr);

    console.log(dbResult);
  } else {
    res.status(400).send("record not found");
  }
});
var jsonParser = bodyParser.json();
server.put("/customers/:id", jsonParser, async (req, res) => {
  //console.log(JSON.stringify(req.body));
  userid = req.body.id;
  userName = req.body.username;
  userPass = req.body.password;
  userAddress = req.body.address;
  userFirst = req.body.first_name;
  userLast = req.body.last_name;
  userPhone = req.body.telephone;
  let usr = req.body;
  usr = {
    id: userid,
    username: userName,
    password: userPass,
    first_name: userFirst,
    address: userAddress,
    last_name: userLast,
    telephone: userPhone,
  };
  res.setHeader("Content-Type", "text/html");
  const dbResult = await db("customer").where({ id: userid }).update(usr);
  if (usr) {
    console.log(usr);
    return res.status(200).json({ updated: dbResult });
  } else {
    res.status(400).send("record not found");
  }
});
var jsonParser = bodyParser.json();
server.put("/admins/:id", jsonParser, async (req, res) => {
  //console.log(JSON.stringify(req.body));
  userid = req.body.id;
  userName = req.body.username;
  userPass = req.body.password;
  let usr = req.body;
  usr = {
    id: userid,
    username: userName,
    password: userPass,
  };
  res.setHeader("Content-Type", "text/html");
  const dbResult = await db("se_admins").where({ id: userid }).update(usr);
  if (usr) {
    console.log(usr);
    return res.status(200).json({ updated: dbResult });
  } else {
    res.status(400).send("record not found");
  }
});
var jsonParser = bodyParser.json();
server.put("/products/:id", jsonParser, async (req, res) => {
  console.log(JSON.stringify(req.body));
  itemid = req.body.id;
  itemname = req.body.name;
  itemdiscount_id = req.body.discount_id;
  itemdesc = req.body.desc;
  itemimage = req.body.image_url;
  itemsku = req.body.sku;
  itemcategory = req.body.category;
  itemprice = req.body.price;
  iteminventory_id = req.body.inventory_id;
  itemcategory_id = req.body.category_id;
  let product = req.body;
  product = {
    id: itemid,
    name: itemname,
    discount_id: itemdiscount_id,
    category_id: itemcategory_id,
    inventory_id: iteminventory_id,
    desc: itemdesc,
    sku: itemsku,
    image_url: itemimage,
    category: itemcategory_id,
    price: itemprice,
  };
  res.setHeader("Content-Type", "text/html");
  console.log(product);
  console.log(itemid);
  const dbResult = await db("product").where({ id: itemid }).update(product);
  if (product) {
    console.log(product);
    return res.status(200).json({ updated: dbResult });
  } else {
    res.status(400).send("record not found");
  }
});
server.put("/inventory", jsonParser, async (req, res) => {
  let inv = req.body;
  inv = {
    id: req.body.id,
    quantity: req.body.quantity,
  };
  const dbResult = await db("product_inventory")
    .where({ id: req.body.id })
    .update(inv);
});
server.delete("/products/:id", async (req, res) => {
  //const {id } = req.params
  console.log(req.params.id);
  //const dbResult = await db('customer').where({username: userName}).update(usr)
  await db("product").where({ id: req.params.id }).del();
});

server.delete("/customers/:id", async (req, res) => {
  //const {id } = req.params
  console.log(req.params.id);
  //const dbResult = await db('customer').where({username: userName}).update(usr)
  await db("customer").where({ id: req.params.id }).del();
});

server.delete("/admins/:id", async (req, res) => {
  //const {id } = req.params
  console.log(req.params.id);
  //const dbResult = await db('customer').where({username: userName}).update(usr)
  await db("se_admins").where({ id: req.params.id }).del();
});

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
//specific product
/*server.get("/product/id/:id", async (req, res) => {
  const id = req.params.id;
  const product = await db("product").where("id", id);
  console.log(product);
  res.send(product[0]);
});
 */
server.get("/product/id/:id", async (req, res) => {
  const id = req.params.id;
  const productInfo = await db
    .select(
      "product.id",
      "product.name",
      "product.discount_id",
      "product.category_id",
      "product.inventory_id",
      "product.desc",
      "product.sku",
      "product.image_url",
      "product.price",
      "product_inventory.quantity"
    )
    .from("product")
    .leftJoin("product_category", "product.category_id", "product_category.id")
    .leftJoin(
      "product_inventory",
      "product.inventory_id",
      "product_inventory.id"
    )
    .where("product.id", id);

  res.send(productInfo[0]);
});
server.get("/cart/id/:id", async (req, res) => {
  const id = req.params.id;
  const cart = await db
    .select(
      " cart_item.product_id",
      "product.name",
      "product.price",
      "product.image_url"
    )
    .count("cart_item.product_id AS amount")
    .from("cart_item")
    .innerJoin("product", "cart_item.product_id", "product.id")
    .where({ session_id: id })
    .groupBy(
      "product.name",
      "cart_item.product_id",
      "product.price",
      "product.image_url"
    );
  res.send(cart);
});
server.get("/cart/:id", async (req, res) => {
  const id = req.params.id;
  //const cart = await db.from("cart_item").innerJoin("product", "cart_item.product_id", "product.id").where({session_id: id});
  const cart = await db
    .select(
      " cart_item.product_id",
      "product.name",
      "product.price",
      "product.image_url"
    )
    .count("cart_item.product_id AS amount")
    .from("cart_item")
    .innerJoin("product", "cart_item.product_id", "product.id")
    .where({ session_id: id })
    .groupBy(
      "product.name",
      "cart_item.product_id",
      "product.price",
      "product.image_url"
    );
  res.send(cart);
});
//delete cart_item to session
var deleteParser = bodyParser.json();
server.delete("/removeFromCart", deleteParser, async (req, res) => {
  let cartItem = req.body;
  cartItem = {
    session_id: req.body.session_id,
    product_id: req.body.product_id,
  };
  const dbResult = await db("cart_item")
    .where("session_id", req.body.session_id)
    .where("product_id", req.body.product_id)
    .del();
  res.send("item is deleted from cart");
});
//daniel
//get all products

server.get("/products", async (req, res) => {
  const products = await db.select("*").from("product");
  res.send(products);
});
//get cart by session
server.get("/cart", async (req, res) => {
  const cart = await db.select("*").from("cart_item");
  res.send(cart);
});
//SELECT  product.name,product.price, COUNT(cart_item.product_id) AS quantity FROM cart_item INNER JOIN product on product.id = cart_item.product_id where session_id = 86
// group by product.name, product.price;

//delete cart_item to session
var jsonParser = bodyParser.json();
server.delete("/deleteCartItem", jsonParser, async (req, res) => {
  let cartItem = req.body;
  cartItem = {
    //added
    id: req.body.id,
    session_id: req.body.session_id,
    product_id: req.body.product_id,
  };
  //const dbResult = await db("cart_item").where("session_id",req.body.session_id).where("product_id",req.body.product_id).del();
  const dbResult = await db("cart_item")
    .where("id", req.body.id)
    .where("session_id", req.body.session_id)
    .where("product_id", req.body.product_id)
    .del();
  res.send("item is deleted from cart");
});
var jsonParser = bodyParser.json();
server.delete("/inventory", jsonParser, async (req, res) => {
  let inv = req.body;
  inv = {
    id: req.body.id,
    quantity: req.body.quantity,
  };
  console.log(`Inventory item deleted: ${req.body.id}`);
  //const dbResult = await db('customer').where({username: userName}).update(usr)

  const dbResult = await db("product_inventory").where("id", req.body.id).del();
  //await db("product_inventory").where({ id:  req.body.id}).del();
});
server.get("/order/:id", async (req, res) => {
  const id = req.params.id;
  const orders = await db("orders").where("customer_id", id);
  res.send(orders);
});
//delete cart bases on session id;
server.delete("/DeleteCart/:id", async (req, res) => {
  const id = req.params.id;

  await db("cart_item").where("session_id", id).del();
  console.log(`cart ${id} deleted`);
});

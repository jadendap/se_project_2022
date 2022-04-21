import { Home } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../Styles/cart.css";

const Cart = () => {
  const [price, setPrice] = useState(0);
  const [cart, setCart] = useState([]);
  var amount = 1;

  const getCart = async () => {
    const keyword = sessionStorage.sessionId;
    if (!keyword) {
      alert("Please sign in to view cart");
      window.location.href = "http://localhost:3000/Login";
      return;
    }
    console.log(keyword);
    const url = "http://localhost:9000/cart/" + keyword;
    console.log(url);
    const response = await fetch(url, {
      method: "GET",
    });
    const responseJson = await response.json();
    console.log(typeof responseJson);
    if (!responseJson[0].amount) {
      for (var q = 0; q < responseJson.length; q++) {
        responseJson[q].amount = 1;
      }
    }
    setCart(responseJson);
    return responseJson;
  };

  const handleRemove = (id) => {
    console.log(id);
    const data = {
      sessionId: sessionStorage.sessionId,
      productId: id,
    };

    const deleteResponse = fetch("http://localhost:9000/removeFromCart", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    cart = cart.filter(function (obj) {
      return obj.product_id !== id;
    });
    console.log(cart);
    const arr = cart.filter((item) => item.product_id !== id);
    setCart(cart);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  const handleChange = (item, d) => {
    console.log(cart);
    console.log(item);
    if (!cart[0].amount) {
      for (var q = 0; q < cart.length; q++) {
        cart[q].amount = 1;
      }
    }
    const ind = cart.indexOf(item);
    console.log(ind);
    const arr = cart;
    console.log(arr);
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };
  useEffect(() => {
    handlePrice();
  });
  useEffect(() => {
    getCart();
  }, []);

  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.image_url} alt="" />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.product_id)}>
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price of your Cart</span>
        <span>${price}</span>
      </div>
      <div className="checkout">
        <button>Place Order</button>
      </div>
    </article>
  );
};

export default Cart;

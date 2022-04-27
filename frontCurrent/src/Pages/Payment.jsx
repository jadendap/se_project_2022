import React, { useState } from 'react';

const appStyle = {
  height: "700px",
  display: "flex",
};
const formStyle = {
  margin: "auto",
  padding: "10px",
  border: "1px solid black",
  borderRadius: "5px",
  background: "black",
  width: "520px",
  height: "300px",
  display: "block",
};

const labelStyle = {
  margin: "10px 0 5px 0",
  fontFamily: "Arial, Helvetica, sans-serif",
  fontSize: "15px",
  color: "white",
};

const inputStyle = {
  margin: "5px 0 10px 0",
  padding: "5px",
  border: "1px solid #bfbfbf",
  borderRadius: "3px",
  boxSizing: "border-box",
  width: "100%",
};

const submitStyle = {
  margin: "10px 0 0 0",
  padding: "7px 10px",
  border: "1px solid #efffff",
  borderRadius: "3px",
  background: "#98c285",
  width: "100%",
  fontSize: "15px",
  color: "black",
  display: "block",
};

export default function Shipping() {
    const [ccNumber, setCCNumber] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

    };
    return (
        <div style={appStyle}>
            <form style={formStyle} className="form" onSubmit={submitHandler}>
                <div>
                    <h1 style={labelStyle}>Payment</h1>
                </div>
                <div>
                    <label style={labelStyle} htmlFor="ccNumber" >Credit Card Number: </label>
                    <input
                        type="text"
                        id="ccNumber"
                        placeholder="Enter Credit Card Number"
                        value={ccNumber}
                        onChange={(e) => setCCNumber(e.target.value)}
                        required
                    ></input>
                </div>
                <div>
                <label style={labelStyle} for="expDate">Select Month/Year:</label>
                <select id="month" name="month">
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                </select>
                <label style={labelStyle} for="year">/</label>
                  <select id="year" name="year">
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
                      <option value="2025">2025</option>
                      <option value="2026">2026</option>
                      <option value="2027">2027</option>
                      <option value="2028">2028</option>
                      <option value="2029">2029</option>
                      <option value="2030">2030</option>
                      <option value="2031">2031</option>
                      <option value="2032">2032</option>
                      <option value="2033">2033</option>
                      <option value="2034">2034</option>
                      <option value="2035">2035</option>
                      <option value="2036">2036</option>
                      <option value="2037">2037</option>
                      <option value="2038">2038</option>
                      <option value="2039">2039</option>
                      <option value="2040">2040</option>
                  </select>
                  </div>

                <div>
                    <label/>
                    <button style={submitStyle} className="primary" type="submit">Continue</button>
                </div>
            </form>
        </div>
    )
}
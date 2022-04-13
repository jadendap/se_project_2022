/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("orders").del();
  await knex("orders").insert([
    {
      customer_id: "31",
      total: "59.99",
      order_date: "10/10/2010",
      status: "shipped",
    },
    {
      customer_id: "34",
      total: "99.99",
      order_date: "10/15/2010",
      status: "open",
    },
    {
      customer_id: "31",
      total: "129.99",
      order_date: "10/11/2010",
      status: "complete",
    },
    {
      customer_id: "31",
      total: "89.99",
      order_date: "10/11/2022",
      status: "shipped",
    },
    {
      customer_id: "30",
      total: "99.99",
      order_date: "1/1/2022",
      status: "cancelled",
    },
    {
      customer_id: "30",
      total: "82.33",
      order_date: "8/11/2021",
      status: "open",
    },
    {
      customer_id: "45",
      total: "9.99",
      order_date: "7/11/2019",
      status: "open",
    },
    {
      customer_id: "45",
      total: "19.99",
      order_date: "4/21/2017",
      status: "open",
    },
    {
      customer_id: "31",
      total: "17.65",
      order_date: "6/13/2019",
      status: "complete",
    },
    {
      customer_id: "34",
      total: "37.81",
      order_date: "12/24/2021",
      status: "shipped",
    },
  ]);
};

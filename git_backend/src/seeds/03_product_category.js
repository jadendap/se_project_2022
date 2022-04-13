/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  //await knex("product_category").del();
  await knex("product_category").insert([
    { id: 1, name: "featured", desc: "items to push to sell" },
    { id: 2, name: "sale", desc: "items currently on sale" },
    { id: 3, name: "trending", desc: "trending hot picks" },
    {
      id: 4,
      name: "best sellers",
      desc: "a look at some of our most popular items",
    },
  ]);
};

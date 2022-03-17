/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("customer").del();
  await knex("customer").insert([
    {
      id: 1,
      first_name: "John",
      last_name: "Smith",
      address: "100 N Mayflower Ave",
      cart_id: "1",
      is_admin: 0,
    },
    {
      id: 2,
      first_name: "Datab",
      last_name: "Ace",
      address: "50 S Storage Ln",
      cart_id: "2",
      is_admin: 0,
    },
    {
      id: 3,
      first_name: "Rick",
      last_name: "Morty",
      address: "200 E  Pickle Pl",
      cart_id: "3",
      is_admin: 0,
    },
  ]);
};

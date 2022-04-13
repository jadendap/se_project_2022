/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  //await knex("customer").del();
  await knex("customer").insert([
    {
      id: 1,
      username: "jsmith",
      password: "passw0rd",
      first_name: "John",
      last_name: "Smith",
      address: "100 N Mayflower Ave",
      telephone: "555-123-4567",
    },
    {
      id: 2,
      username: "dace",
      password: "passWord",
      first_name: "Datab",
      last_name: "Ace",
      address: "50 S Storage Ln",
      telephone: "555-123-5678",
    },
    {
      id: 3,
      username: "rmorty",
      password: "Password",
      first_name: "Rick",
      last_name: "Morty",
      address: "200 E  Pickle Pl",
      telephone: "555-123-5679",
    },
  ]);
};

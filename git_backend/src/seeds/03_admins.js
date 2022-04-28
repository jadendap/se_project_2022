/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("se_admins").del();
  await knex("se_admins").insert([
    { id: 1, username: "michael123", password: "michael456" },
    { id: 2, username: "misael123", password: "misael456" },
    { id: 3, username: "conagher123", password: "conagher456" },
    { id: 4, username: "daniel123", password: "daniel456" },
    { id: 5, username: "jaden123", password: "jaden456" },
    { id: 6, username: "jasmine123", password: "jasmine456" },
  ]);
};

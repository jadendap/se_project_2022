/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("customer", (table) => {
    table.increments().primary();
    table.string("first_name");
    table.string("last_name");
    table.string("address");
    table.string("cart_id");
    table.boolean("is_admin");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("customer");
};

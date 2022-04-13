/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("customer", (table) => {
    table.increments().primary();
    table.string("username").unique().notNullable();
    table.string("password").notNullable();
    table.string("first_name");
    table.string("last_name");
    table.string("address");
    table.string("telephone");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("modified_at").defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("customer");
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("cart_item", (table) => {
    table.increments().primary();
    table.integer("session_id").unsigned().notNullable();
    table.integer("product_id").unsigned().notNullable();
    table.text("quantity");
    table.foreign("session_id").references("id").inTable("shopping_session");
    table.foreign("product_id").references("id").inTable("product");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("modified_at").defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cart_item");
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("order_item", (table) => {
    table.increments().primary();
    table.integer("order_id").unsigned().notNullable();
    table.integer("product_id").unsigned().notNullable();
    table.integer("quantity");
    table.foreign("order_id").references("id").inTable("order");
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
  return knex.schema.dropTableIfExists("order_item");
};

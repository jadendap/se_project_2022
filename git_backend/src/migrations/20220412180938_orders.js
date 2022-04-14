/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("orders", (table) => {
    table.increments().primary();
    table.integer("customer_id").unsigned().notNullable();
    table.decimal("total");
    table.date("order_date");
    table.foreign("customer_id").references("id").inTable("customer");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("modified_at").defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("orders");
};

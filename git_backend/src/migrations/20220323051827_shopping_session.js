/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("shopping_session", (table) => {
    table.increments().primary();
    table.integer("customer_id").unsigned().notNullable();
    table.foreign("customer_id").references("id").inTable("customer"); //foreign key
    table.decimal("total");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("modified_at").defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("shopping_session");
};

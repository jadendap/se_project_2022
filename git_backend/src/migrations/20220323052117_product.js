/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("product", (table) => {
    table.increments().primary();
    table.string("name");
    table.integer("discount_id").unsigned();
    table.integer("category_id").unsigned();
    table.integer("inventory_id").unsigned();
    table.text("desc");
    table.string("sku");
    table.string("image_url");
    table.string("category");
    table.decimal("price");
    table.foreign("discount_id").references("id").inTable("discount");
    table.foreign("category_id").references("id").inTable("product_category");
    table.foreign("inventory_id").references("id").inTable("product_inventory");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("modified_at").defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("product");
};

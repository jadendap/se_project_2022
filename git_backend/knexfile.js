// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  client: "pg",
  connection:
    "postgres://virhfbkm:neqOUkFsZUOLev1BtVtXzMdKHZg5BTHH@kashin.db.elephantsql.com/virhfbkm", //database connection string needed
  migrations: {
    directory: "./src/migrations",
  },
  seeds: {
    directory: "./src/seeds",
  },
};

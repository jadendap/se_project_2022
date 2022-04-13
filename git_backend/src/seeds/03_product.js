/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  //await knex("product").del();
  await knex("product").insert([
    {
      id: 1,
      name: "mac book air",
      desc: "the latest and greatest macbook air",
      image_url:
        "https://www.cnet.com/a/img/resize/af0b56bbac3ef1c46689f20b88b3a03d988def55/hub/2017/08/14/ec0fa893-faf2-46c3-8933-6898773804ba/apple-macbook-air-2017-05.jpg?auto=webp&width=768",
      category_id: 1,
      price: "2100.99",
    },
    {
      id: 2,
      name: "apple m1 chip",
      desc: "the latest and greatest apple processor",
      image_url:
        "https://www.apple.com/newsroom/images/product/mac/standard/Apple_m1-chip-8-core-cpu-chart_11102020_big.jpg.large.jpg",
      category_id: 4,
      price: "1000.99",
    },
    {
      id: 3,
      name: "a great monitor",
      desc: "the latest and greatest monitor",
      category_id: 1,
      price: "100.99",
    },
  ]);
};

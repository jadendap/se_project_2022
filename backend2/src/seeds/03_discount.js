/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  //await knex("discount").del();
  await knex("discount").insert([
    {
      id: 1,
      name: "Day",
      desc: "Today only deal",
      discount_percent: ".66",
      active: "1",
    },
    {
      id: 2,
      name: "Member",
      desc: "20% off for members",
      discount_percent: ".20",
      active: "1",
    },
    {
      id: 3,
      name: "Thirty",
      desc: "30% off",
      discount_percent: ".30",
      active: "1",
    },
    {
      id: 4,
      name: "ShipFree",
      desc: "Free shipping on select items",
      active: "0",
    },
    {
      id: 5,
      name: "BOGO",
      desc: "Buy one get one",
      discount_percent: ".50",
      active: "0",
    },
  ]);
};

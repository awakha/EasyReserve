"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Dishes",
      [
        {
          name: "борщ",
          price: 300,
          categoryId: 1,
          restId: 1,
        },
        {
          name: "маргарита",
          price: 600,
          categoryId: 2,
          restId: 1,
        },
        {
          name: "карбонара",
          price: 500,
          categoryId: 3,
          restId: 1,
        },
        {
          name: "итальянский",
          price: 300,
          categoryId: 1,
          restId: 2,
        },
        {
          name: "пицца",
          price: 600,
          categoryId: 2,
          restId: 2,
        },
        {
          name: "паста",
          price: 500,
          categoryId: 3,
          restId: 2,
        },
        {
          name: "луковый суп",
          price: 300,
          categoryId: 1,
          restId: 3,
        },
        {
          name: "пицца французская",
          price: 600,
          categoryId: 2,
          restId: 3,
        },
        {
          name: "паста французская",
          price: 500,
          categoryId: 3,
          restId: 3,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Dishes", null, {});
  },
};

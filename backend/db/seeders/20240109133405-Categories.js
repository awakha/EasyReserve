"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "sup",
        },
        {
          name: "pizza",
        },
        {
          name: "pasta",
        },
        {
          name: "meat dishes",
        },
        {
          name: "appetizer",
        },
        {
          name: "fish and sea foods",
        },
        {
          name: "garnishes",
        },
        {
          name: "desserts",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};

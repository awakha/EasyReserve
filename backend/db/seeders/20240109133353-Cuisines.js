"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Cuisines",
      [
        {
          name: "russian",
        },
        {
          name: "italian",
        },
        {
          name: "french", 
        },
        {
          name: "vegetarian",
        },
        {
          name: "international",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Cuisines", null, {});
  },
};

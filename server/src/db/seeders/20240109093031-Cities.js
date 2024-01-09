"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Cities",
      [
        {
          name: 'Moscow',
          countryId: 1,
        },
        {
          name: 'Milan',
          countryId: 2,
        },
        {
          name: 'Paris',
          countryId: 3,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Cities", null, {});
  },
};

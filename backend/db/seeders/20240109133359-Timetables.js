"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Timetables",
      [
        {
          openTime: "08:00:00",
          closeTime: "22:00:00",
        },
        {
          openTime: "12:00:00",
          closeTime: "00:00:00",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Timetables", null, {});
  },
};

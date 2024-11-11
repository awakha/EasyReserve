"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Reservations",
      [
        {
          date: '2024-01-09',
          guestsCount: 30,
          startTime: "2:00:00",
          restId: 1,
          userId: 1,
        },
        {
          date: '2024-01-10',
          guestsCount: 30,
          startTime: "2:00:00",
          restId: 1,
          userId: 1,
        },
        {
          date: '2024-01-11',
          guestsCount: 30,
          startTime: "2:00:00",
          restId: 1,
          userId: 1,
        },
        {
          date: '2024-01-09',
          guestsCount: 30,
          startTime: "2:00:00",
          restId: 2,
          userId: 1,
        },
        {
          date: '2024-01-10',
          guestsCount: 30,
          startTime: "2:00:00",
          restId: 2,
          userId: 1,
        },
        {
          date: '2024-01-11',
          guestsCount: 30,
          startTime: "2:00:00",
          restId: 2,
          userId: 1,
        },
        {
          date: '2024-01-09',
          guestsCount: 30,
          startTime: "2:00:00",
          restId: 3,
          userId: 1,
        },
        {
          date: '2024-01-10',
          guestsCount: 30,
          startTime: "2:00:00",
          restId: 3,
          userId: 1,
        },
        {
          date: '2024-01-11',
          guestsCount: 30,
          startTime: "2:00:00",
          restId: 3,
          userId: 1,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Reservations", null, {});
  },
};

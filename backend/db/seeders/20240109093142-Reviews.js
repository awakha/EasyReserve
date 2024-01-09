'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Reviews',
      [
        {
          text: '1111111',
          images: [''],
          score: 3,
          userId: 1,
          restId: 1,
        },
        {
          text: '22222',
          images: [''],
          score: 3,
          userId: 1,
          restId: 2,
        },
        {
          text: '3333333',
          images: [''],
          score: 3,
          userId: 1,
          restId: 3,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Reviews', null, {});
  },
};

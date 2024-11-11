"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "admin",
          email: "admin@admin.ru",
          password: "root",
          refreshToken: "admin",
          isAdmin: true,
        },
        {
          username: "ryan gosling",
          email: "ryan@gosling.com",
          password: "123",
          refreshToken: "meme",
        },
        {
          username: "tom holland",
          email: "tom@holland.com",
          password: "123",
          refreshToken: "sp3",
        },
        {
          username: "andrew garfield",
          email: "andrew@garfield.com",
          password: "123",
          refreshToken: "sp2",
        },
        {
          username: "tobey maguire",
          email: "tobey@maguire.com",
          password: "123",
          refreshToken: "sp1",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};

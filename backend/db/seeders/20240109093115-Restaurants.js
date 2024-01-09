"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Restaurants",
      [
        {
          name: "Angels and Demons",
          description: "Ресторан Ангелы и Деммоны лалалалал",
          address: "Московская, 2",
          images: ["https://img.restoclub.ru/uploads/article/a/d/a/7/ada7722cf39c2a52be3ebaca12109dcf_w828_h552--big.jpg", "https://img.restoclub.ru/uploads/article/a/d/a/7/ada7722cf39c2a52be3ebaca12109dcf_w828_h552--big.jpg"],
          cuisineId: 1,
          cityId: 1,
          timetableId: 1,
        },
        {
          name: "Belisimo",
          description: "Ресторан Belisimo лалалалал",
          address: "Миланская, 2",
          images: ["https://img.restoclub.ru/uploads/article/a/d/a/7/ada7722cf39c2a52be3ebaca12109dcf_w828_h552--big.jpg", "https://img.restoclub.ru/uploads/article/a/d/a/7/ada7722cf39c2a52be3ebaca12109dcf_w828_h552--big.jpg"],
          cuisineId: 2,
          cityId: 2,
          timetableId: 1,
        },
        {
          name: "Jomapel",
          description: "Ресторан Jomapel лалалалал",
          address: "Парижская, 2",
          images: ["https://img.restoclub.ru/uploads/article/a/d/a/7/ada7722cf39c2a52be3ebaca12109dcf_w828_h552--big.jpg", "https://img.restoclub.ru/uploads/article/a/d/a/7/ada7722cf39c2a52be3ebaca12109dcf_w828_h552--big.jpg"],
          cuisineId: 3,
          cityId: 3,
          timetableId: 1,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Restaurants", null, {});
  },
};

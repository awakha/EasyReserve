"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Dishes",
      [
        {
          name: "Borsch",
          price: 300,
          categoryId: 1,
          restId: 1,
        },
        {
          name: "Pizza Margarita",
          price: 600,
          categoryId: 2,
          restId: 1,
        },
        {
          name: "Pizza Carbonara",
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
          name: "Pizza",
          price: 600,
          categoryId: 2,
          restId: 2,
        },
        {
          name: "Pasta",
          price: 500,
          categoryId: 3,
          restId: 2,
        },
        {
          name: "Оnion soup",
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
        {
          name: "New-York steak",
          price: 3900,
          categoryId: 4,
          restId: 5,
        },
        {
          name: "Solyanka",
          price: 900,
          categoryId: 1,
          restId: 4,
        },
        {
          name: "Okroshka",
          price: 600,
          categoryId: 1,
          restId: 7,
        },
        {
          name: "Meat in French",
          price: 2800,
          categoryId: 4,
          restId: 14,
        },
        {
          name: "Pasta bolognese",
          price: 900,
          categoryId: 3,
          restId: 13,
        },
        {
          name: "Seafood pizza",
          price: 3000,
          categoryId: 2,
          restId: 12,
        },
        {
          name: "Soup with Provencal herbs and mozzarella",
          price: 700,
          categoryId: 1,
          restId: 11,
        },
        {
          name: "Pizza Margarita",
          price: 900,
          categoryId: 2,
          restId: 10,
        },
        {
          name: "Seafood pasta",
          price: 1500,
          categoryId: 3,
          restId: 9,
        },
        {
          name: "Carpaccio from beef tenderlion",
          price: 300,
          categoryId: 4,
          restId: 8,
        },
        {
          name: "Platter cheese",
          price: 200,
          categoryId: 5,
          restId: 7,
        },
        {
          name: "Garlic bread ",
          price: 900,
          categoryId: 5,
          restId: 6,
        },
        {
          name: "Grilled vegetables",
          price: 700,
          categoryId: 7,
          restId: 5,
        },
        {
          name: "Vanilla pudding",
          price: 600,
          categoryId: 8,
          restId: 4,
        },
        {
          name: "Meat in French",
          price: 2800,
          categoryId: 4,
          restId: 1,
        },
        {
          name: "Pasta bolognese",
          price: 900,
          categoryId: 3,
          restId: 2,
        },
        {
          name: "Seafood pizza",
          price: 3000,
          categoryId: 2,
          restId: 3,
        },
        {
          name: "Soup with Provencal herbs and mozzarella",
          price: 700,
          categoryId: 1,
          restId: 4,
        },
        {
          name: "Pizza Margarita",
          price: 900,
          categoryId: 2,
          restId: 5,
        },
        {
          name: "Seafood pasta",
          price: 1500,
          categoryId: 3,
          restId: 6,
        },
        {
          name: "Carpaccio from beef tenderlion",
          price: 300,
          categoryId: 4,
          restId: 7,
        },
        {
          name: "Platter cheese",
          price: 200,
          categoryId: 5,
          restId: 8,
        },
        {
          name: "Garlic bread ",
          price: 900,
          categoryId: 5,
          restId: 14,
        },
        {
          name: "Grilled vegetables",
          price: 700,
          categoryId: 7,
          restId: 13,
        },
        {
          name: "Vanilla pudding",
          price: 600,
          categoryId: 8,
          restId: 12,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Dishes", null, {});
  },
};

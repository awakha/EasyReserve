const Sequelize = require("sequelize");

const { City, Restaurant, Dish, Review, Cuisine } = require("../../db/models");

exports.mainPage = async (req, res) => {
  try {
    const data = await Restaurant.findAll({
      attributes: [
        "name",
        "images",
        [Sequelize.col("City.name"), "cityName"],
        [Sequelize.fn("AVG", Sequelize.col("Reviews.score")), "avgScore"],
      ],
      include: [
        { model: Review, attributes: [] },
        { model: Cuisine, attributes: ["name"] },
        { model: City, attributes: ["name"] },
      ],
      group: ["Restaurant.id", "Reviews.id", "Cuisine.id", "City.id"],
    });

    res.json(data);
  } catch (error) {
    res.json({ status: 500, message: "An error occurred" });
  }
};

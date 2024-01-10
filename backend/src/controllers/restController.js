const Sequelize = require('sequelize');

const { City, Restaurant, Dish, Review, Cuisine } = require('../../db/models');

exports.mainPage = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Restaurant.findOne({
      where: { id },
      include: [
        { model: City, include: { model: Country } },
        { model: Dish },
        { model: Cuisine },
      ],
    });

    res.json(data);
  } catch (error) {
    console.log(error.message);
  }
};

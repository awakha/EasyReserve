const { Restaurant, City, Cuisine } = require("../../db/models");

exports.searchComponent = async (req, res) => {
  try {
    const restData = await Cuisine.findAll({
      include: [
        {
          model: Restaurant,
        },
      ],
      where: {
        name: req.body.countries,
      },
    });
    const restaurantData = restData[0].Restaurants.map((restaurant) => restaurant);
    res.json(restaurantData);
  } catch (error) {
    console.log(error.message);
  }
};

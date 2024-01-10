const { Restaurant, City, Country } = require("../../db/models");

exports.searchComponent = async (req, res) => {
  try {
    const restData = await Country.findAll({
      include: [
        {
          model: City,
          include: [
            {
              model: Restaurant,
            },
          ],
        },
      ],
      where: {
        name: req.body.countries,
      },
    });
    const restaurantData = restData[0].Cities.flatMap((city) =>
      city.Restaurants.map((restaurant) => restaurant)
    );

    res.json(restaurantData);
  } catch (error) {
    console.log(error.message);
  }
};

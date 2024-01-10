const Sequelize = require("sequelize");

const {
  City,
  Restaurant,
  Dishes,
  Review,
  Cuisine,
} = require("../../db/models");

exports.mainPage = async (req, res) => {
  try {
    const restData = await City.findAll({
      attributes: ["id", "name"],
      include: [
        {
          model: Restaurant,
          attributes: [
            "id",
            "name",
            "images",
            [
              Sequelize.fn("AVG", Sequelize.col("Reviews.score")),
              "averageScore",
            ],
            [
              Sequelize.fn("AVG", Sequelize.col("Dishes.price")),
              "averagePrice",
            ],
          ],
          include: [
            { model: Dishes, attributes: [] },
            { model: Review, attributes: [] },
            { model: Cuisine, attributes: ["name"] },
          ],
          group: ["Restaurant.id", "Cuisine.id"],
        },
      ],
    });

    // const data = await Restaurant.findAll({
    //   attributes: [
    //     'id',
    //     'name',
    //     [Sequelize.fn('AVG', Sequelize.col('Reviews.score')), 'averageScore'],
    //     [Sequelize.fn('AVG', Sequelize.col('Dishes.price')), 'averagePrice'],
    //   ],
    //   include: [
    //     { model: Review, attributes: [] },
    //     { model: Dishes, attributes: [] },
    //     { model: City, attributes: ['name'] },
    //     { model: Cuisine, attributes: ['name'] },
    //   ],
    //   group: ['Restaurant.id', 'City.id', 'Cuisine.id'],
    // });
    res.json(restData);
  } catch (error) {
    console.log(error.message);
  }
};

const Sequelize = require('sequelize');

const { Restaurant, Dish, Cuisine, Review, User } = require('../../db/models');

exports.getOne = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Restaurant.findOne({
      where: { id },
      attributes: {
        include: [
          [Sequelize.fn('AVG', Sequelize.col('Reviews.score')), 'avgScore'],
          [Sequelize.fn('COUNT', Sequelize.col('Reviews.id')), 'countReviews'],
        ],
      },
      include: [{ model: Dish }, { model: Cuisine }, { model: Review }],
      group: ['Restaurant.id', 'Dishes.id', 'Cuisine.id', 'Reviews.id'],
    });

    const reviews = await Review.findAll({
      where: { restId: id },
      include: { model: User, attributes: { exclude: ['password'] } },
    });

    res.json({ rests: data, reviews });
  } catch (error) {
    console.log(error.message);
  }
};

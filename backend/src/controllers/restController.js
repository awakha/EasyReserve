const Sequelize = require('sequelize');
const {
  Restaurant,
  Dish,
  Cuisine,
  Review,
  User,
  City,
  AvailableDateTime,
  Reservation,
} = require('../../db/models');

const timeSlots = function (n, start, end) {
  let result = [];

  for (let hours = start; hours < end; hours++) {
    for (let minutes = 0; minutes < 60; minutes = minutes + n) {
      let h = '';
      let m = '';
      if (hours < 10) {
        h = '0' + hours;
      } else {
        h = hours;
      }
      if (minutes < 10) {
        m = '0' + minutes;
      } else {
        m = minutes;
      }
      result.push(h + ':' + m);
    }
  }
  return result;
};

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
    res
      .status(500)
      .json({ message: 'Unexpected error occurred. Please, try again' });
  }
};

exports.getScheduleByRestId = async (req, res) => {
  try {
    const { id } = req.params;
    const schedule = await AvailableDateTime.findAll({
      where: {
        restId: id,
        date: {
          [Sequelize.Op.gte]: req.params.date,
        },
      },
    });

    const reservations = await Reservation.findAll({
      where: {
        restId: id,
        date: {
          [Sequelize.Op.gte]: req.params.date,
        },
      },
      attributes: [
        'startTime',
        'restId',
        'date',
        [
          Sequelize.fn('SUM', Sequelize.col('Reservation.guestsCount')),
          'reservedSpots',
        ],
      ],
      group: ['Reservation.startTime', 'Reservation.id'],
    });

    reservations.forEach((res) => {
      schedule.forEach((el) => {
        if (
          el.date === res.date &&
          parseInt(el.startTime) <= parseInt(res.startTime) &&
          parseInt(el.endTime) > parseInt(res.startTime)
        ) {
          el.guestsCount =
            Number(el.guestsCount) - Number(res.dataValues.reservedSpots);
        }
      });
    });

    const data = [];
    schedule.forEach((el) => {
      if (el.guestsCount > 0) {
        data.push({
          date: el.date,
          slots: timeSlots(30, parseInt(el.startTime), parseInt(el.endTime)),
          seats: el.guestsCount,
        });
      }
    });

    res.json(data);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Unexpected error occurred. Please, try again' });
  }
};

exports.getAllRestaurants = async (req, res) => {
  try {
    const data = await Restaurant.findAll({
      attributes: {
        include: [
          [Sequelize.fn('AVG', Sequelize.col('Reviews.score')), 'avgScore'],
          [Sequelize.fn('COUNT', Sequelize.col('Reviews.id')), 'countReviews'],
          [Sequelize.col('City.name'), 'city'],
        ],
      },
      include: [
        { model: Dish },
        { model: Cuisine },
        { model: City, attributes: [] },
        { model: Review, attributes: [] },
      ],
      group: [
        'Restaurant.id',
        'Dishes.id',
        'Cuisine.id',
        'Reviews.id',
        'City.id',
      ],
    });

    const reviews = await Review.findAll({
      include: {
        model: User,
        attributes: { exclude: ['password', 'refreshToken', 'email'] },
      },
      group: ['restId', 'Review.id', 'User.id'],
    });

    res.json({ rests: data, reviews });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Unexpected error occurred. Please, try again' });
  }
};

exports.mainPage = async (req, res) => {
  try {
    const restaurants = await Restaurant.findAll({
      attributes: {
        include: [
          [Sequelize.fn('AVG', Sequelize.col('Reviews.score')), 'avgScore'],
          [Sequelize.col('City.name'), 'city'],
          [Sequelize.col('Cuisine.name'), 'cuisine'],
        ],
      },
      include: [
        { model: City, attributes: [] },
        { model: Cuisine, attributes: [] },
        { model: Review, attributes: [] },
      ],
      group: ['Restaurant.id', 'City.name', 'Cuisine.name'],
    });

    const data = {};
    restaurants.forEach((rest) => {
      if (data[rest.dataValues.city]) {
        data[rest.dataValues.city] = [...data[rest.dataValues.city], rest];
      } else {
        data[rest.dataValues.city] = [rest];
      }
    });

    const cities = Object.keys(data);
    res.json({ data, cities });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Unexpected error occurred. Please, try again' });
  }
};

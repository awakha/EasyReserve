const Sequelize = require('sequelize');

const {
  Restaurant,
  Dish,
  Cuisine,
  Review,
  User,
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
    console.log(error.message);
  }
};

exports.getScheduleByRestId = async (req, res) => {
  try {
    const { id } = req.params;
    const schedule = await AvailableDateTime.findAll({ where: { restId: id } });
    const reservations = await Reservation.findAll({
      where: { restId: id },
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
          el.guestsCount = Number(el.guestsCount) - Number(res.reservedSpots);
        }
      });
    });

    const data = [];
    schedule.forEach((el) => {
      if (el.guestsCount) {
        data.push({
          date: el.date,
          slots: timeSlots(30, parseInt(el.startTime), parseInt(el.endTime)),
          seats: el.guestsCount,
        });
      }
    });

    res.json(data);
  } catch (error) {
    console.log(error.message);
  }
};

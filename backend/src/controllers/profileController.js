const { Reservation, Restaurant, Review, User } = require('../../db/models');

const { Op } = require('sequelize');
const today = new Date();
today.setHours(0, 0, 0, 0);

exports.getReservations = async (req, res) => {
  try {
    const userId = req.user.id;
    const data = await Reservation.findAll({
      raw: true,
      where: { userId },
      include: [{ model: Restaurant, attributes: ['name'] }],
    });
    console.log(data);
    res.json(data);
  } catch (error) {
    res.sendStatus(401);
  }
};

exports.getReservationsByAdmin = async (req, res) => {
  try {
    const data = await Reservation.findAll({
      raw: true,
      where: {
        date: {
          [Op.gte]: today,
        },
      },
      include: [
        { model: Restaurant, attributes: ['name'] },
        { model: User, attributes: ['username'] },
      ],
    });
    res.json(data);
  } catch (error) {
    res.sendStatus(401);
  }
};

exports.deleteReservation = async (req, res) => {
  try {
    const { reservationId } = req.params;
    await Reservation.destroy({ where: { id: reservationId } });
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(401);
  }
};

exports.postReview = async (req, res) => {
  try {
    const { score, text, restId } = req.body;
    const userId = req.user.id;
    const review = await Review.create({
      text,
      score: Number(score),
      restId: Number(restId),
      userId,
    });
    res.status(200).json(review);
  } catch (error) {
    console.log(error.message);
    res.sendStatus(401);
  }
};

const Sequelize = require('sequelize');

const { Reservation } = require('../../db/models');

exports.createBooking = async (req, res) => {
  try {
    console.log(req.body);
    await Reservation.create(req.body);
    res.json({
      status: 201,
      message:
        'Your reservation has been successfully created. An administrator will contact you soon!',
    });
  } catch (error) {
    res.json({ status: 500, message: 'An error occurred' });
  }
};

exports.cancelBooking = async (req, res) => {
  try {
    // to do
  } catch (error) {
    res.json({ status: 500, message: 'An error occurred' });
  }
};

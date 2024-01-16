const { Reservation } = require("../../db/models");

exports.getReservations = async (req, res) => {
  try {
    const userId = req.user.id;
    const data = await Reservation.findAll({ raw: true, where: { userId } });
    res.json(data);
  } catch (error) {
    res.sendStatus(401);
  }
};

exports.deleteReservation = async (req, res) => {
  try {
    const { reservationId } = req.params;
    console.log('---------------->>>>>>>>>>>>>>>>>', reservationId)
    await Reservation.destroy({ where: { id: reservationId } });
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(401);
  }
};

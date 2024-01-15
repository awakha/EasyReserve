const { Reservation } = require("../../db/models");

exports.getReservations = async (req, res) => {
    try {
    //   const userId = req.user.id;
      const data = await Reservation.findAll({ raw: true });
      console.log(data)
      res.json(data);
    } catch (error) {
      res.sendStatus(401);
    }
  };
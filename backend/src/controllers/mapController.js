const { Restaurant } = require("../../db/models");

exports.mapPage = async (req, res) => {
  try {
    const data = await Restaurant.findAll({ raw: true });
    res.json(data);
  } catch (error) {
    res, sendStatus(401);
  }
};

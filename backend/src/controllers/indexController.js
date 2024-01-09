const { Restaurant } = require('../../db/models');

exports.mainPage = async (req, res) => {
  const data = await Restaurant.findAll();
  res.send(data);
};

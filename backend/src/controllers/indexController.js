const { City } = require('../../db/models');

exports.mainPage = async (req, res) => {
  const data = await City.findOne();
  res.send(data);
};

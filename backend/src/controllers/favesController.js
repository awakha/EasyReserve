const { User } = require('../../db/models');

exports.toggleFaves = async (req, res) => {
  try {
    const { restId } = req.params;
    const userId = req.user.id;
    const user = await User.findOne({ where: { id: userId } });
    const index = user.faves.indexOf(restId);

    let newFaves;
    if (index > -1) {
      if (user.faves.length === 1) {
        newFaves = [];
      } else {
        newFaves = user.faves.filter((id) => id !== restId);
      }
    } else {
      newFaves = [...user.faves, restId];
    }

    user.update({ faves: newFaves });

    res.json({
      status: 200,
    });
  } catch (error) {
    res.json({ status: 500, message: 'An error occurred' });
  }
};

exports.getFaves = async (req, res) => {
  try {
    const usersFaves = await User.findOne({
      where: { id: req.user.id },
      attributes: ['faves'],
    });

    res.json(usersFaves);
  } catch (err) {
    console.log(err.message);
    res.json({ status: 500, message: 'An error occurred' });
  }
};

const ApiError = require("../exceptions/api-error");

module.exports = (req, res, next) => {
  try {
    const user = req.user;
    console.log(user);
    if (!user) {
      return res.json({status:401});
    }

    next();
  } catch (e) {
    return next(ApiError.UnauthorizedError());
  }
};

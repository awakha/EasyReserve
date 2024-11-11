const RequestValidator = require('../validation/request-validator');
const authService = require('../service/auth-service');

exports.register = async (req, res, next) => {
  try {
    const { email, password, username } = req.body;

    RequestValidator.validateRegisterRequest(username, email, password);
    const userData = await authService.registration(username, email, password);

    return res
      .status(200)
      .cookie('refreshToken', userData.refreshToken, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000,
      })
      .json(userData);
  } catch (e) {
    next(e);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    RequestValidator.validateLoginRequest(email, password);
    const userData = await authService.login(email, password);

    return res
      .status(200)
      .cookie('refreshToken', userData.refreshToken, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000,
      })
      .json(userData);
  } catch (e) {
    next(e);
  }
};

exports.refresh = async (req, res, next) => {
  try {
    const { refreshToken } = req.cookies;

    const userData = await authService.refresh(refreshToken);

    return res
      .status(200)
      .cookie('refreshToken', userData.refreshToken, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000,
      })
      .json(userData);
  } catch (e) {
    next(e);
  }
};

exports.logout = (req, res) => {
  return res.clearCookie('refreshToken').status(200).json();
};

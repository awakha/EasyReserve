const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserDto = require("../dto/user-dto");

const { User } = require("../../db/models");

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const MIN_PASSWORD_LENGTH = 6;
const DIGIT_REGEX = /\d/;
const UPPERCASE_LETTER_REGEX = /[A-Z]/;

const PASSWORD_ERROR_MSG =
  "Пароль должен содержать не менее 6 символов, одну цифру, одну букву в верхнем регистре";

exports.register = async (req, res) => {
  const { email, password, username } = req.body;

  if (!email || !password || !username) {
    return res.status(400).json({ error: "Заполните обязательные поля" });
  }

  if (!EMAIL_REGEX.test(email)) {
    return res.status(400).json({ error: "Не валидный email" });
  }

  const candidate = await User.findOne({ where: { email } });

  if (candidate) {
    return res
      .status(400)
      .json({ error: "Пользователь с таким email уже существует" });
  }

  if (password.length < MIN_PASSWORD_LENGTH) {
    return res.status(400).json({ error: PASSWORD_ERROR_MSG });
  }

  if (!DIGIT_REGEX.test(password)) {
    return res.status(400).json({ error: PASSWORD_ERROR_MSG });
  }

  if (!UPPERCASE_LETTER_REGEX.test(password)) {
    return res.status(400).json({ error: PASSWORD_ERROR_MSG });
  }

  const passwordHash = await bcrypt.hash(
    password,
    Number(process.env.HASH_SALT)
  );

  const accessToken = jwt.sign(
    { username, email },
    process.env.JWT_ACCESS_KEY,
    { expiresIn: "4h" }
  );

  const refreshToken = jwt.sign(
    { username, email },
    process.env.JWT_REFRESH_KEY,
    { expiresIn: "30d" }
  );

  const user = await User.create({
    username,
    email,
    password: passwordHash,
    refreshToken,
  });

  return res
    .status(200)
    .cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60 * 1000,
    })
    .json({ accessToken: `Bearer ${accessToken}`, user: new UserDto(user) });
};

exports.logout = (req, res) => {
  return res.clearCookie("refreshToken").status(200).json();
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Заполните обязательные поля" });
  }

  if (!EMAIL_REGEX.test(email)) {
    return res.status(400).json({ error: "Не валидный email" });
  }

  const user = await User.findOne({ where: { email } });

  if (!user) {
    return res.status(400).json({ error: "Введены неверные данные" });
  }

  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword) {
    return res.status(400).json({ error: "Введены неверные данные" });
  }
  const accessToken = jwt.sign(
    { username: user.username, email: user.email },
    process.env.JWT_ACCESS_KEY,
    { expiresIn: "4h" }
  );

  const refreshToken = jwt.sign(
    { username: user.username, email: user.email },
    process.env.JWT_REFRESH_KEY,
    { expiresIn: "30d" }
  );

  user.refreshToken = refreshToken;

  user.save();

  return res
    .status(200)
    .cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60 * 1000,
    })
    .json({ accessToken: `Bearer ${accessToken}`, user: new UserDto(user) });
};

exports.refresh = async (req, res) => {
  const { refreshToken } = req.cookies;

  if (!refreshToken) {
    return res.status(401).json();
  }

  const userData = jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY);

  if (!userData) {
    return res.status(401).json();
  }

  const user = await User.findOne({ where: { email: userData.email } });

  const accessToken = jwt.sign(
    { username: user.username, email: user.email },
    process.env.JWT_ACCESS_KEY,
    { expiresIn: "4h" }
  );

  const updatedRefreshToken = jwt.sign(
    { username: user.username, email: user.email },
    process.env.JWT_REFRESH_KEY,
    { expiresIn: "30d" }
  );

  user.refreshToken = refreshToken;

  user.save();

  return res
    .status(200)
    .cookie("refreshToken", updatedRefreshToken, {
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60 * 1000,
    })
    .json({ accessToken: `Bearer ${accessToken}`, user: new UserDto(user) });
};

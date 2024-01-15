const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserDto = require("../dto/user-dto");
const ApiError = require("../exceptions/api-error");

const { User } = require("../../db/models");
const ACCESS_TOKEN_EXPORATION = "4h";
const REFRESH_TOKEN_EXPORATION = "30d";
class AuthService {
  generateTokens(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_KEY, {
      expiresIn: ACCESS_TOKEN_EXPORATION,
    });

    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_KEY, {
      expiresIn: REFRESH_TOKEN_EXPORATION,
    });

    return { accessToken, refreshToken };
  }

  async registration(username, email, password) {
    const candidate = await User.findOne({ where: { email } });

    if (candidate) {
      throw ApiError.BadRequest("Пользователь с таким email уже существует");
    }

    const passwordHash = await bcrypt.hash(
      password,
      Number(process.env.HASH_SALT)
    );

    const tokens = this.generateTokens({ username, email });

    const user = await User.create({
      username,
      email,
      password: passwordHash,
      refreshToken: tokens.refreshToken,
    });

    return { ...tokens, user: new UserDto(user) };
  }

  async login(email, password) {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw ApiError.BadRequest("Пользователь с таким email не найден");
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      throw ApiError.BadRequest("Введены неверные данные");
    }

    const tokens = this.generateTokens({
      username: user.username,
      email: user.email,
    });

    user.refreshToken = tokens.refreshToken;

    user.save();

    return { ...tokens, user: new UserDto(user) };
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ApiError.UnauthorizedError();
    }

    const userData = jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY);

    if (!userData) {
      throw ApiError.UnauthorizedError();
    }

    const user = await User.findOne({ where: { email: userData.email } });

    const tokens = this.generateTokens({
      username: user.username,
      email: user.email,
    });

    user.refreshToken = tokens.refreshToken;

    user.save();

    return { ...tokens, user: new UserDto(user) };
  }
}

module.exports = new AuthService();

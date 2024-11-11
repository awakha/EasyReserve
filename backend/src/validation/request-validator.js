const ApiError = require("../exceptions/api-error");

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const INVALID_EMAIL_MESSAGE = "Не валидный email";
const EMAIL_FIELD_REQUIRED_MESSAGE = "Поле email не заполнено";

const MIN_PASSWORD_LENGTH = 6;
const DIGIT_REGEX = /\d/;
const UPPERCASE_LETTER_REGEX = /[A-Z]/;

const PASSWORD_ERROR_MSG =
  "Пароль должен содержать не менее 6 символов, одну цифру, одну букву в верхнем регистре";

const REQUIRED_FIELDS_MESSAGE = "Заполните обязательные поля";

module.exports = class AuthValidation {
  static validateEmail(email) {
    if (!email) {
      throw ApiError.BadRequest(EMAIL_FIELD_REQUIRED_MESSAGE);
    }

    if (!EMAIL_REGEX.test(email)) {
      throw ApiError.BadRequest(INVALID_EMAIL_MESSAGE);
    }
  }

  static validatePassword(password) {
    if (password.length < MIN_PASSWORD_LENGTH) {
      throw ApiError.BadRequest(PASSWORD_ERROR_MSG);
    }

    if (!DIGIT_REGEX.test(password)) {
      throw ApiError.BadRequest(PASSWORD_ERROR_MSG);
    }

    if (!UPPERCASE_LETTER_REGEX.test(password)) {
      throw ApiError.BadRequest(PASSWORD_ERROR_MSG);
    }
  }

  static validateRegisterRequest(username, email, password) {
    if (!email || !password || !username) {
      throw ApiError.BadRequest(REQUIRED_FIELDS_MESSAGE);
    }
    this.validateEmail(email);
    this.validatePassword(password);
  }

  static validateLoginRequest(email, password) {
    if (!email || !password) {
      throw ApiError.BadRequest(REQUIRED_FIELDS_MESSAGE);
    }
    this.validateEmail(email);
  }
};

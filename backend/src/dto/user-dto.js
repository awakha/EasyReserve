module.exports = class UserDto {
  id;
  email;
  username;
  isAdmin;

  constructor(model) {
    this.email = model.email;
    this.id = model.id;
    this.username = model.username;
    this.isAdmin = model.isAdmin;
  }
};

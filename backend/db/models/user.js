'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasMany(models.Review, { foreignKey: 'userId' });
      this.hasMany(models.Reservation, { foreignKey: 'userId' });
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      refreshToken: DataTypes.STRING,
      isAdmin: DataTypes.BOOLEAN,
      faves: DataTypes.ARRAY(DataTypes.TEXT),
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};

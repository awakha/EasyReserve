'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservation extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userId' });
      this.hasMany(models.Restaurant, { foreignKey: 'restId' });
    }
  }
  Reservation.init(
    {
      date: DataTypes.DATEONLY,
      guestsCount: DataTypes.INTEGER,
      startTime: DataTypes.TIME,
      restId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Reservation',
    }
  );
  return Reservation;
};

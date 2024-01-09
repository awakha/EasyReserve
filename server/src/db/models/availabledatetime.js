'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AvailableDateTime extends Model {
    static associate(models) {
      this.belongsTo(models.Restaurant, { foreignKey: 'restId' });
    }
  }
  AvailableDateTime.init(
    {
      date: DataTypes.DATEONLY,
      startTime: DataTypes.TIME,
      endTime: DataTypes.TIME,
      guestsCount: DataTypes.INTEGER,
      restId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'AvailableDateTime',
    }
  );
  return AvailableDateTime;
};

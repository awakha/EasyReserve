'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Timetable extends Model {
    static associate(models) {
      this.hasMany(models.Restaurant, { foreignKey: 'timetableId' });
    }
  }
  Timetable.init(
    {
      openTime: DataTypes.TIME,
      closeTime: DataTypes.TIME,
    },
    {
      sequelize,
      modelName: 'Timetable',
    }
  );
  return Timetable;
};

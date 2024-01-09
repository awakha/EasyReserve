'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Restaurant extends Model {
    static associate(models) {
      this.hasMany(models.AvailableDateTime, { foreignKey: 'restId' });
      this.belongsTo(models.City, { foreignKey: 'cityId' });
      this.belongsTo(models.Cuisine, { foreignKey: 'cuisineId' });
      this.hasMany(models.Dish, { foreignKey: 'restId' });
      this.hasMany(models.Review, { foreignKey: 'restId' });
      this.belongsTo(models.Timetable, { foreignKey: 'timetableId' });
      this.hasMany(models.Reservation, { foreignKey: 'restId' });
    }
  }
  Restaurant.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      address: DataTypes.STRING,
      images: DataTypes.ARRAY(DataTypes.TEXT),
      cuisineId: DataTypes.INTEGER,
      cityId: DataTypes.INTEGER,
      timetableId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Restaurant',
    }
  );
  return Restaurant;
};

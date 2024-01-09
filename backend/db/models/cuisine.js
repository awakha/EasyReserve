'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cuisine extends Model {
    static associate(models) {
      this.hasMany(models.Restaurant, { foreignKey: 'cuisineId' });
    }
  }
  Cuisine.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Cuisine',
    }
  );
  return Cuisine;
};

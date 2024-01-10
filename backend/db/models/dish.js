'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dish extends Model {
    static associate(models) {
      this.belongsTo(models.Category, { foreignKey: 'categoryId' });
      this.belongsTo(models.Restaurant, { foreignKey: 'restId' });
    }
  }
  Dish.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
      restId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Dish',
    }
  );
  return Dish;
};

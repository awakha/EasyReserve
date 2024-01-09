'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dishes extends Model {
    static associate(models) {
      this.belongsTo(models.Category, { foreignKey: 'categoryId' });
      this.belongsTo(models.Restaurant, { foreignKey: 'restId' });
    }
  }
  Dishes.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
      restId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Dishes',
    }
  );
  return Dishes;
};

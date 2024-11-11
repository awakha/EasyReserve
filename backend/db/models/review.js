'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userId' });
      this.belongsTo(models.Restaurant, { foreignKey: 'restId' });
    }
  }
  Review.init(
    {
      text: DataTypes.TEXT,
      images: DataTypes.ARRAY(DataTypes.TEXT),
      score: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      restId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Review',
    }
  );
  return Review;
};

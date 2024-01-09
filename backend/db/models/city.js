'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    static associate(models) {
      this.belongsTo(models.Country, { foreignKey: 'countryId' });
      this.hasMany(models.Restaurant, { foreignKey: 'restId' });
    }
  }
  City.init(
    {
      name: DataTypes.STRING,
      countryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'City',
    }
  );
  return City;
};

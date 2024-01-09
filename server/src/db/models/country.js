'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Country extends Model {
    static associate(models) {
      this.hasMany(models.City, { foreignKey: 'countryId' });
    }
  }
  Country.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Country',
    }
  );
  return Country;
};

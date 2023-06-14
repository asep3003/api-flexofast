'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mitra extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  mitra.init({
    name: DataTypes.STRING,
    img: DataTypes.CHAR
  }, {
    sequelize,
    modelName: 'mitra',
  });
  return mitra;
};
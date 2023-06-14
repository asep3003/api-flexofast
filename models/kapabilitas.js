'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kapabilitas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  kapabilitas.init({
    name: DataTypes.TEXT,
    service: DataTypes.CHAR,
    description: DataTypes.TEXT,
    img: DataTypes.CHAR,
  }, {
    sequelize,
    modelName: 'kapabilitas',
  });
  return kapabilitas;
};
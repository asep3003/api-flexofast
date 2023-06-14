'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class blog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  blog.init({
    title: DataTypes.TEXT,
    posted_on: DataTypes.DATE,
    type: DataTypes.STRING,
    description: DataTypes.TEXT,
    img: DataTypes.CHAR
  }, {
    sequelize,
    modelName: 'blog',
  });
  return blog;
};
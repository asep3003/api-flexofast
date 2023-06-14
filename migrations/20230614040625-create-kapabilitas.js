'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('kapabilitas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.TEXT
      },
      service: {
        type: Sequelize.CHAR
      },
      description: {
        type: Sequelize.TEXT
      },
      img: {
        type: Sequelize.CHAR
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('kapabilitas');
  }
};
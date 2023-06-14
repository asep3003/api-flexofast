'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('blogs', [
      {
        title: '4 Online Business Problems That Fulfillment Services Can Solve',
        posted_on: '2022-03-21',
        type: 'Bussiness',
        description: 'Lorem ipsum dolor sit amet.',
        img: 'blog1.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Fulfillment Models in E-commerce Business',
        posted_on: '2022-03-21',
        type: 'Bussiness',
        description: 'Lorem ipsum dolor sit amet.',
        img: 'blog2.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Guaranteed Anti Complaints, Here is a Fulfillment Service-style Packing Trick',
        posted_on: '2022-03-21',
        type: 'Bussiness',
        description: 'Lorem ipsum dolor sit amet.',
        img: 'blog3.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'How Important is Warehouse in Fulfillment Services',
        posted_on: '2022-03-21',
        type: 'Bussiness',
        description: 'Lorem ipsum dolor sit amet.',
        img: 'blog4.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

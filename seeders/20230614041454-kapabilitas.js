'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('kapabilitas', [
      {
        name: 'Layanan Pemenuhan',
        service: 'FLEXOFAST',
        description: 'Lorem ipsum dolor sit amet.',
        img: 'image 53.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Manajemen E-Commerce',
        service: 'FLEXOCOMMERCE',
        description: 'Lorem ipsum dolor sit amet.',
        img: 'image 54.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Pengiriman',
        service: 'FLEXOTRANS',
        description: 'Lorem ipsum dolor sit amet.',
        img: 'image 55.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Food Delivery',
        service: 'FLEXOFOOD',
        description: 'Lorem ipsum dolor sit amet.',
        img: 'image 55.png',
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

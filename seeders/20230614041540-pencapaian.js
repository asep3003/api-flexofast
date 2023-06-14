'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pencapaians', [
      {
        name: 'IDR 2 T',
        description: 'GMV Processed',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '15',
        description: 'Last mile courier partners',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '3 Million',
        description: 'Unique SKU',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '20 Million',
        description: 'Package Handled',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '25',
        description: 'E-commerce Integration',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '99%',
        description: 'SLA Commitment',
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

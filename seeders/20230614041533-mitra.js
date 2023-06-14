'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('mitras', [
      {
        name: 'INDOPAKET',
        img: 'indopaket.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'First Logistic',
        img: 'firstlogistic.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'GC Express',
        img: 'gcexpress.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'SAP Express',
        img: 'sapexpress.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sicepat',
        img: 'sicepat.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'JNT',
        img: 'jnt.png',
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

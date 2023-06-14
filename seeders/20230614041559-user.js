'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Wagiyanto',
        username: 'wagiyanto',
        company: 'APC Deca Group (Whitelab)',
        img: 'wagiyanto.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Melisa Oktaviani',
        username: 'melisa',
        company: 'Personal Care Team Manager (Cetaphil)',
        img: 'melisa.png',
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

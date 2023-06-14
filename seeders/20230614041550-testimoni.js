'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('testimonis', [
      {
        user_id: 1,
        testimony: 'FLEXOFAST memberikan pelayanan terbaik untuk penanganan operasional kami, layanan yang diberikan sangat profesional & fleksibel sesuai dengan kebutuhan operasional yang cukup kompleks sehingga kebutuhan kami dapat terpenuhi dengan baik.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        testimony: 'Sejak Eblo menggunakan layanan Flexofast, pesanan kami terisi dengan baik dan pengiriman lebih efisien. Produk kami tidak ada minus dan packaging sangat rapi. Dengan tim Flexofast yang maksimal dalam menangani brand kami, pelanggan sangat puas karena proses pengiriman yang sangat cepat.',
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

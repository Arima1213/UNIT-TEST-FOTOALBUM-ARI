'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('photos',[
    {
      title: 'foto jadul',
      caption: 'ini deskripsi foto jadul',
      image_url: 'https://fotojadul.com',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'foto kenangan',
      caption: 'ini deskripsi foto kenangan',
      image_url: 'https://fotokenangan.com',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'foto liburan',
      caption: 'ini deskripsi foto liburan',
      image_url: 'https://fotoliburan.com',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'foto malming',
      caption: 'ini deskripsi foto malming',
      image_url: 'https://fotomalming.com',
      userId: 1,
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

'use strict';

const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn("photos", "userId",{
      type: Sequelize.INTEGER
    })

    await queryInterface.addConstraint("photos",{
      fields: ["userId"],
      type: "foreign key",
      name: "user_fk",
      references: {
        table: "users",
        field: "id"
      },

      onDelete: "cascade",
      onUpdate: "cascade"
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint("photos","user_fk")
    await queryInterface.removeColumn("photos", "userId")
  }
};

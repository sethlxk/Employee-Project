"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert(
      "departments",
      [
        {
          department_id: 1,
          name: "Admin",
          createdAt: "2023-07-03T08:00:23.979Z",
          updatedAt: "2023-07-03T08:00:23.979Z",
        },
        {
          department_id: 2,
          name: "PS",
          createdAt: "2023-07-03T08:00:23.979Z",
          updatedAt: "2023-07-03T08:00:23.979Z",
        },
        {
          department_id: 3,
          name: "HR",
          createdAt: "2023-07-03T08:00:23.979Z",
          updatedAt: "2023-07-03T08:00:23.979Z",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

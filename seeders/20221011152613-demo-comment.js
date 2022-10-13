
'use strict';
const { faker } = require('@faker-js/faker/locale/pl');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    for (let i = 0; i < 15; i++) { 
      let date = faker.date.past();
      await queryInterface.bulkInsert('Comments', [{
        message: faker.lorem.paragraph(),
        author: faker.name.fullName(),
        createdAt: date,
        updatedAt: date,
        deletedAt: null
      }]);
    }
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Comments', null, {});
  }
};

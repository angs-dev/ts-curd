'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('customers', {
      Id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      StoreId: {
        type: Sequelize.INTEGER
      },
      Firstname: {
        type: Sequelize.STRING
      },
      Lastname: {
        type: Sequelize.STRING
      },
      Phone: {
        type: Sequelize.STRING
      },
      Email: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('customers');
  }
};
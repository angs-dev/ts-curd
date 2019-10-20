'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('stores', {
      ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Phone: {
        type: Sequelize.STRING
      },
      Name: {
        type: Sequelize.STRING
      },
      Domain: {
        type: Sequelize.STRING
      },
      Status: {
        type: Sequelize.STRING
      },
      Street: {
        type: Sequelize.STRING
      },
      State: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('stores');
  }
};
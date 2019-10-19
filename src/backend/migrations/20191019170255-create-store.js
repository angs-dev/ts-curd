'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('stores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ID: {
        type: Sequelize.NUMBER
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
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('stores');
  }
};
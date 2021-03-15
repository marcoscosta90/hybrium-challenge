'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },     
      password: {
        type: Sequelize.STRING,
        allowNull: true,
      },  
      cpf: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      phone: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      occupation: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      workstarts: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      workends: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      lunchstarts: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      lunchends: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },


  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};

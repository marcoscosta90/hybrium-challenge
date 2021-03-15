'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.addColumn('users', 'islogged',
      { 
          type: Sequelize.BOOLEAN
        });
    },

  down: async (queryInterface, Sequelize) => {
  
     await queryInterface.removeColumn(
       'users',
       'islogged'
       );     
  }
};

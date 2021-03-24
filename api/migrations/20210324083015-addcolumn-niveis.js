'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Niveis', 'deletedAt', {
      allowNull: true,
      type: Sequelize.DATE, // constrains
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Niveis', 'deletedAt');
  },
};

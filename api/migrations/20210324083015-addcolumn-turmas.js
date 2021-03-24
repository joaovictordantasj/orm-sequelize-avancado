'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Turmas', 'deletedAt', {
      allowNull: true,
      type: Sequelize.DATE, // constrains
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Turmas', 'deletedAt');
  },
};

'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('InstalledApps', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.STRING,
        defaultValue: false,
        allowNull: false
      },
      applicationId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Applications'
          },
          key: 'id'
        },
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then((queryInterface, Sequelize) => {
      queryInterface.addIndex(
          'InstalledApps_indx',
          ['userId', 'applicationId'],
          {
            indicesType: 'UNIQUE',
            where: { bool : 'true' },
          }
      );
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.deleteIndex('InstalledApps_indx');
    await queryInterface.dropTable('InstalledApps');
  }
};

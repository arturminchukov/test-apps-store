'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Applications', [
			{
				name: 'Facebook',
				category: 'Messenger',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'Instagram',
				category: 'messenger',
				createdAt: new Date(),
				updatedAt: new Date()
			}, {
				name: 'TravelSun',
				category: 'travel',
				createdAt: new Date(),
				updatedAt: new Date()
			}, {
				name: 'VK',
				category: 'messenger',
				createdAt: new Date(),
				updatedAt: new Date()
			}, {
				name: 'VideoEditor',
				category: 'video',
				createdAt: new Date(),
				updatedAt: new Date()
			}, {
				name: 'KMPlayer',
				category: 'messenger',
				createdAt: new Date(),
				updatedAt: new Date()
			}, {
				name: 'Youtube',
				category: 'video',
				createdAt: new Date(),
				updatedAt: new Date()
			}
		]);
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Applications', null, {});
	}
};

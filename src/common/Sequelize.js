const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('apps_test', 'root', 'admin', {
	host: 'localhost',
	dialect: 'mysql'
});

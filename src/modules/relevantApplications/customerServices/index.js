const { GoldCustomerService } = require('./GoldCustomerService');
const { BronzeCustomerService } = require('./BronzeCustomerService');

module.exports = {
	'gold': new GoldCustomerService(),
	'bronze': new BronzeCustomerService()
};

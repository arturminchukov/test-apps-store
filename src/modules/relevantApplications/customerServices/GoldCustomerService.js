const { BaseCustomerService } = require('./BaseCustomerService');

class GoldCustomerService extends BaseCustomerService {
	getApps(category) {
		super.getApps(category);
		return ;
	}
}

module.exports = {GoldCustomerService}

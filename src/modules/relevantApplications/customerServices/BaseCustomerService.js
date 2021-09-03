const { relevantApplicationsRepository } = require('../relevantApplications.repository');

class BaseCustomerService {
	appsRepo = relevantApplicationsRepository;
	getApps(category) {
	}
}

module.exports = { BaseCustomerService };

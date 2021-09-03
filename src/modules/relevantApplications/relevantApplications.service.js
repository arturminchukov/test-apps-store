const customerTypes = require('./customerServices');

class RelevantApplicationsService {
	async get(category, customerType) {
		const customerService = customerTypes[customerType];
		return customerService.getApps(category);
	}
}

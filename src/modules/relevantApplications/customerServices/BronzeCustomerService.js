const { BaseCustomerService } = require('./BaseCustomerService');

class BronzeCustomerService extends BaseCustomerService {
	numberOfRandomApps = 2;

	async getApps(category) {
		super.getApps(category);
		const apps = await this.appsRepo.get(category);
		const result = [];
		let i = this.numberOfRandomApps;

		if (apps.length <= 2) {
			return apps;
		}

		while (i > 0) {
			const ind = this.getRandomInt(0, apps.length);
			result.push(apps.splice(ind, 1));
			i--;
		}
		return apps;
	}

	getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
	}
}

module.exports = { BronzeCustomerService };

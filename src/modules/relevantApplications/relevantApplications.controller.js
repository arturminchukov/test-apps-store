const { Controller } = require('../../common');
const customerTypes = require('./customerServices');

class RelevantApplicationsController extends Controller {
	requiredFields = ['Category', 'CustomerType'];

	handleRequest(req, res) {
		super.handleRequest(req, res);
	}

	validate(req, res) {
		super.validate(req, res);
		const isSuchCustomerTypeExist = Object.keys(customerTypes).includes(this.req.params[this.requiredFields[1]]);
		const isAllFieldsAreValid = this.requiredFields.every(field => this.req.params[field]);
		if (!isAllFieldsAreValid && !isSuchCustomerTypeExist) {
			throw new Error('400, Invalid input');
		}
	}
}

module.exports = {
	controller: new RelevantApplicationsController()
};

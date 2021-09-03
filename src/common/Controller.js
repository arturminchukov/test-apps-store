class Controller {
	validate(req, res) {
	}

	setUser(req, res) {
		req.user = req.session;
	}

	initRequest(req, res) {
		try {
			this.validate(req, res);
		} catch (e) {
			console.error('Validate error: ', e.message);
			return res.end(e.message);
		}

		this.setUser(req, res);
		this.handleRequest(req, res);
	}

	handleRequest(req, res) {
	}
}

module.exports = Controller;

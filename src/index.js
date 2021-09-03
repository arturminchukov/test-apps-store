const http = require('http');
const port = 3000;
const modules = require('./modules');

const requestHandler = (req, res) => {
	parseUrl(req, res);
	if (req.urlPath === '/v1/relevantApplication' && req.method === 'GET') {
		return modules.relevantApplicationsModule.controller.initRequest(req, res);
	} else if (req.urlPath === '/v1/installedApps' && req.method === 'POST') {
		res.end('installedApps');
	} else {
		res.statusCode = 404;
		res.end('404: File Not Found');
	}
};

function parseUrl(req, res) {
	let [path, params] = req.url.split('?');
	req.urlPath = path;

	if(params){
		params = params.split('&');
		req.params = {};
		params.forEach(p => {
			const [key,  value] = p.split('=');
			req.params[key] = value;
		})
	}
}

const server = http.createServer(requestHandler);
server.listen(port, (err) => {
	if (err) {
		return console.log('Could  not start the server', err);
	}
	console.log(`server is listening on ${port}`);
})

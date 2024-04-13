const fs = require('fs');
const path = require('path');

function doEndpoint(req, res) {
	const url = req.url;
	try {
		//console.log(path.normalize(path.resolve(`_api${url}/endpoint.js`)));
		//let endpoint = require(`../../_api${url}/endpoint.js`);
		let endpoint = require(path.normalize(path.resolve(`_api${url}/endpoint.js`)));
		endpoint(req, res);
	} catch (err) {
		res.statusCode = 400;
		//console.log(err);
		res.end();
	}
}

module.exports = doEndpoint;

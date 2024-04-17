const fs = require('fs');
const path = require('path');

function doEndpoint(req, res) {
	const url = req.url;
	try {
		let endpoint = require(path.normalize(path.resolve(`_routes${url}/endpoint.js`)));
		endpoint(req, res);
	} catch (err) {
		res.status(400);
		//console.log(err);
		res.end(err);
	}
}

module.exports = doEndpoint;

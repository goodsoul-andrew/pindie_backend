const http = require('http');
const path = require('path');
const { staticFile, doEndpoint } = require('./app-modules/http-utils');

const server = http.createServer((req, res) => {
	const url = req.url;
	switch (url) {
		default:
			if (path.extname(url) === '') {
				doEndpoint(req, res);
			} else {
				staticFile(res, url);
			}
	}
});

server.listen(3000);

//console.log('running on:    http://localhost:3000/');

const http = require('http');
const path = require('path');
const { staticFile, doEndpoint } = require('./app-modules/http-utils');
const { mainController, gameController, voteController } = require('./app-modules/controllers');


const server = http.createServer((req, res) => {
	const url = req.url;
	switch (url) {
    case "/":
      mainController(req, res);
      break;
    case "/game":
      gameController(req, res);
      break;
    case "/vote":
      voteController(req, res);
      break;
		default:
			if (path.extname(url) === '') {
				doEndpoint(req, res);
			} else {
				staticFile(res, url);
			}
	}
});

server.listen(3000);


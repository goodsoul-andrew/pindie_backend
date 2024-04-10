const http = require("http")
const staticFile = require("./app-modules/http-utils/static-file")


const server = http.createServer((req, res) => {
  const url = req.url;
	switch (url) {
		case '/':
			staticFile(res, '/index.html');
			break;
		default:
			staticFile(res, url);
	}
})

server.listen(3000);

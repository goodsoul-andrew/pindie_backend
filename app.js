const http = require("http")
const path = require("path");
const staticFile = require("./app-modules/http-utils/static-file")
const doEndpoint = require("./app-modules/utils/do-endpoint")


const server = http.createServer((req, res) => {
  const url = req.url;
	switch (url) {
		case '/':
			staticFile(res, '/index.html');
			break;
		default:
      if (path.extname(url) === "") {
        doEndpoint(req, res);
      }
      else {
        staticFile(res, url);
      }
	}
})

server.listen(3000);

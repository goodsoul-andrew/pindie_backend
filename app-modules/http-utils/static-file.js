const fs = require('fs');
const mimeTypes = require('./mime-types');
const path = require("path")

function staticFile(res, filePath) {
  const ext = path.extname(filePath).toLowerCase();
	res.setHeader('Content-Type', mimeTypes[ext]);
	fs.readFile(path.join("./public", filePath), (err, data) => {
		if (err) {
			res.statusCode = 404;
			res.end('Not Found');
		}
    res.statusCode = 200;
		res.end(data);
	});
}

module.exports = staticFile;

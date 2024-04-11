const fs = require('fs');
const mimeTypes = require('./mime-types');
const path = require("path")

function staticFile(res, filePath) {
	//console.log(filePath);
  const ext = path.extname(filePath).toLowerCase();
  if (ext in mimeTypes) {
    res.setHeader('Content-Type', mimeTypes[ext]);
		fs.readFile(path.join('./public', filePath), (err, data) => {
			if (err) {
				res.statusCode = 404;
				res.end(`${filePath} not found`);
			}
			res.statusCode = 200;
			res.end(data);
		});
  }
  else {
    res.statusCode = 404;
		res.end(`${filePath} not found`);
  }
}

module.exports = staticFile;

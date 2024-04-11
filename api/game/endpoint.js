const fs = require('fs');
const path = require("path");


async function gameRouteController(req, res) {
	fs.readFile(path.resolve('dataset/rating.json'), (err, ratingFile) => {
		if (err) {
      console.log(err);
			res.statusCode = 500;
			res.end('Internal Server Error');
		}
		const data = JSON.parse(ratingFile);
		const game = data[0];
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(game));
	});
}


module.exports = gameRouteController;
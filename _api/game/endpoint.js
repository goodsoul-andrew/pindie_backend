const fs = require('fs');
const path = require('path');
const { PATH_TO_RATING_FILE } = require('../../app-modules/rating/config');
const randomChoice = require('../../app-modules/utils/choice.js');

async function gameRouteController(req, res) {
	//console.log(PATH_TO_RATING_FILE)
	fs.readFile(path.resolve(PATH_TO_RATING_FILE), (err, ratingFile) => {
		if (err) {
			//console.log(err);
			res.statusCode = 500;
			res.end('Internal Server Error');
		}
		const data = JSON.parse(ratingFile);
		const game = randomChoice(data);
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(game));
	});
}

module.exports = gameRouteController;

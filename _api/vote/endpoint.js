const parseBody = require('../../app-modules/http-utils/parse-body');
const { updateRating, PATH_TO_RATING_FILE } = require('../../app-modules/rating');
const { getData } = require('../../app-modules/request-utils');
const fs = require('fs').promises;

async function voteRouteController(req, res) {
	if (req.method !== 'POST') {
		res.statusCode = 400;
		res.end('Bad request');
	} else {
		try {
			const body = await parseBody(req);
			//console.log(body);
			const data = JSON.parse(body);
			//console.log(data, PATH_TO_RATING_FILE);
			const ratingFile = await fs.readFile(PATH_TO_RATING_FILE);
			//console.log(ratingFile);
			const ratingArray = JSON.parse(ratingFile);
			//console.log(ratingArray);
			const newRating = updateRating(ratingArray, data);
			//console.log(newRating);
			await fs.writeFile(PATH_TO_RATING_FILE, JSON.stringify(newRating, undefined, 2));
			res.setHeader('Content-Type', 'application/json');
			res.statusCode = 200;
			res.end(JSON.stringify(newRating.sort((a, b) => b.rating - a.rating)));
		} catch (err) {
			res.statusCode = 500;
			res.end(`Internal Server ${err}`);
		}
	}
}

module.exports = voteRouteController;

const games = require('../../models/game');

async function findGames(req, res, next) {
	let criteria = req.query;
	//console.log(criteria);
	if (req.query['categories.name']) {
		req.games = await games.findGamesByCategory(req.query['categories.name']);
		next();
	}
	try {
		req.games = await games.find(criteria).populate('categories').populate({ path: 'users', select: '-password' });
		next();
	} catch (error) {
		console.log(error);
		res.status(404).send({ message: 'Games not found' });
		return;
	}
}

module.exports = findGames;

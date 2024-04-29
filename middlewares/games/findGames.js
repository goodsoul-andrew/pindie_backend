const games = require('../../models/game');

async function findGames(req, res, next) {
	let criteria = req.query;
	criteria;
	'/games GET', criteria;
	try {
		req.games = await games.find(criteria).populate('categories').populate({ path: 'users', select: '-password' });
		next();
	} catch (error) {
		res.status(404).send({ message: 'Game not found' });
	}
}

module.exports = findGames;

const games = require('../../models/game');

async function createGame(req, res, next) {
	('POST /games');
	try {
		req.game = await games.create(req.body);
		next();
	} catch (error) {
		console.log(error);
		res.status(400).send('Error creating game');
	}
}

module.exports = createGame;

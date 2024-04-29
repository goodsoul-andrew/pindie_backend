const games = require('../../models/game');

function findGameByIdJSON(req, res, next) {
	const id = Number(req.params.id);
	req.game = req.games.find((item) => item.id === id);
	next();
}

const findGameById = async (req, res, next) => {
	try {
		req.game = await games
			.findById(req.params.id)
			.populate('categories')
			.populate({ path: 'users', select: '-password' });
		next();
	} catch (error) {
		res.status(404).send({ message: 'Game not found' });
	}
};

module.exports = findGameById;

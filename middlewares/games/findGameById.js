const games = require('../../models/game');

const findGameById = async (req, res, next) => {
	try {
		req.game = await games
			.findById(req.params.id)
			.populate('categories')
			.populate({ path: 'users', select: '-password' });
		next();
	} catch (error) {
		console.log(error);
		res.status(404).send({ message: 'Game not found' });
	}
};

module.exports = findGameById;

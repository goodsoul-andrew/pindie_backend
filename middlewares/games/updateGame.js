const games = require('../../models/game');

const updateGame = async (req, res, next) => {
	try {
		req.game = await games.findByIdAndUpdate(req.params.id, req.body);
		next();
	} catch (error) {
		console.log(error);
		res.status(400).send({ message: 'Error updating game' });
	}
};

module.exports = updateGame;

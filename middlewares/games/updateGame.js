const games = require('../../models/game');

const updateGame = async (req, res, next) => {
	try {
		//console.log("body", req.body);
		req.game = await games.findByIdAndUpdate(req.params.id, req.body);
		next();
	} catch (error) {
		console.log(error);
		res.status(400).send({ message: 'Error updating game' });
		return;
	}
};

module.exports = updateGame;

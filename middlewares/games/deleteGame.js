const games = require("../../models/game")

const deleteGame = async (req, res, next) => {
	try {
		req.game = await games.findByIdAndDelete(req.params.id);
		next();
	} catch (error) {
		console.log(error);
		res.status(400).send({ message: 'Error deleting game' });
		return;
	}
};

module.exports = deleteGame;

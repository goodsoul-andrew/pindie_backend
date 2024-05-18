const games = require('../../models/game');

const updateGameUsers = async (req, res, next) => {
	try {
		//console.log(req.params.id);
		const game = await games.findById(req.params.id);
		const result = await game.updateOne({ users: req.body.users });
		next();
	} catch (error) {
		console.log(error);
		res.status(400).send({ message: 'Error updating game users array' });
		return;
	}
};

module.exports = updateGameUsers;

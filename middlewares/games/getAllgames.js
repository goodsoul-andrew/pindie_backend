const game = require("../../models/game")


async function getAllGames(req, res, next) {
	req.games = await game.find({}).populate('categories').populate({path: 'users', select: '-password'});
  next();
}


module.exports = getAllGames;

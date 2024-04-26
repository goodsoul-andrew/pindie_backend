const {readData} = require("../app-modules/utils/parse")
const game = require("../models/game")


async function getAllGamesFromJSON(req, res, next) {
	const games = await readData("./dataset/games_data.json");
	if (!games) {
		res.status(400);
		res.send({
			status: 'error',
			message: 'Нет игр в базе данных. Добавьте игру.'
		});
		return;
	}
	req.games = games;
	next();
}

async function getAllGames(req, res, next) {
	req.games = await game.find({}).populate('categories').populate('users');
  next();
}


module.exports = getAllGames;

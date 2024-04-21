const {readData} = require("../app-modules/utils/parse")


async function getGamesData(req, res, next) {
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


module.exports = getGamesData

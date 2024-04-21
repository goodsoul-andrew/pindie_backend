const { writeData } = require('../app-modules/utils/parse');

async function updateGamesFile(req, res, next) {
	await writeData('./dataset/games_data.json', req.games);
	next();
}

module.exports = updateGamesFile;

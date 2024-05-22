const gamesModel = require('../../models/game');

async function checkGameTitleForPut(req, res, next) {
	if (req.body.title === req.game.title) {
	} else {
		let game = await gamesModel.findGameByTitle(req.body.title);
		//console.log(game);
		if (!game) {
			next();
		} else {
			res.setHeader('Content-Type', 'application/json');
			res.status(400).send(JSON.stringify({ message: `Уже есть игра ${req.body.title}` }));
			return;
		}
	}
}

async function checkGameTitleForPost(req, res, next) {
	let game = await gamesModel.findGameByTitle(req.body.title);
	//console.log(game);
	if (!game) {
		next();
	} else {
		res.setHeader('Content-Type', 'application/json');
		res.status(400).send(JSON.stringify({ message: `Уже есть игра ${req.body.title}` }));
		return;
	}
}

module.exports = {checkGameTitleForPut, checkGameTitleForPost};

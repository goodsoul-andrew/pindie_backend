function deleteGame(req, res, next) {
	const id = req.params.id;
	//console.log(id, req.gameExists, req.game)
	if (req.gameExists) {
		const index = req.games.findIndex((item) => item.id === id);
		req.games.splice(index, 1);
		next();
	} else {
		res.status(400);
		res.send({ status: 'error', message: 'Такой игры нет' });
	}
}

module.exports = deleteGame;

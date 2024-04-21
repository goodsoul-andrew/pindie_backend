function findGameById (req, res, next) {
	const id = Number(req.params.id);
	req.game = req.games.find((item) => item.id === id);
	next();
};


module.exports = findGameById;
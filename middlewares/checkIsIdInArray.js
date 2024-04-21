function checkIsIdInArray(req, res, next) {
	const id = Number(req.params.id);
	//const game = req.games.find((item) => {//console.log(item.id, item.id === id);return item.id === id;});
	//console.log(game);
	req.gameExists = Boolean(
		req.games.find((item) => {
			return item.id === id;
		})
	);
	next();
}

module.exports = checkIsIdInArray;

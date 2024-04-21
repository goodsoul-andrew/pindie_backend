function updateGamesArray(req, res, next) {
	if (! req.gameExists) {
		const inArray = req.games.map((item) => Number(item.id));
		let maximalId;
		if (inArray.length > 0) {
			maximalId = Math.max(...inArray);
		} else {
			maximalId = 0;
		}

		req.updatedObject = {
			id: maximalId + 1,
			title: req.body.title,
			image: req.body.image,
			link: req.body.link,
			description: req.body.description
		};
		req.games = [...req.games, req.updatedObject];
		next();
	} else {
		res.status(400);
		res.send({ status: 'error', message: 'Игра с таким именем уже есть.' });
	}
};

module.exports = updateGamesArray;

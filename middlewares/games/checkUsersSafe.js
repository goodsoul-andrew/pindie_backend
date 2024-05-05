const checkUsersSafe = async (req, res, next) => {
	// Проверим, есть ли users в теле запроса
	if (!req.body.users) {
		next();
		return;
	}
	// Cверим, на сколько изменился массив пользователей в запросе
	// с актуальным значением пользователей в объекте game
	// Если больше чем на единицу, вернём статус ошибки 400 с сообщением
	if (req.body.users.length - 1 === req.game.users.length) {
		next();
		return;
	} else {
		res.setHeader('Content-Type', 'application/json');
		res
			.status(400)
			.send(JSON.stringify({ message: 'Нельзя удалять пользователей или добавлять больше одного пользователя' }));
	}
};

module.exports = checkUsersSafe;

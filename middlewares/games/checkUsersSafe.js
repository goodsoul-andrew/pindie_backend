const checkUsersSafe = async (req, res, next) => {
	// Проверим, есть ли users в теле запроса
	// Cверим, на сколько изменился массив пользователей в запросе
	// с актуальным значением пользователей в объекте game
	// Если больше чем на единицу, вернём статус ошибки 400 с сообщением
	//console.log(req.game.users, req.body.users);
	if (req.game.users.length + 1 === req.body.users.length) {
		next();
		return;
	} else {
		//console.log("go to hell")
		res.setHeader('Content-Type', 'application/json');
		res.status(400);
		res.send(JSON.stringify({ message: 'Нельзя удалять пользователей или добавлять больше одного пользователя' }));
		return;
	}
};

module.exports = checkUsersSafe;

const checkEmptyFieldsGame = async (req, res, next) => {
	if (!req.body.title || !req.body.image || !req.body.link) {
		// Если какое-то из полей отсутствует, то не будем обрабатывать запрос дальше,
		// а ответим кодом 400 — данные неверны.
		console.log("missing fields", req.body)
		res.setHeader('Content-Type', 'application/json');
		res.status(400).send(JSON.stringify({ message: 'Заполни все поля' }));
		return;
	} else {
		// Если всё в порядке, то передадим управление следующим миддлварам
		next();
	}
};

module.exports = checkEmptyFieldsGame;

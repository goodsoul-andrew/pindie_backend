const checkEmptyFieldsGame = async (req, res, next) => {
	if (!req.body.title || !req.body.description || !req.body.image || !req.body.link || !req.body.developer) {
		// Если какое-то из полей отсутствует, то не будем обрабатывать запрос дальше,
		// а ответим кодом 400 — данные неверны.
		res.setHeader('Content-Type', 'application/json');
		res.status(400).send(JSON.stringify({ message: 'Заполни все поля' }));
	} else {
		// Если всё в порядке, то передадим управление следующим миддлварам
		next();
	}
};

module.exports = checkEmptyFieldsGame;

const bcrypt = require('bcryptjs');

const hashPassword = async (req, res, next) => {
	try {
		// Создаём случайную строку длиной в десять символов
		const salt = await bcrypt.genSalt(10);
		// Хешируем пароль
		const hash = await bcrypt.hash(req.body.password, salt);
		// Полученный в запросе пароль подменяем на хеш
		req.body.password = hash;
		next();
	} catch (error) {
		res.status(400).send({ message: 'Ошибка хеширования пароля' });
	}
};


module.exports = hashPassword;
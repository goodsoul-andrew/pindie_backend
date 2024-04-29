const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/pindie';

async function connectToDatabase() {
	try {
		await mongoose.connect(DB_URL);
		('Успешно подключились к MongoDB');
	} catch (err) {
		('При подключении MongoDB возникла ошибка');
		console.error(err);
	}
}

module.exports = connectToDatabase;

const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/pindie';

async function connectToDatabase() {
	try {
		await mongoose.connect(DB_URL, { family: 4 });
		console.log('Успешно подключились к MongoDB');
	} catch (err) {
		console.log('При подключении MongoDB возникла ошибка');
		console.log(err);
	}
}

module.exports = connectToDatabase;

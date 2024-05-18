const allowedCors = [
	'https://practicum.yandex.ru',
	'https://students-projects.ru',
	'http://localhost:3000',
	'pindie.good-frontend.ru.nomoredomainswork.ru'
];

function cors(req, res, next) {
	const { origin } = req.headers;

	/*if (allowedCors.includes(origin)) {
		// Если это наш друг
		res.header('Access-Control-Allow-Origin', origin);
		res.header('Access-Control-Allow-Methods', 'POST, PUT, PATCH, GET, DELETE, OPTIONS');
		res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
		//console.log(res);
	}*/
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'POST, PUT, PATCH, GET, DELETE, OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, authorization');

	next();
} 


module.exports = cors;
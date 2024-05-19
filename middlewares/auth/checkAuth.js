const jwt = require('jsonwebtoken');
const users = require("../../models/user")

async function checkAuth (req, res, next) {
	//console.log("checking authorization header...")
	let { Authorization } = req.headers;
	if (! Authorization) { // костыль
		Authorization = req.headers.authorization;
	}
	//console.log(req.headers);

	if (!Authorization || !Authorization.startsWith('Bearer ')) {
		res.status(401).send({ message: 'Необходима авторизация' });
		return;
	}

	try {
		const token = Authorization.replace('Bearer ', '');
		const operatorId = jwt.verify(token, 'super-secret-key')["_id"];
		req.operator = await users.findById(operatorId);
	} catch (err) {
		console.log(err);
		res.status(401).send({ message: 'Необходима авторизация' });
		return;
	}

	next();
};

module.exports = checkAuth;
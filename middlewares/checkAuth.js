const jwt = require('jsonwebtoken');
const users = require("../models/user")

async function checkAuth (req, res, next) {
	const { authorization } = req.headers;
	//console.log(authorization);

	if (!authorization || !authorization.startsWith('Bearer ')) {
		res.status(401).send({ message: 'Необходима авторизация' });
	}

	const token = authorization.replace('Bearer ', '');

	try {
		const operatorId = jwt.verify(token, 'super-secret-key')["_id"];
		req.operator = await users.findById(operatorId);
	} catch (err) {
		res.status(401).send({ message: 'Необходима авторизация' });
	}

	next();
};

module.exports = checkAuth;
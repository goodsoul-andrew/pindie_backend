const users = require('../../models/user');

async function createUser(req, res, next) {
	('POST /users');
	try {
		req.body;
		req.user = await users.create(req.body);
		next();
	} catch (error) {
		error;
		res.status(400).send('Error creating user');
	}
}

module.exports = createUser;

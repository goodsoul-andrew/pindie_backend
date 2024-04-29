const users = require('../models/user');


async function createUser(req, res, next) {
  console.log('POST /users');
  try {
		console.log(req.body);
		req.user = await users.create(req.body);
		next();
	} catch (error) {
		res.status(400).send('Error creating user');
	}
}

module.exports = createUser;
const users = require('../../models/user');

const updateUser = async (req, res, next) => {
	try {
		req.user = await users.findByIdAndUpdate(req.params.id, req.body);
		next();
	} catch (error) {
		console.log(error);
		res.status(400).send({ message: 'Error updating user' });
	}
};

module.exports = updateUser;

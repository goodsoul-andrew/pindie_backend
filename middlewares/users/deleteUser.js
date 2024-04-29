const users = require('../../models/user');

const deleteUser = async (req, res, next) => {
	try {
		req.user = await users.findByIdAndDelete(req.params.id);
		next();
	} catch (error) {
		console.log(error);
		res.status(400).send({ message: 'Error deleting user' });
	}
};

module.exports = deleteUser;

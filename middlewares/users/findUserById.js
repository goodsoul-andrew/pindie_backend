const users = require("../../models/user")


const findUserById = async (req, res, next) => {
	try {
		req.user = await users.findById(req.params.id).select("-password");
		next();
	} catch (error) {
		res.status(404).send({ message: 'User not found' });
	}
};

module.exports = findUserById;
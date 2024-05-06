const users = require("../../models/user");

async function login (req, res) {
	const { email, password } = req.body;
	//console.log(email, password)
	try {
		const user = await users.findUserByCredentials(email, password);
		res.status(200).send({ _id: user._id, username: user.username, email: user.email });
	} catch (error) {
		res.status(401).send({ message: error.message });
	}
};


const authRouter = require('express').Router();
authRouter.post('/auth/login', login);

module.exports = authRouter;
